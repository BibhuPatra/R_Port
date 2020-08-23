import React from 'react';
import { NavLink } from 'react-router-dom';

export const Common = (props) => {
    return (
                <>
                <section id= "header" className= "d-flex ">
                <div className="container-fluid">
                    <div className = "row">
                        <div className="col-md-6 pt-5 mt-md-5  order-2 order-lg-1 d-flex flex-column">
                            {props.name}
                            <h1><strong className = "brand-name">Bibhu Ptr</strong> from Odisha</h1>
                            <h2 className = "my-3">I am a very Asthetic &rarr; Developer </h2>
                            <h6>I love my story. Sure It's messy, But its the story got me here</h6>
                            <div className = "mt-3">
                            <NavLink to={props.visit} className="btn-get-started">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                {props.btname}
                            </NavLink>
                            </div>
                        </div>
                        <div className = "col-lg-6 order-1 order-2 header-img pt-5">
                            <img src = {props.imgsrc}id ="ani" className="img-fluid vert-move" alt= "Home img"/>
                        </div> 
                    </div>
                </div>
                </section>
                </>
            )
    }

export default Common;