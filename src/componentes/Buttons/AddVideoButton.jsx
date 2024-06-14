import React from 'react';
import './buttons.css';
import { Link } from 'react-router-dom';

function AddVideoButton() {
  return (
    <Link to="/add-video" className="button">NOVO VÍDEO</Link>
  );
}

export default AddVideoButton;
