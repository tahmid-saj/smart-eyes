import React from 'react';
import { Tilt } from 'react-tilt';
import './Logo.css';
import eyes from './eyes-icon.png';

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2" options={{max: 100}} style={{ height: 85, width: 150 }}>
            <div className="Tilt-inner"><img src={eyes} style={{paddingTop: '1px'}}alt="logo"></img></div>
            </Tilt>
        </div>
    );
}

export default Logo;