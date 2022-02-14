import React, { Component } from 'react'
import Footer from "./Footer";
import { Container, Row, Col, Button } from 'reactstrap';
import { ImCheckmark } from "react-icons/im";
export class Services extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mount: false,
            mount1: false,
            mount2: false,
         
        }
    }

    mountcounter = () => this.setState({ mount: true })
    unmountcounter = () => this.setState({ mount: false })
    mountcounter1 = () => this.setState({ mount1: true })
    unmountcounter1 = () => this.setState({ mount1: false })
    mountcounter2 = () => this.setState({ mount2: true })
    unmountcounter2 = () => this.setState({ mount2: false })
    render() {
        return (
            <div>
                <section className="servicesec">
                    <Container>
                        <Row className="psec2">
                            <Col sm="12" lg="6 " md="6" className=" wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.1s">
                                <h3>

                                    Our Services
                                </h3>

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non est orci. Sed vitae nisl libero.

                                    Ut mi sapien, hendrerit vehicula diam sollicitudin, iaculis commodo augue. Sed feugiat et ligula quis lobortis. Vestibulum condimentum dapibus aliquam. Vivamus sed ante purus. Nullam ac commodo ex.
                                </p>
                                <button>
                                    CONTACT US
                                </button>
                            </Col>

                            <Col sm="12" lg="6 " md="6" className=" wow slideInRight" data-wow-duration="2s" data-wow-delay="0.1s">
                                <img src="images/beauty-fashion-model-girl-with-bright-makeup-e1621501619448-p7fsw27pr51w0pa9j6vercr6aidol37c1a533lhtug.jpg" />

                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="servicesec2">
               
                        <Container>
                            <Row>
                                <Col sm="12" lg="4 " md="4" className=" wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.1s">
                                    <img src="images/portrait-of-young-woman-getting-makeup-done-by-makeup-artist-e1621502239883.jpg" alt="" />
                                    <h3>Bridal Makeup</h3>
                                    <h5>
                                        from $299
                                    </h5>
                                    <p>
                                        Makeup is not a mask that covers up your beauty; it’s a weapon that helps you express who you are.
                                    </p>
                                </Col>
                                <Col sm="12" lg="4 " md="4" className=" wow slideInDown" data-wow-duration="2s" data-wow-delay="0.1s">
                                    <img src="images/beautiful-artistic-makeup-e1621502262903.jpg" alt="" />
                                    <h3>Cinematic Makeup</h3>
                                    <h5>
                                        from $399
                                    </h5>
                                    <p>
                                        Makeup is not a mask that covers up your beauty; it’s a weapon that helps you express who you are.
                                    </p>
                                </Col>
                                <Col sm="12" lg="4 " md="4" className=" wow slideInRight" data-wow-duration="2s" data-wow-delay="0.1s">
                                    <img src="images/side-view-of-part-of-face-of-serious-young-male-fashion-model-with-stage-makeup-e1621502285950.jpg" alt="" />
                                    <h3>Fashion Makeup</h3>
                                    <h5>
                                        from $299
                                    </h5>
                                    <p>
                                        Makeup is not a mask that covers up your beauty; it’s a weapon that helps you express who you are.
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                  
                </section>
                <section className="servicesec3">
                    <Container>
                        <Row>
                            <Col sm="12" lg="6" md="6" className=" wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.1s">
                                <h3>

                                    25 years of Experience
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non est orci. Sed vitae nisl libero.

                                    Ut mi sapien, hendrerit vehicula diam sollicitudin, iaculis commodo augue. Sed feugiat et ligula quis lobortis. Vestibulum condimentum dapibus aliquam. Vivamus sed ante purus. Nullam ac commodo ex.
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
                                <img src="images/beautyful-girl-with-bright-make-up-e1621502305746.jpg" alt="" />


                            </Col>
                        </Row>
                    </Container>

                </section>
                <section className="servicesec4">
                    <Container>
                        <Row className="psec2">
                            <Col sm="12" lg="5" md="5" className=" wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.1s">
                                <img src="images/beautiful-woman-with-professional-make-up-e1621502915531.jpg" alt="" />
<div className="details">
<h3>

Our Services
</h3>

<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non est orci. Sed vitae nisl libero.

Ut mi sapien, hendrerit vehicula diam sollicitudin, iaculis commodo augue. Sed feugiat et ligula quis lobortis. Vestibulum condimentum dapibus aliquam. Vivamus sed ante purus. Nullam ac commodo ex.
</p>
<button>
CONTACT US
</button>
</div>
                            </Col>

                            <Col sm="12" lg="7" md="7" className=" wow slideInRight" data-wow-duration="2s" data-wow-delay="0.1s">
                                <h3>Faqs</h3>
                                {this.state.mount ? (<div><Button variant="outline-success" onClick={this.unmountcounter} >How do I book an appointment?   <span>-</span></Button></div>) : <div><Button variant="outline-success" onClick={this.mountcounter} >How do I book an appointment? <span>+</span> </Button></div>}

                                {this.state.mount ?
                                    (<div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.


                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>) : null}

                                {this.state.mount1 ? (<div><Button variant="outline-success" onClick={this.unmountcounter1} >Do you offer vegan products? <span>-</span> </Button></div>) : <div><Button variant="outline-success" onClick={this.mountcounter1} >Do you offer vegan products? <span>+</span> </Button></div>}

                                {this.state.mount1 ?
                                    (<div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.


                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>) : null}
                                {this.state.mount2 ? (<div><Button variant="outline-success" onClick={this.unmountcounter2} >What if I have an skin allergy? <span>-</span> </Button></div>) : <div><Button variant="outline-success" onClick={this.mountcounter2} >What if I have an skin allergy? <span>+</span> </Button></div>}

                                {this.state.mount2 ?
                                    (<div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.


                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>) : null}


                            </Col>
                        </Row>
                    </Container>
                </section>
                <Footer />
            </div>
        )
    }
}

export default Services
