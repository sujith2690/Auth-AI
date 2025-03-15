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

import Marquee from "react-fast-marquee";

const RunningBar = () => {
    const images = [
        { src: html, alt: 'HTML5 Logo' },
        { src: css, alt: 'CSS3 Logo' },
        { src: github, alt: 'GitHub Logo' },
        { src: reactimage, alt: 'React Logo' },
        { src: express, alt: 'Express Logo' },
        { src: jwt, alt: 'JWT Logo' },
        { src: postgresql, alt: 'PostgreSQL Logo' },
        { src: npm, alt: 'NPM Logo' },
        { src: mui, alt: 'Material UI Logo' },
        { src: redux, alt: 'Redux Logo' },
        { src: node, alt: 'Node.js Logo' },
        { src: javascript, alt: 'JavaScript Logo' },
        { src: tailwind, alt: 'Tailwind CSS Logo' },
        { src: mongodb, alt: 'MongoDB Logo' },
        { src: bootstrap, alt: 'Bootstrap Logo' },
        { src: angular, alt: 'Angular Logo' },
        { src: typeScript, alt: 'TypeScript Logo' },
    ];

    return (
        <div className="flex bg-inherit items-center justify-center p-4 py-10 overflow-x-hidden">
            <div className='flex flex-col gap-2 md:gap-4 w-5/6'>
                <Marquee pauseOnHover speed={50} direction='right' gradient={false}>
                    {images.map((item, i) => (
                        <div key={i} className="flex items-center justify-center mx-4 transition-transform transform hover:scale-110">
                            <img
                                src={item.src}
                                alt={item.alt}
                                className="h-10 w-10 md:h-20 md:w-20 object-contain"
                            />
                        </div>
                    ))}
                </Marquee>

                <Marquee pauseOnHover speed={50} direction="left" gradient={false}>
                    {images.map((item, i) => (
                        <div key={i} className="flex items-center justify-center mx-4 transition-transform transform hover:scale-110">
                            <img
                                src={item.src}
                                alt={item.alt}
                                className="h-10 w-10 md:h-20 md:w-20 object-contain"
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default RunningBar;
