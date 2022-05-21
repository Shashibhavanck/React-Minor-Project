import React from 'react';
import '../App.css'
import service1 from "../images/html5.png";
import service2 from "../images/css.png";
import service3 from "../images/javascript.png";

const Services = () => {
    return (
        <section className="section " >
            <div className="container" >
                <div className="row" >
                    <div className="col-md-12 mb-4 text-center" >
                        <h3 className="main-heading contactme">Services</h3>
                    </div >
                    <div className="col-md-4">
                        <div className="card shadow card">
                                <img src={service1} className="w-100 border-bottom html" alt="services"/>
                            <div className="card-body">
                                <h6>service 1</h6>
                                <p>
                                    I'm good  in html5 where I can create a structure of web page and its content. 
                                </p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow">
                                <img src={service2} className="w-100 border-bottom html" alt="services"/>
                            <div className="card-body">
                                <h6>service 2</h6>
                        <p>
                            I'm good in CSS also where by using CSS, I can format layout of web pages and also I can desgin the web pages. 
                        </p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow">
                                <img src={service3} className="w-100 border-bottom html" alt="services"/>
                            <div className="card-body">
                                <h6>service 3</h6>
                        <p>
                            I'm good in javascript also where I can make web pages intractive and I can create create dynamically updating content, control multimedia, animate images etc..
                        </p>
                            </div>
                        </div>
                        
                    </div>
                    
                </div >
            </div >
        </section >
    );
};

export default Services;