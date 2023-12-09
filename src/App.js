import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Homepage/Navbar';
import Driver from './components/Platform/Driver/Home';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/Homepage/HomePage';
import Footer from './components/Homepage/Footer';

function App() {
  return (
    <div className="body">
      <Navbar />
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/Driver" element={<Driver />} />
        <Route path="/Passenger" element={<Driver />} />


      </Routes>
      <Footer />

    </div> 
  );
}

export default App;
