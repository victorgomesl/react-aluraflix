import React from 'react';
import './MainCard.css';
import Category from '../Category/category';
import VideoList from '../VideoList/VideoList';
import front1 from '../../images/front1.png';
import front2 from '../../images/front2.png';
import front3 from '../../images/front3.png';
import front4 from '../../images/front1.png';
import backend1 from '../../images/backend1.png';
import backend2 from '../../images/backend2.png';
import backend3 from '../../images/backend3.png';
import mobile1 from '../../images/mobile1.png';
import mobile2 from '../../images/mobile2.png';
import mobile3 from '../../images/mobile3.png';

function MainCard() {
  const frontendVideos = [
    { id: 1, image: front1 },
    { id: 2, image: front2 },
    { id: 3, image: front3 },
    { id: 4, image: front4 },
  ];

  const backendVideos = [
    { id: 1, image: backend1 },
    { id: 2, image: backend2 },
    { id: 3, image: backend3 },
    { id: 4, image: backend1 },
  ];

  const mobileVideos = [
    { id: 1, image: mobile1 },
    { id: 2, image: mobile2 },
    { id: 3, image: mobile3 },
    { id: 4, image: mobile1 },
  ];

  return (
    <div className="main-card">
      <div className="topic">
        <Category id={1} title="FRONT END" />
        <VideoList videos={frontendVideos} strokeColor="#6BD1FF" />
      </div>
      <div className="topic">
        <Category id={2} title="BACK END" />
        <VideoList videos={backendVideos} strokeColor="#00C86F" />
      </div>
      <div className="topic">
        <Category id={3} title="MOBILE" />
        <VideoList videos={mobileVideos} strokeColor="#FFBA05" />
      </div>
    </div>
  );
}

export default MainCard;
