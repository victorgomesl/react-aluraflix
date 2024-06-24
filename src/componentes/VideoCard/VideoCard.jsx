import React from 'react';
import './VideoCard.css';
import deleteIcon from '../../images/trash.png';
import editIcon from '../../images/edit.png';

function VideoCard({ id, image, strokeColor, onDelete, onEdit }) {
  return (
    <div className="video-card" style={{ borderColor: strokeColor }}>
      <img src={image} alt={`Video ${id}`} className="video-image" />
      <div className="video-controls">
        <button onClick={() => onDelete(id)} className="video-control delete">
          <img src={deleteIcon} alt="Delete" />
          <span>DELETAR</span>
        </button>
        <button onClick={() => onEdit(id)} className="video-control edit">
          <img src={editIcon} alt="Edit" />
          <span>EDITAR</span>
        </button>
      </div>
    </div>
  );
}

export default VideoCard;
