import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap';
import Footer from "./Footer";
export class Ourstudio extends Component {
    render() {
        return (
            <div>
                <section className="studiosec1">
                
                    <img  className=" wow slideInDown" data-wow-duration="2s" data-wow-delay="0.1s" src="images/young-african-woman-with-afro-hairstyle-and-golden-shiny-makeup-studio-shot--e1621502157418-p7ft3zytk1qofftkkla64w70zkpsoqyv3nfvj1wh40.jpg" />

                </section>
                <section className="studiosec2">
                    <div  className=" wow bounceInUp " data-wow-duration="2s" data-wow-delay="0.1s">
                    <h3>
                        Our Studio
                    </h3>
                    <h5>
                        Makeup is a weapon that helps you express who you are
                    </h5>
                    <p>
                        Ut mi sapien, hendrerit vehicula diam sollicitudin, iaculis commodo augue. Sed feugiat et ligula quis lobortis. Vestibulum condimentum dapibus aliquam. Vivamus sed ante purus. Nullam ac commodo ex.
                    </p>
                    </div>
                </section>
                <section className="studiosec3">
                    <Container>
                        <Row>
                            <Col sm="12" lg="6 " md="6"  className=" wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.1s">
                                <img src="images/make-up-set-e1621502832727-p7ftlewyvexqmvm7el62c5xdamb1znom400pvyddwg.jpg" />


                            </Col>

                            <Col sm="12" lg="6 " md="6"  className=" wow slideInRight" data-wow-duration="2s" data-wow-delay="0.1s">
                                <img src="images/doing-dramatic-makeup-to-man-e1621502558899-p7fte9d6ut569q0b6huacyx2j1khela5sl9oe4z99c.jpg" />

                            </Col>
                        </Row>
                    </Container>
                </section>
                <section  className="studiosec4">
                    <Container>
                        <Row className="psec2">
                            <Col sm="12" lg="6 " md="6"  className=" wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.1s">
                                <h3>

                                    Inspired by Luxury, Artistry, and Beauty
                                </h3>
                                <h5>
                                    Makeup is not a mask that covers up your beauty; it’s a weapon that helps you express who you are.
                                </h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non est orci. Sed vitae nisl libero.

                                    Ut mi sapien, hendrerit vehicula diam sollicitudin, iaculis commodo augue. Sed feugiat et ligula quis lobortis. Vestibulum condimentum dapibus aliquam. Vivamus sed ante purus. Nullam ac commodo ex.
                                </p>
                                <button>
                                    ABOUT US
                                </button>
                            </Col>

                            <Col sm="12" lg="6 " md="6"  className=" wow slideInRight" data-wow-duration="2s" data-wow-delay="0.1s">
                                <img src="images/futuristic-make-up-768x1152.jpg" />

                            </Col>
                        </Row>
                    </Container>
                </section>
                <section  className="studiosec3">
                    <Container>
                        <Row>
                            <Col sm="12" lg="6 " md="6" className=" wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.1s">
                                <img src="images/cosmetics-products-for-makeup-are-on-display--e1621502012590-p7ft05scc9uc4ahliefqyj05qz29y1b3uszh8pvulc.jpg" />


                            </Col>

                            <Col sm="12" lg="6 " md="6" className=" wow slideInRight" data-wow-duration="2s" data-wow-delay="0.1s">
                                <img src="images/close-up-beauty-portrait-of-girl-makeup-artist-paints-with-brush-brunette-with-brown-eyes-e1621502857106-p7ftm2exm9twp4o2ldbqkhzw5938c39wj8buvvejkw.jpg" />

                            </Col>
                        </Row>
                    </Container>
                </section>
                <Footer />
            </div>
        )
    }
}

export default Ourstudio
