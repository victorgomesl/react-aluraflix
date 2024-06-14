import React from 'react';
import './buttons.css';
import { Link } from 'react-router-dom';

function HomeButton() {
  return (
    <Link to="/" className="button">HOME</Link>
  );
}

export default HomeButton;
