import React from 'react';
import './VideoList.css';
import VideoCard from '../VideoCard/VideoCard';

function VideoList({ videos, strokeColor }) {

  const handleDelete = (id) => {
    console.log(`Delete video ${id}`);
  };

  const handleEdit = (id) => {
    console.log(`Edit video ${id}`);
  };

  return (
    <div className="video-list">
      <div className="video-list-container">
        {videos.map(video => (
          <VideoCard
            key={video.id}
            id={video.id}
            image={video.image}
            strokeColor={strokeColor}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
}

export default VideoList;
