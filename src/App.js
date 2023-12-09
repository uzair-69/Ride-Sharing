import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Homepage/Navbar';
import HomePage from './components/Homepage/HomePage';
import Driver from './components/Platform/Driver/Home';
import Pessenger from './components/Platform/Pessenger/Home';
import About from './components/Homepage/About';
import Safety from './components/Homepage/Safety';
import Help from './components/Homepage/Help';
import Contact from './components/Homepage/Contact';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Homepage/Footer';
import DriverReg from './components/Platform/Driver/Registeration';
import DriverLogin from './components/Platform/Driver/Login';

function App() {
  return (
    <div className="body">
      <Navbar />
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Safety" element={<Safety />} />
        <Route path="/Help" element={<Help />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Driver" element={<Driver />} />
        <Route path="/Pessenger" element={<Pessenger />} />
        <Route path="/DriverRegistration" element={<DriverReg />} />
        <Route path="/DriverLogin" element={<DriverLogin />} />

      </Routes>
      <Footer />

    </div> 
  );
}

export default App;
