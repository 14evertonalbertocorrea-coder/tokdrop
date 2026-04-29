import axios from "axios";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "URL não informada." });
  }

  if (!url.includes("tiktok.com")) {
    return res.status(400).json({ error: "Insira um link válido do TikTok." });
  }

  try {
    const apiUrl = `https://www.tikwm.com/api/?url=${encodeURIComponent(url)}`;
    const response = await axios.get(apiUrl, {
      timeout: 15000,
      headers: {
        "User-Agent": "Mozilla/5.0"
      }
    });

    if (
      response.data &&
      response.data.data &&
      (response.data.data.play || response.data.data.hdplay)
    ) {
      const video = response.data.data;

      return res.status(200).json({
        success: true,
        videoUrl: video.hdplay || video.play,
        title: video.title || "TokDrop Video",
        author: video.author?.nickname || "TikTok User",
        thumbnail: video.cover || ""
      });
    }

    return res.status(500).json({
      error: "Não foi possível processar este vídeo no momento."
    });
  } catch (error: any) {
    console.log("TikTok API Error:", error.message);

    return res.status(500).json({
      error: "Erro ao buscar vídeo do TikTok. Tente novamente em alguns instantes."
    });
  }
}
