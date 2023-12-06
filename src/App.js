import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Homepage/Navbar';
import Driver from './components/Platform/Driver/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>

        <Route path="/Driver" element={<Driver />} />

      </Routes>









    </>
  );
}

export default App;
