import React from 'react';
import html from '../../assets/images/mobile/html.png';
import css from '../../assets/images/mobile/css.png';
import github from '../../assets/images/mobile/github.png';
import reactimage from '../../assets/images/mobile/react.png';
import express from '../../assets/images/mobile/expressjs-white.png';
import jwt from '../../assets/images/mobile/jwt.png';
import postgresql from '../../assets/images/mobile/postgresql.png';
import npm from '../../assets/images/mobile/npm.png';
import mui from '../../assets/images/mobile/MUI.png';
import redux from '../../assets/images/mobile/redux.png';
import node from '../../assets/images/mobile/node.png';
import javascript from '../../assets/images/mobile/javascript.png';
import tailwind from '../../assets/images/mobile/tailwind.png';
import mongodb from '../../assets/images/mobile/mongodb.png';
import bootstrap from '../../assets/images/mobile/bootstrap.png';
import angular from '../../assets/images/mobile/angular.png';
import typeScript from '../../assets/images/mobile/typeScript.png';
import next from '../../assets/images/mobile/nextJs.png';

import Marquee from "react-fast-marquee";

const RunningBar = () => {
    const images = [
        html,
        css,
        github,
        reactimage,
        express,
        jwt,
        postgresql,
        npm,
        mui,
        redux,
        node,
        javascript,
        tailwind,
        mongodb,
        bootstrap,
        angular,
        typeScript,
        next,
    ];

    return (
        <div className="flex bg-inherit items-center justify-center p-4">
            <div className=' flex flex-col w-5/6'>
                <Marquee pauseOnHover speed={50} direction='right' gradient={false}>
                    {images.map((item, i) => (
                        <div key={i} className="flex items-center justify-center mx-4">
                            <img
                                src={item}
                                alt={`tech-${i}`}
                                className="h-16 w-16 md:h-20 md:w-20 object-contain"
                            />
                        </div>
                    ))}
                </Marquee>
                <div>

                </div>
                <Marquee pauseOnHover speed={50} direction="left" gradient={false}>

                    {images.map((item, i) => (
                        <div key={i} className="flex items-center justify-center mx-4">
                            <img
                                src={item}
                                alt={`tech-${i}`}
                                className="h-16 w-16 md:h-20 md:w-20 object-contain"
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default RunningBar;
