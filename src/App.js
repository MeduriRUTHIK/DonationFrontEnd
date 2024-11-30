import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Appbar from './components/Appbar'; 
import Donation from './components/Donation';
import LifePage from './components/LifePage'; // Import the LifePage component
import HomePage from './components/HomePage';
import CSRPage from './components/CSRPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
function App() {
  return (
    <Router>
      <div className="App">
        <Appbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Donation" element={<Donation />} /> {/* Default route */}
          <Route path="/life" element={<LifePage />} /> {/* LifePage route */}
          <Route path="/csr" element={<CSRPage />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/register" element={<RegisterPage />}/>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
