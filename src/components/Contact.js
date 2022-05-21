import React from "react";
import '../App.css'
import { Container, Row, Col } from "react-bootstrap"

export default function Contact(){
    return(
        <Container>
            <Row className="mb-5 mt-3">
                <Col lg="12">
                    <h1 className="display-4 mb-4 contactme">Contact Me!</h1>
                </Col>
            </Row>
            <Row className="sec_sp">
                <Col lg='5' className="mb-5">
                    <h3 className="color_sec py-4 touch contactmee">Get in Touch</h3>
 
                    <address className="address">
                        <strong><span>Email:</span> shashibhavanck1431@gamil.com</strong><br></br>
                        <p><strong><span>Phone:</span>  7483984655</strong></p>
                    </address>
                    <p className="para">I stay in banglore, K R puram, Devasandra main road.</p>
                </Col>
                <Col lg='7' className="d-flex align-items-center">
                    <form className="contact__form w-100">
                        <Row>
                            <Col lg='6' className="form-group">
                                <input className="form-control" id="name" name="name" placeholder="Name" type="text" required></input>
                            </Col>
                            <Col lg='6' className="form-group">
                                <input className="form-control rounded-0 control" id="email" name="email" placeholder="Email" type="email" required></input>
                            </Col>
                        </Row>
                        <textarea className="form-control rounded-0 control" id="message" name="message" placeholder="Dout?" rows="5"></textarea>
                        <br></br>
                        <Row>
                            <Col lg='12' className="form-group">
                                <button className="btn ac_btn" type="submit">Sumbit</button>
                            </Col>
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    );
}

