import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await axios.get('http://localhost:3001/videos');
      setVideos(response.data);
    };

    fetchVideos();
  }, []);

  return (
    <VideoContext.Provider value={{ videos, setVideos }}>
      {children}
    </VideoContext.Provider>
  );
};

export default VideoContext;
