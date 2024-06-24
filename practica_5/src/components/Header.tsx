import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className='header'>
      <p>Адрес: г. Москва, проспект Маршала Жукова, 35</p>
      <p>Телефон: +7 499 342-12-56</p>
    </header>
  );
}

export default Header;