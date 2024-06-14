import React from 'react';
import './banner.css';
import bannerImage from '../../images/banner.png';

function Banner() {
  return (
    <div className="banner">
      <div className="banner-wrapper">
        <div className="card">
          <div className="left-section">
            <div className="title-category">FRONT END</div>
            <div className="sub-title-category">SEO com React</div>
            <div className="text-left-section">
              Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"!
            </div>
          </div>
          <div className="right-section">
            <div className="player">
              <img src={bannerImage} alt="Video Player" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
