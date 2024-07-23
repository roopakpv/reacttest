import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArtList from './components/ArtList';
import ArtDetail from './components/ArtDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ArtList />} />
        <Route path="/artwork/:id" element={<ArtDetail />} />
      </Routes>
    </Router>
  );
}

export default App;