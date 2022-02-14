import React, { Component } from 'react'
import Carsoul from "./Carsoul"
import { Container, Row, Col, Button } from 'reactstrap';
import Slider from "react-slick";
import Sectionhome from "./Sectionhome";
import { AiOutlineMail, AiFillPhone, AiFillYoutube } from "react-icons/ai";
import { BsClockFill } from "react-icons/bs";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import emailjs from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer";
export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mount: false,
            mount1: false,
            mount2: false,
            fields:{},
            errors:{}

        }
    }

    handleValidation(){
      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;
    
 
    
    if(!fields["name"]){
      formIsValid= false;
      errors["name"]="First name cannot be empty"
      
    }
    else if(typeof fields["name"] !=="undefined"){
      if(!fields["name"].match(/^[a-zA-Z]+$/)){
          formIsValid =false;
          errors["name"]="First name must be only letters";
          
      }
    }
   
     if(!fields["email"]){
      formIsValid= false;
      errors["email"]="Email cannot be empty"
    
    }
    
    else if(typeof fields["email"] !=="undefined"){
      if(!fields["email"].match("@")){
          formIsValid =false;
          errors["emails"]="use @"
         
      }
    }
    if(!fields["Message"]){
        formIsValid= false;
        errors["Message"]="Message cannot be empty"
        
      }
      else if(typeof fields["Message"] !=="undefined"){
        if(!fields["Message"].match(/^[a-zA-Z]+$/)){
            formIsValid =false;
            errors["Message"]="Message must be only letters";
            
        }
      }
  
    this.setState({errors:errors});
    return  formIsValid;
    
    
    }
    contactSubmit(e){
      e.preventDefault();
      if(this.handleValidation()){
          alert("Message has been sent successfully");
          emailjs.sendForm('service_jqnwkye', 'template_mj0gyeg', e.target, 'user_g1irYNKVOuewluAX01nOK')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
      }else{
          alert(`wrong `)
      }
    }


    handleChange(field , e){
      let fields = this.state.fields;
      fields[field]= e.target.value;
      this.setState({fields})
    }

    mountcounter = () => this.setState({ mount: true })
    unmountcounter = () => this.setState({ mount: false })
    mountcounter1 = () => this.setState({ mount1: true })
    unmountcounter1 = () => this.setState({ mount1: false })
    mountcounter2 = () => this.setState({ mount2: true })
    unmountcounter2 = () => this.setState({ mount2: false })


    render() {
     
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            autoplay: true,
            speed: 800,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <Carsoul />
                <section className="sec" >
                    <Container>
                        <Row className="psec1 ">
                            <Col sm="12" lg="6" md="6" className=" wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.1s">
                                <img src="images/close-up-portrait-of-beautiful-woman-with-bright-make-up-1-e1621502742445-p7ftj70oqhxi57iu19zp0fr7kk59d5tsnzk45cpsog.jpg " alt="" />
                            </Col>
                            <Col sm="12" lg="6" md="6" className=" wow slideInRight" data-wow-duration="2s" data-wow-delay="0.1s">

                                <h3>

                                    Makeup is an art
                                </h3>
                                <h5>
                                    Treat your makeup like jewelry for the face. Play with colors, shapes, structure – it can transform you.
                                </h5>
                                <p>
                                    Ut mi sapien, hendrerit vehicula diam sollicitudin, iaculis commodo augue. Sed feugiat et ligula quis lobortis. Vestibulum condimentum dapibus aliquam. Vivamus sed ante purus. Nullam ac commodo ex.
                                </p>

                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="sec2">
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
                            <Col sm="12" lg="4 " md="4" className=" wow slideInDown " data-wow-duration="2s" data-wow-delay="0.1s">
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
                <section className="sec3">
                    <Container>
                        <Row className="psec2">
                            <Col sm="12" lg="6 " md="6" className=" wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.1s">
                                <h3>The Power of Makeup</h3>

                                <p>
                                    Sed feugiat et ligula quis lobortis. Vestibulum condimentum dapibus aliquam. Vivamus sed ante purus. Nullam ac commodo ex lorem ipsum loret.</p>
                                <button>
                                    CONTACT US
                                </button>
                            </Col>
                            <Col sm="12" lg="6 " md="6" className=" wow slideInRight" data-wow-duration="2s" data-wow-delay="0.1s">
                                <img src="images/imgbeauty2.png" alt="" />

                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="sec4">
                    <Container>
                        <Row className="psec2">

                            <Col sm="12" lg="6 " md="6" className=" wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.1s">
                                <div>

                                    <Slider {...settings}>
                                        <div>
                                            <img src="images/powders-collection-showcase-in-make-up-shop.jpg" />
                                        </div>
                                        <div>
                                            <img src="images/makeup-and-hairstyle-for-a-beautiful-model-e1621502693732.jpg" />
                                        </div>
                                        <div>
                                            <img src="images/make-up-artist-sprinkling-model-s-face-with-powder-with-help-of-brush-on-black-e1621502408136.jpg" />
                                        </div>

                                    </Slider>
                                </div>
                            </Col>
                            <Col sm="12" lg="6 " md="6" className=" wow slideInRight" data-wow-duration="2s" data-wow-delay="0.1s">
                                <h2>About Us</h2>
                                <h5>Treat your makeup like jewelry for the face. Play with colors, shapes, structure – it can transform you</h5>
                                <p>
                                    Pellentesque at laoreet leo. Cras maximus elit nec ipsum elementum consequat</p>
                                <p>
                                    venenatis vitae sapien. Aenean vel viverra est. Vivamus mattis elementum diam, vel dapibus purus porta a. Nunc nec urna sed orci tristique cursus. In tempor iaculis ege
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="sec5">
                    <Container>
                        <Row>
                            <Col sm="12" lg="4" md="4" className=" wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.1s">
                                <h3>Quality Services</h3>

                                <p>
                                    Makeup is not a mask that covers up your beauty; it’s a weapon that helps you express who you are from the inside.
                                </p>
                            </Col>
                            <Col sm="12" lg="4" md="4" className=" wow slideInDown" data-wow-duration="2s" data-wow-delay="0.1s">
                                <h3>Experience</h3>

                                <p>
                                    Makeup is not a mask that covers up your beauty; it’s a weapon that helps you express who you are.
                                </p>
                            </Col>
                            <Col sm="12" lg="4" md="4" className=" wow slideInRight" data-wow-duration="2s" data-wow-delay="0.1s">
                                <h3>Certified Experts</h3>

                                <p>
                                    Makeup is not a mask that covers up your beauty; it’s a weapon that helps you express who you are.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <Sectionhome />

                <section className="sec7">
                    <Container>
                        <Row className="psec2">
                            <Col sm="12" lg="5" md="5" className=" wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.1s">
                                <img src="images/makeup-artist-applying-dark-lipstick-on-lips-of-shirtless-male-fashion-model-e1621502436204.jpg" alt="" />

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
                <section className="sec8">
                    <Container>
                        <Row className="psec2">
                            <Col sm="12" lg="6 " md="6" className=" wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.1s">
                                <h3>

                                    Qualified Professionals
                                </h3>
                                <p>Diam sollicitudin, iaculis commodo augue. Sed feugiat et ligula quis lobortis.

                                    Vestibulum condimentum dapibus aliquam. Vivamus sed ante purus. Nullam ac commodo ex.</p>
                            </Col>
                            <Col sm="12" lg="6 " md="6" className=" wow slideInRight" data-wow-duration="2s" data-wow-delay="0.1s">
                                <iframe  height="315" src="https://www.youtube.com/embed/XHOmBV4js_E" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="sec9">
                    <Container>
                        <Row className="psec2">
                            <Col sm="12" lg="6 " md="6" className=" wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.1s">
                                <h3>
                                    Get in Touch
                                </h3>
                                <h5>Ut mi sapien, hendrerit vehicula diam sollicitudin, iaculis commodo augue. Sed feugiat et ligula quis lobortis. </h5>
                                <form onSubmit={this.contactSubmit.bind(this )} >
                                    <p>
                                        name
                                    </p>
                                    <input name="from_name" type="text"  onChange={this.handleChange.bind(this , "name")} value={this.state.fields["name"]}/>
                                    <span className="rrrrrred">{this.state.errors["name"]}</span>

                                    <p>
                                        email
                                    </p>
                                    <input name="email" type="email"  onChange={this.handleChange.bind(this , "email")} value={this.state.fields["email"]}/>
                                    <span className="rrrrrred">{this.state.errors["email"]}</span>

                                    <p>
                                        message
                                    </p>
                                    <textarea name="message"  rows="5" onChange={this.handleChange.bind(this , "Message")} value={this.state.fields["Message"]}></textarea>
                                    <span className="rrrrrred">{this.state.errors["Message"]}</span>

                                    <input type="submit" value="send" />
                                </form>
                            </Col>

                            <Col sm="12" lg="6 " md="6" className="iconssss wow slideInRight" data-wow-duration="2s" data-wow-delay="0.1s">
                                <h3>Contact Info</h3>
                                <div><AiOutlineMail /><p>contact@beauty.com</p></div>
                                <div><BsClockFill /><p>Monday to Friday 7am to 8pm</p></div>
                                <div><AiFillPhone /><p>123 456 789</p></div>
                                <div><GoLocation /><p>Coppice Celyn 123, MA US</p></div>
                                <div className="iconsss2"><div><FaFacebook /></div><div><FaTwitter /></div><div><AiFillYoutube /></div></div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2seg!4v1625135802086!5m2!1sen!2seg" allowFullScreen="" loading="lazy"></iframe>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <Footer />
            </div>
        )
    }
}

export default Home
