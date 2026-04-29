import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Contact from './pages/Contact';
import HowToDownload from './pages/HowToDownload';
import MobileDownloader from './pages/MobileDownloader';
import DownloadFAQ from './pages/DownloadFAQ';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/how-to-download-tiktok-video" element={<HowToDownload />} />
        <Route path="/tiktok-downloader-mobile" element={<MobileDownloader />} />
        <Route path="/download-tiktok-faq" element={<DownloadFAQ />} />
      </Routes>
    </HashRouter>
  );
}
