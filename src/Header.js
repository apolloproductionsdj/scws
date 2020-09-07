import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import './fonts.css';
import HomeIcon from '@material-ui/icons/Home';
import BuildIcon from '@material-ui/icons/Build';
import LocalCarWashIcon from '@material-ui/icons/LocalCarWash';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import InfoIcon from '@material-ui/icons/Info';


function Header() {
    return (
        <div className="header">
          <div className="header__left">
            <h1>SCWS</h1>
            <img 
              src="https://t3.ftcdn.net/jpg/02/70/91/20/240_F_270912040_74qCtqgqhW87QIVrO2xdkos87SnNI3wF.jpg"
              alt=""
            />
            <div className="header__input">
                <SearchIcon />
                <input type='text' />
            </div>
          </div>
          <div className="header__right">
            <div className="header__option">
              <HomeIcon fontSize="Large" />
              <h3>Home</h3>
            </div>
            <div className="header__option">
              <LocalCarWashIcon fontSize="Large" />
              <h3>Service</h3>
            </div>
            <div className="header__option">
              <BuildIcon fontSize="Large" />
              <h3>Equipment</h3>
            </div>
            <div className="header__option">
              <InvertColorsIcon fontSize="Large" />
              <h3>Chemical</h3>
            </div>
            <div className="header__option">
              <InfoIcon fontSize="Large" />
              <h3>About Us</h3>
            </div>
          </div>
            
            
        </div>
    )
}

export default Header
