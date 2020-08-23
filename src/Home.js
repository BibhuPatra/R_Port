import React from 'react';
import web from './imges/home.svg';
import Common from './Common';

export const Home = () => {
    return (
        <>
        <Common 
        name= 'Grow Your Business With Me' 
        imgsrc ={web} 
        visit="/Service" 
        btname = "Get Started"/>
        </>
    )
}

export default Home;