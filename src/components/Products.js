import React from 'react';
import '../App.css'
import product1 from "../images/nike.jpg";
import product2 from "../images/watch.jpg";
import product3 from "../images/iphone.jpg";

const Products = () => {
    return (
        <section className="section " >
            <div className="container" >
                <div className="row" >
                    <div className="col-md-12 mb-4 text-center" >
                        <h3 className="main-heading contactme">Products</h3>
                    </div >
                    <div className="col-md-4">
                        <div className="card shadow ">
                            <img src={product1} className="w-100 border-bottom product" style={{ height: 275, weight: 183 }} alt="services" />
                            <div className="card-body">
                                <h6>Shoe</h6>
                                <p className='shoe'>
                                A covering for the foot, typically made of leather, having a sturdy sole and not reaching above the ankle..
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4">
                        <div className="card shadow">
                            <img src={product2} className="w-100 border-bottom product" style={{ height: 275, weight: 183 }} alt="services" />
                            <div className="card-body">
                                <h6>Smart Watch</h6>
                                <p className='shoe'>
                                A mobile device with a touchscreen display, designed to be worn on the wristy with bluetooth connection 
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4">
                        <div className="card shadow">
                            <img src={product3} className="w-100 border-bottom product" style={{ height: 275, weight: 183 }} alt="services" />
                            <div className="card-body">
                                <h6>Iphone</h6>
                                <p className='shoe'>
                                Capable of moving or being moved and changeable in appearance, mood, or purpose.
                                </p>
                            </div>
                        </div>

                    </div>

                </div >
            </div >
        </section >
    );
};

export default Products;