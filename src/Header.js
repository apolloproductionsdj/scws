import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import './fonts.css';
import HomeIcon from '@material-ui/icons/Home';
import BuildIcon from '@material-ui/icons/Build';
import LocalCarWashIcon from '@material-ui/icons/LocalCarWash';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import InfoIcon from '@material-ui/icons/Info';
import HeaderOption from './HeaderOption';


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
              <HeaderOption Icon={HomeIcon}text="Home" />
              <HeaderOption Icon={LocalCarWashIcon} text="Service" />
              <HeaderOption Icon={BuildIcon} text="Equipment" />
              <HeaderOption Icon={InvertColorsIcon} text="Chemical" />
              <HeaderOption Icon={InfoIcon} text="About Us" />
          </div>   
        </div>
    )
}

export default Header
