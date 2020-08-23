import React from 'react';
import web from './imges/about.svg';
import { Common } from './Common';

export const About = () => {
    return (
        <>
        <Common 
        name= 'Welcome to About Page' 
        imgsrc ={web} 
        visit="/Contact" 
        btname = "contact now"/>
        </>
    )
}

export default About;