import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Home from "./pages/Home";
import DoctorsPage from "./pages/Doctors";
import ServicesPage from "./pages/Services";
import Appointment from "./pages/Appointment";
import { Toaster } from "react-hot-toast";

const App: React.FC = () => {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            borderRadius: "12px",
            background: "#facc15",
            color: "#1a2732",
          },
        }}
      />
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
    </>
  );
};

export default App;
