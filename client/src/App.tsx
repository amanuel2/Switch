import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Landing from './views/landing/landing'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>}/>
      </Routes>
    </Router>
  );
}

export default App;
