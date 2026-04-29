import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
