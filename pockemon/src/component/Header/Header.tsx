import React from 'react';
import './Header.scss';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__container">
        <img
          src="./image/International_Pokémon_logo.svg.png"
          alt="logo-pockemon"
          className="header__logo-image"
        />
      </div>
    </header>
  );
};
