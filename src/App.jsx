import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
// Import your pages
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import HomePage from './components/HomePage';
import IndustriesPage from './components/IndustriesPage'; 
import ServicesPage from './components/ServicesPage';
import TrainingPage from './components/trainingPage.jsx';
import ManpowerPage from './components/ManpowerPage.jsx';
import SoftwarePage from './components/SoftwarePage.jsx';
import AuditPage from './components/AuditPage.jsx';
import SpecializedPage from './components/SpecializedPage.jsx';

export default function App() {
  return (
    <Router>
      <div className="app">
        {/* <Header /> */}
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/training" element={<TrainingPage />} />
            <Route path="/manpower" element={<ManpowerPage />} />
            <Route path="/software" element={<SoftwarePage />} />
            <Route path="/audit" element={<AuditPage />} />
            <Route path="/specialized" element={<SpecializedPage />} />
            
          </Routes>
        </main>
      </div>
    </Router>
  );
}