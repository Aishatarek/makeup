import React, { Component } from 'react'
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import Footer from "./Footer";
import { Container, Row, Col, Button } from 'reactstrap';
import Slider from "react-slick";

export class Ourteam extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true
        };
        return (
            <div>
                <section className="teamsec1">
                    <Container>
                        <Row className="psec2">
                            <Col sm="12" lg="6 " md="6" className=" wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.1s">
                                <img src="images/makeup-artist-glues-eyelashes-e1621502878764-p7ftqwb3yh9iw6hsh0pt22mjuke63mmbxwlivdrvq0.jpg" alt="" />

                            </Col>
                            <Col sm="12" lg="6 " md="6" className=" wow slideInRight" data-wow-duration="2s" data-wow-delay="0.1s">
                                <h3>Our Team</h3>
                                <h5>
                                    Makeup is not a mask that covers up your beauty; it’s a weapon that helps you express who you are from the inside.
                                </h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non est orci. Sed vitae nisl libero.

                                    Ut mi sapien, hendrerit vehicula diam sollicitudin, iaculis commodo augue. Sed feugiat et ligula quis lobortis. Vestibulum condimentum dapibus aliquam. Vivamus sed ante purus. Nullam ac commodo ex.                                    </p>

                            </Col>

                        </Row>
                    </Container>
                </section>
                <section className="teamsec2" >

                    <Slider {...settings} tea>
                        <div className="divall">
                            <div className="divimg">       <img src="images/face-of-handsome-man-thinking-with-sunglasses-e1621434492600.jpg" alt="" />
                                <div className="diviconssssss">
                                    <div><AiFillFacebook /></div>
                                    <div><FaTwitter /></div>
                                    <div><GrLinkedinOption /></div>
                                    <div><AiFillInstagram /></div>
                                </div></div>
                            <h3>John Frank</h3>
                            <h5>makeup artist</h5>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa quod recusandae corrupti magni fugit odit, quaerat expedita architecto tempora error!

                            </p>
                        </div>
                        <div className="divall">
                            <div className="divimg">       <img src="images/make-up-glamour-portrait-of-beautiful-woman-model-with-fresh-makeup-and-romantic-wavy-hairstyle--e1621434527357.jpg" alt="" />
                                <div className="diviconssssss">
                                    <div><AiFillFacebook /></div>
                                    <div><FaTwitter /></div>
                                    <div><GrLinkedinOption /></div>
                                    <div><AiFillInstagram /></div>
                                </div></div>
                            <h3>Mary Jane</h3>
                            <h5>makeup artist</h5>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa quod recusandae corrupti magni fugit odit, quaerat expedita architecto tempora error!

                            </p>
                        </div>
                        <div className="divall">
                            <div className="divimg">       <img src="images/model-with-bright-makeup-e1621434468773.jpg" alt="" />
                                <div className="diviconssssss">
                                    <div><AiFillFacebook /></div>
                                    <div><FaTwitter /></div>
                                    <div><GrLinkedinOption /></div>
                                    <div><AiFillInstagram /></div>
                                </div></div>
                            <h3>Ludila Doe </h3>
                            <h5>makeup artist</h5>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa quod recusandae corrupti magni fugit odit, quaerat expedita architecto tempora error!

                            </p>
                        </div>
                
                        <div className="divall">
                            <div className="divimg">       <img src="images/make-up-glamour-portrait-of-beautiful-woman-model-with-fresh-makeup-and-romantic-wavy-hairstyle-1-1-e1621434557300.jpg" alt="" />
                                <div className="diviconssssss">
                                    <div><AiFillFacebook /></div>
                                    <div><FaTwitter /></div>
                                    <div><GrLinkedinOption /></div>
                                    <div><AiFillInstagram /></div>
                                </div></div>
                            <h3>Ludila Doe </h3>
                            <h5>makeup artist</h5>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa quod recusandae corrupti magni fugit odit, quaerat expedita architecto tempora error!

                            </p>
                        </div>
              
                    </Slider>


                </section>
                <section className="teamsec3">
                    <Container>
                        <Row className="psec2">
                            <Col sm="12" lg="6 " md="6" className=" wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.1s">
                                <h3>
                                    Join our team
                                </h3>
                                <p>Sed feugiat et ligula quis lobortis. Vestibulum condimentum dapibus aliquam. Vivamus sed ante purus. Nullam ac commodo ex lorem ipsum loret.</p>
                                <button>
                                    APPLY
                                </button>
                            </Col>
                            <Col sm="12" lg="6 " md="6" className=" wow slideInRight" data-wow-duration="2s" data-wow-delay="0.1s">
                                <img src="images/imgbeauty2.png" alt="" />
                            </Col>
                        </Row>
                    </Container>
                </section>
                <Footer />

            </div>
        )
    }
}

export default Ourteam
