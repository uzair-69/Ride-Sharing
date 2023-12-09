import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Homepage/Navbar';
import Driver from './components/Platform/Driver/Home';
import Pessenger from './components/Platform/Pessenger/Home';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/Homepage/HomePage';
import Footer from './components/Homepage/Footer';
import DriverReg from './components/Platform/Driver/Registeration';
import DriverLogin from './components/Platform/Driver/Login';

function App() {
  return (
    <div className="body">
      <Navbar />
      <Routes>

        <Route path="/" element={<HomePage />} />
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
