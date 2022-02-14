import React, { Component } from 'react'
import Slider from "react-slick";
import { Container, Row, Col, Button } from 'reactstrap';
import Footer from "./Footer";
import { ImCheckmark } from "react-icons/im";
export class Aboutus extends Component {
    render() {
        const settings = {
            dots: true,
            fade: true,
            autoplay: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        const settings2 = {
            dots: true,
            infinite: true,
    
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            speed: 5000,
            autoplaySpeed: 2000,
            cssEase: "linear"
        };
        return (
            <div>
                <section className="sec1about">
                    <Container>
                        <Row className="psec2">
                            <Col sm="12" lg="6 " md="6" className=" wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.1s">
                                <img src="images/close-up-portrait-of-beautiful-woman-with-bright-make-up-e1621502360512-p7ft98w7mh3ovs4rje208iyya3e1k8js6jlagby0k8.jpg" alt="" />

                            </Col>
                            <Col sm="12" lg="6 " md="6" className=" wow slideInRight" data-wow-duration="2s" data-wow-delay="0.1s">
                                <h3>About Our Studio</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non est orci. Sed vitae nisl libero.

                                    Ut mi sapien, hendrerit vehicula diam sollicitudin, iaculis commodo augue. Sed feugiat et ligula quis lobortis. Vestibulum condimentum dapibus aliquam. Vivamus sed ante purus. Nullam ac commodo ex.</p>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section  className="sec2about" >
                   <div></div>
                       <p className=" wow slideInDown" data-wow-duration="2s" data-wow-delay="0.1s">
                        "A woman whose smile is open and whose expression is glad has a kind of beauty no matter what she wears."
                    </p>
                </section>
                <section className="sec3about">
                    <Container>
                        <Row>

                            <Col sm="12" lg="6 " md="6" className=" wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.1s">
                                <h3>What we offer</h3>
                                <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque at laoreet leo. Cras maximus elit nec ipsum elementum consequat
                                </p>
                                <div className="divyul">
                                    <ul>
                                        <li><span><ImCheckmark /></span>Bridal makeup</li>
                                        <li><span><ImCheckmark /></span>Cinematic makeup</li>
                                        <li><span><ImCheckmark /></span>Fashion makeup</li>
                                    </ul>
                                    <ul>
                                        <li><span><ImCheckmark /></span>Fashion makeup</li>
                                        <li><span><ImCheckmark /></span>Cinematic makeup</li>
                                        <li><span><ImCheckmark /></span>Bridal makeup</li>
                                    </ul>

                                </div>
                            </Col>
                            <Col sm="12" lg="6 " md="6" className=" wow slideInRight" data-wow-duration="2s" data-wow-delay="0.1s">
                                <Slider {...settings}>
                                    <div>
                                        <img src="images/model-posing-in-studio-with-fashion-make-up-e1621502521878.jpg" />
                                    </div>
                                    <div>
                                        <img src="images/beautiful-blonde-woman-hairstyle-long-smooth-curly-hair-fashion-makeup-e1621502961401.jpg" />
                                    </div>
                                    <div>
                                        <img src="images/fashion-portrait-of-beautiful-woman-.jpg" />
                                    </div>
      
                                </Slider>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="sec4about">
                    <Container>
                        <Row>
                            <Col sm="12" lg="4 " md="4" className=" wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.1s">
                                <h3>Quality Services</h3>

                                <p>
                                    Makeup is not a mask that covers up your beauty; it’s a weapon that helps you express who you are from the inside.
                                </p>
                            </Col>
                            <Col sm="12" lg="4 " md="4" className=" wow slideInDown" data-wow-duration="2s" data-wow-delay="0.1s">
                                <h3>Experience</h3>

                                <p>
                                    Makeup is not a mask that covers up your beauty; it’s a weapon that helps you express who you are.
                                </p>
                            </Col>
                            <Col sm="12" lg="4 " md="4" className=" wow slideInRight" data-wow-duration="2s" data-wow-delay="0.1s">
                                <h3>Certified Experts</h3>

                                <p>
                                    Makeup is not a mask that covers up your beauty; it’s a weapon that helps you express who you are.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="sec5about">
                    <Container>
                        <Row className="psec2">
                            <Col sm="12" lg="6 " md="6" className=" wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.1s">
                                <img src="images/glamour-portrait-of-beautiful-woman-model-with-fresh-daily-makeup-and-romantic-wavy-hairstyle-1-p7ftcto3mrzelrlfbd1fp0n3a1b4kvrtqrgz6a43u8.jpg" />

                            </Col>
                            <Col sm="12" lg="6 " md="6" className=" wow slideInRight" data-wow-duration="2s" data-wow-delay="0.1s">
                                <h3>25 years of Experience</h3>

                                <p>
                                    Character contributes to beauty.  A mode of conduct, a standard of courage, discipline, fortitude, and integrity can do a great deal to make a someone beautiful.
                                </p>
                                <button>Contact us</button>
                            </Col>

                        </Row>
                    </Container>
                </section>
                <section className="sec6about">
                    <h3>What our Clients say</h3>
                    <Slider {...settings2}>
                        <div>
                            <div className="divflex">
                            <img src="images/beauty-woman-face-portrait-beautiful-model-girl-with-perfect-fresh-clean-skin (1).jpg" />
                            <p>
                                Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus.
                            </p>
                            <h3>Lauren Doe<span>-Model</span></h3>
                            </div>
                        </div>
                        <div>
                        <div className="divflex">
                            <img src="images/portrait-of-male-model-wearing-sunglasses.jpg" />
                            <p>
                                Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus.
                            </p>
                            <h3>Johnny Smith<span>-Model</span></h3>
                        </div>
                        </div>
                        <div>
                        <div className="divflex">
                            <img src="images/Black_background_Model_Hairstyle_Makeup_Glance_577696_3840x2400.jpg" />
                            <p>
                                Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus.
                            </p>
                            <h3>Lauren Doe<span>-Model</span></h3>
                        </div>
                        </div>
                        <div>
                        <div className="divflex">
                            <img src="images/iurii-egorov-anastasiia-devushka-vzgliad-litso-makiiazh-tiom.jpg" />
                            <p>
                                Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus.
                            </p>
                            <h3>Lauren Doe<span>-Model</span></h3>
                            </div>
                        </div>

                    </Slider>
                </section>
                <Footer />
            </div>
        )
    }
}

export default Aboutus
