import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../App.css';

const ArtDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { artwork, currentPage } = location.state;
  
  if (!artwork) return <div>Loading...</div>;
  return (
    <div className="artwork-detail">
     <button onClick={() => navigate('/', { state: { currentPage } })}>Back</button>
      <h1>{artwork.title}</h1>
      <img src={require(`../images/${artwork.img}`)}/>
      <p><strong>Artist:</strong> {artwork.artist_display}</p>
      <p><strong>Date:</strong> {artwork.date_display}</p>
      <p><strong>Reference Number:</strong> {artwork.main_reference_number}</p>
      <p><strong>Dimensions:</strong> {artwork.dimensions}</p>
    </div>
  );
};

export default ArtDetail;
