import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import axios from "axios";
import * as cheerio from "cheerio";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

async function startServer() {
  app.use(cors());
  app.use(express.json());

  // API Route for downloading TikTok videos
  app.post("/api/download", async (req, res) => {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ error: "URL is required" });
    }

    // Basic URL validation
    const tiktokRegex = /tiktok\.com/;
    if (!tiktokRegex.test(url)) {
      return res.status(400).json({ error: "Por favor, insira um link válido do TikTok." });
    }

    try {
      // Primary method: tikwm.com API (Free, stable, no watermark)
      const tiktokApiUrl = `https://www.tikwm.com/api/?url=${encodeURIComponent(url)}`;
      const apiResponse = await axios.get(tiktokApiUrl, { timeout: 10000 });

      if (apiResponse.data && apiResponse.data.data) {
        const videoData = apiResponse.data.data;
        return res.json({
          success: true,
          videoUrl: videoData.play || videoData.hdplay || videoData.wmplay,
          title: videoData.title || "TokDrop Video",
          author: videoData.author?.nickname || "TikTok User",
          thumbnail: videoData.cover || ""
        });
      }

      // Fallback: Scrape TikTok page if API fails
      const response = await axios.get(url, {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36",
          "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
          "Accept-Language": "en-US,en;q=0.9",
        },
        timeout: 10000,
      });

      const $ = cheerio.load(response.data);
      const scriptTag = $("script#__UNIVERSAL_DATA_FOR_REHYDRATION__").text();
      
      let videoUrl = "";
      let title = "Download de Vídeo do TikTok";
      let author = "TikTok User";

      if (scriptTag) {
        try {
          const data = JSON.parse(scriptTag);
          const videoDetail = data["__DEFAULT_SCOPE__"]?.["webapp.video-detail"]?.itemInfo?.itemStruct;
          
          if (videoDetail) {
            videoUrl = videoDetail.video.downloadAddr || videoDetail.video.playAddr;
            title = videoDetail.desc || title;
            author = videoDetail.author.nickname || author;
          }
        } catch (e) {
          console.error("Error parsing script tag", e);
        }
      }

      if (!videoUrl) {
         videoUrl = $('meta[property="og:video"]').attr('content') || 
                   $('meta[property="og:video:url"]').attr('content') || "";
      }

      if (videoUrl) {
        return res.json({
          success: true,
          videoUrl,
          title,
          author,
          thumbnail: $('meta[property="og:image"]').attr('content') || ""
        });
      }

      return res.status(404).json({ 
        error: "Não foi possível processar este vídeo. Verifique se o link é público e tente novamente." 
      });

    } catch (error: any) {
      console.error("Download Error:", error.message);
      return res.status(500).json({ 
        error: "Erro ao conectar com o TikTok. Tente novamente mais tarde ou verifique o link." 
      });
    }
  });

  // Proxy route to bypass TikTok blocks and timeouts
  app.get("/api/proxy", async (req, res) => {
    const videoUrl = req.query.url as string;
    
    if (!videoUrl) {
      return res.status(400).send("Video URL is required");
    }

    try {
      const response = await axios({
        method: 'get',
        url: videoUrl,
        responseType: 'stream',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
          'Referer': 'https://www.tiktok.com/',
          'Accept': '*/*',
        },
        timeout: 30000,
        maxRedirects: 5,
      });

      res.setHeader('Content-Type', 'video/mp4');
      res.setHeader('Content-Disposition', 'attachment; filename="tokdrop-video.mp4"');
      
      // Pass through content-length if available
      const contentLength = response.headers['content-length'];
      if (contentLength) {
        res.setHeader('Content-Length', contentLength.toString());
      }
      
      response.data.pipe(res);
    } catch (error) {
      console.error("Proxy error:", error);
      // Fallback for 403 or other errors in proxy: Redirect to the original URL
      // This is a last resort if the server is blocked but the user might not be
      res.redirect(videoUrl);
    }
  });

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Serve static files from the React app
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  if (process.env.NODE_ENV !== "test") {
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running at http://0.0.0.0:${PORT}`);
    });
  }
}

startServer();

export default app;
