import React from "react";
import '../App.css'
import Slider from './Slider'

export default function Home(){
    return(
        <div>
            <Slider/>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                        <h3 className="main-heading contactme">React Minor Project</h3>
                            <div className="underline mx-auto"></div>
                            <br />
                            <p className="home-p">
                            React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
                            Where I going to do website using this React JS. I create multiple Web pages and link each other and every page it contain Images,Html tags, and CSS to design web pages.  
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
