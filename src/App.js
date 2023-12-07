import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Homepage/Navbar';
import Driver from './components/Platform/Driver/Home';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/Homepage/HomePage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/Driver" element={<Driver />} />
        <Route path="/Passenger" element={<Driver />} />


      </Routes>

    </>
  );
}

export default App;
