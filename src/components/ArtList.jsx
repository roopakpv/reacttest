import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import SearchBar from './SearchBar';
import '../App.css';

const ArtList = () => {
  const location = useLocation();
  const initialPage = location.state?.currentPage || 1;
  const [artworks, setArtworks] = useState([]);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const response = await axios.get('/mockAPI/api.json');
        setArtworks(response.data.artworks);
        setTotalPages(Math.ceil(response.data.artworks.length / 10));
      } catch (error) {
        console.error('Error fetching artwork data', error);
      }
    };

    fetchArtworks();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const filteredArtworks = artworks.filter(artwork => 
    artwork.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="artwork-list">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="artwork-grid">
        {filteredArtworks.slice((currentPage - 1) * 10, currentPage * 10).map(artwork => (
          <div key={artwork.id} className="artwork-item">           
            <Link
              to={`/artwork/${artwork.id}`}
              className='link-reset'
              state={{ artwork, currentPage }}
            >
              <h2 className='marginb pointer'>{artwork.title}</h2>
              <sup className='pointer'>{artwork.thumbnail}</sup>
            </Link>
          </div>
        ))}
      </div>
      <div className="pagination">
        {[...Array(totalPages).keys()].map(page => (
          <button key={page + 1} onClick={() => handlePageChange(page + 1)}>
            {page + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ArtList;
