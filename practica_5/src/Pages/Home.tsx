import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footes';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export const Home: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Здоровая лапка</title>
        <meta property="og:title" content="Здоровая лапка" />
        <meta property="og:description" content="Описание вашего веб-сайта здесь." />
        <meta property="og:image" content="https://example.com/your-image.jpg" />
      </Helmet>
      <Header />
      <p className='h_Header'>Здоровая лапка</p>
      <form className='h_Header' action='/services'>
        <button className='buttonService'>Услуги</button>
      </form>
      <img className='imgHome' src="https://avatars.mds.yandex.net/i?id=8d8da10023bf463fe81990e41aaaaa345d7d2ac6-10966719-images-thumbs&n=13" />
      <Footer />
    </div>
  );
}  
