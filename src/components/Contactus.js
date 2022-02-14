import React, { Component } from 'react'
import Footer from "./Footer";
import { Container, Row, Col } from 'reactstrap';
import { AiOutlineMail, AiFillPhone , AiFillYoutube } from "react-icons/ai";
import { BsClockFill } from "react-icons/bs";
import emailjs from 'emailjs-com';
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { GoLocation } from "react-icons/go";



export class Contactus extends Component {
    constructor(props){
        super(props)
        this.state={
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
    render() {
     
        return (
            <div>
       <section className="contactsec1" >
                    <img  className=" wow slideInDown" data-wow-duration="2s" data-wow-delay="0.1s" src="images/art-makeup-e1621506976226-p7fwlsp87ty68p3bzyuou5dv20o8ugdmeal9q7dodc.jpg" alt="" />

                </section>
                <section className="contactsec2">
                    <div  className=" wow bounceInUp " data-wow-duration="2s" data-wow-delay="0.1s">
                    <h3>
                        Contact Us
                    </h3>
                    <h5>
                        Makeup is a weapon that helps you express who you are
                    </h5>
                    <p>
                        Ut mi sapien, hendrerit vehicula diam sollicitudin, iaculis commodo augue. Sed feugiat et ligula quis lobortis. Vestibulum condimentum dapibus aliquam. Vivamus sed ante purus. Nullam ac commodo ex
                    </p>
                    </div>
                </section>
                <section  className="contactsec3">
                    <Container>
                        <Row  className="psec2">
                            <Col sm="12" lg="6 " md="6" className=" wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.1s">
                                <h3>
                                    Get in Touch
                                </h3>
                                <p>Ut mi sapien, hendrerit vehicula diam sollicitudin, iaculis commodo augue. Sed feugiat et ligula quis lobortis. </p>
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

                            <Col sm="12" lg="6 " md="6" className="iconscontact wow slideInRight" data-wow-duration="2s" data-wow-delay="0.1s">
                                <img src="images/portrait-of-beautiful-young-woman-with-fashion-makeup-768x576.jpg" alt="" />

                                <h3>Contact Info</h3>
                                <div><AiOutlineMail /><p>contact@beauty.com</p></div>
                                <div><BsClockFill /><p>Monday to Friday 7am to 8pm</p></div>
                                <div><AiFillPhone /><p>123 456 789</p></div>
                                <div><GoLocation /><p>Coppice Celyn 123, MA US</p></div>
                                <div className="iconsss2"><div><FaFacebook /></div><div><FaTwitter /></div><div><AiFillYoutube /></div></div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="contactsec4">
                    <iframe className=" wow slideInDown" data-wow-duration="2s" data-wow-delay="0.1s"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2seg!4v1625135802086!5m2!1sen!2seg" allowFullScreen="" loading="lazy"></iframe>

                </section>
                <Footer />           
            </div>
        )
    }
}

export default Contactus





