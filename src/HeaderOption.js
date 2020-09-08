import React from 'react';
import './HeaderOption.css';

function HeaderOption({ text, Icon }) {
    return (
        <div className="headerOption">
          <Icon />
          <h2>{text}</h2>
        </div>
    )
}

export default HeaderOption;
