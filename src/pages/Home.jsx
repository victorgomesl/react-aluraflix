import React, { useEffect, useState } from 'react';
import api from '../utils/api';
import Banner from '../componentes/Banner/Banner';
import MainCard from '../componentes/Main/MainCard';

function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    api.get('/videos')
      .then(response => {
        setVideos(response.data);
      })
      .catch(error => {
        setVideos([]);
      });
  }, []);

  return (
    <div className="home">
      <Banner />
      <MainCard videos={videos} />
    </div>
  );
}

export default Home;
