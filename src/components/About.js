import React from "react";
import pic from '../images/shashi.jpg'

export default function About(){
    return(
        <div>
            <section className="py-4 ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 my-auto">
                            <h4 className="main-heading  contactme">About Me!</h4>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <img src={pic} class="rounded float-start shadow  float" alt="..." />
                    <h5 className="col-md-8 main-heading text-success home-pe">Shashi Bhavan C K</h5>
                    <p className="home-p">
                    Hey here! I'm styding 3rd year B.E Computer Science student in M V J Collage Of Engg looking to gain
                    experience in Web development. Well-versed with multiple
                    programming languages including Javascript, Python,
                    and SQL.

                    </p>
            
                </div>
            </section >
        </div>
    );
}