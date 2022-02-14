import React, { Component } from 'react'
import { AiOutlineMail, AiFillPhone } from "react-icons/ai";
import { BsClockFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

import { Container, Row, Col } from 'reactstrap';

export class Footer extends Component {
    render() {
        return (
            <div>
                     <footer className="footer">
                    <Container>
                        <Row>
                            <Col sm="12" lg="4 " md="4" className=" wow slideInLeft"  data-wow-duration="2s" data-wow-delay="0.1s">
                                <h3>Rouge</h3>
                                <p>Ut mi sapien, hendrerit vehicula diam sollicitudin, iaculis commodo augue. Sed feugiat et ligula quis loborti. </p>
                            </Col>
                            <Col sm="12" lg="4 " md="4"  className="iconssss wow slideInDown"  data-wow-duration="2s" data-wow-delay="0.1s">
                                <h3> Contact Info</h3>
                                <div c><AiOutlineMail /><p>contact@beauty.com</p></div>
                                <div><AiFillPhone /><p>123 456 789</p></div>
                            </Col>
                            <Col sm="12" lg="4 " md="4"  className="iconssss wow slideInRight"  data-wow-duration="2s" data-wow-delay="0.1s">
                                <h3>Visit us </h3>
                                <div><BsClockFill /><p>Monday to Friday 7am to 8pm</p></div>
                                <div><GoLocation /><p>Coppice Celyn 123, MA US</p></div>
                            </Col>
                         
                        </Row>
                    </Container>
                </footer>

            </div>
        )
    }
}

export default Footer
