import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Login from './views/auth/login/login'
import Register from './views/auth/register/register'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </Router>
  );
}

export default App;
