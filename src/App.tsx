
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Home from './pages/Home';
import DoctorsPage from './pages/Doctors';
import ServicesPage from './pages/Services';
import Appointment from './pages/Appointment';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctors" element={<DoctorsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/appointment" element={<Appointment />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
