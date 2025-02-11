import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Login from './Components/Login';
import Register from './Components/Register';
import Notes from './Components/Notes';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

  const handleLogin = (token) => {
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route 
            path="/login" 
            element={
              !isAuthenticated ? 
                <Login onLogin={handleLogin} /> : 
                <Navigate to="/" />
            } 
          />
          <Route 
            path="/register" 
            element={
              !isAuthenticated ? 
                <Register onRegister={handleLogin} /> : 
                <Navigate to="/" />
            } 
          />
          <Route 
            path="/" 
            element={
              isAuthenticated ? 
                <Notes onLogout={handleLogout} /> : 
                <Navigate to="/login" />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;