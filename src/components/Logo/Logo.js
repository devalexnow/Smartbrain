import React from "react";
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './Logo.png';

const Logo = () => {
    return (
        <div >
            <Tilt className="TiltStyle shadow-2" glareEnable={true} glareMaxOpacity={0.7} glareColor="#ffffff" glarePosition="bottom" glareBorderRadius="15px">
                <div className="pa3 center" >
                    <img alt= 'logo' src={brain}/>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;

