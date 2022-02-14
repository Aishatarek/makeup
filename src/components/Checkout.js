import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import { connect } from "react-redux";
import {FaTruckMoving } from 'react-icons/fa';
import Footer from "./Footer"
import { MdSecurity } from 'react-icons/md';
import { GiDirectionSigns } from 'react-icons/gi';
export class Checkout extends Component {
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

if(!fields["mr"] && !fields["mrs"]){
  formIsValid= false;
  errors["mrssss"]="Gender cannot be empty"
 
}

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
if(!fields["secondname"]){
  formIsValid= false;
  errors["secondname"]="Second name cannot be empty"
  
}
else if(typeof fields["secondname"] !=="undefined"){
  if(!fields["secondname"].match(/^[a-zA-Z]+$/)){
      formIsValid =false;
      errors["secondname"]="Second name must be only letters";
      
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
if(!fields["password"]){
  formIsValid= false;
  errors["password"]="Password cannot be empty"
  
}
else if(typeof fields["password"] !=="undefined"){
  if(!fields["password"]>=8){
      formIsValid =false;
      errors["password"]="password must be more than 8 character";
      
  }
}
if(!fields["birthday"]){
  formIsValid= false;
  errors["birthday"]="birthday cannot be empty"
  
}
if(!fields["Address"]){
  formIsValid= false;
  errors["Address"]="Address cannot be empty"
  
}
else if(typeof fields["password"] !=="undefined"){
  if(!fields["Address"]>=13){
      formIsValid =false;
      errors["Address"]="Address must be more than 13 character";
      
  }
}
if(!fields["City"]){
  formIsValid= false;
  errors["City"]="City cannot be empty"
  
}
else if(typeof fields["City"] !=="City"){
  if(!fields["City"].match(/^[a-zA-Z]+$/)){
      formIsValid =false;
      errors["City"]="City must be only letters";
      
  }
}if(!fields["Country"]){
  formIsValid= false;
  errors["Country"]="Country cannot be empty"
  
}
else if(typeof fields["Country"] !=="Country"){
  if(!fields["Country"].match(/^[a-zA-Z]+$/)){
      formIsValid =false;
      errors["Country"]="Country must be only letters";
      
  }
}if(!fields["ZipCode"]){
  formIsValid= false;
  errors["ZipCode"]="ZipCode cannot be empty"
  
}
else if(typeof fields["ZipCode"] !=="ZipCode"){
  if(!fields["ZipCode"]==6){
      formIsValid =false;
      errors["ZipCode"]="ZipCode must be 6 digit";
      
  }
}
if(!fields["number"]){
  formIsValid= false;
  errors["number"]="number cannot be empty"
  
}
else if(typeof fields["number"] !=="number"){
  if(!fields["number"]==11){
      formIsValid =false;
      errors["number"]="number must be 11 digit";
      
  }
}
this.setState({errors:errors});
return  formIsValid;


}
contactSubmit(e){
  e.preventDefault();
  if(this.handleValidation()){
      alert("sumited")
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
            <div className="checkout">
                      <Container>
      <Row>
        <Col lg="8" md="8" sm="12">
   <form onSubmit={this.contactSubmit.bind(this )} >
 
<div className="checkflex">
   <p>social title </p>
<div className="inputs">   

<input className="all" type="radio" name="gender" value="female" onChange={this.handleChange.bind(this , "mrssss")} value={this.state.fields["mrs"]}/>
<label><span></span>Mrs</label>

<input className="all" type="radio" name="gender" value="male" onChange={this.handleChange.bind(this , "mrsss")} value={this.state.fields["mr"]} />
<label><span></span>Mr</label>
</div> 
</div> 
<span>{this.state.errors["mrssss"]}</span>
<div className="checkform">
<label>First Name<span>*</span></label>
<input type="text" name="fname" onChange={this.handleChange.bind(this , "name")} value={this.state.fields["name"]} />
</div>
<span>{this.state.errors["name"]}</span>
<div className="checkform">
<label>Second Name<span>*</span></label>
<input type="text" name="sname" onChange={this.handleChange.bind(this , "secondname")} value={this.state.fields["secondname"]} />
</div>
<span>{this.state.errors["secondname"]}</span>
<div className="checkform">
<label>Email<span>*</span></label>
<input type="email" name="email"  onChange={this.handleChange.bind(this , "email")} value={this.state.fields["email"]}/>
</div>
<span>{this.state.errors["email"]}</span>
<div className="checkform">
<label>Password<span>*</span></label>
<input type="password" name="password" onChange={this.handleChange.bind(this , "password")} value={this.state.fields["password"]} />
</div>
<span>{this.state.errors["password"]}</span>
<div className="checkform">
<label>Birthday<span>*</span></label>
<input type="date" name="birthday"  onChange={this.handleChange.bind(this , "birthday")} value={this.state.fields["birthday"]} />
</div>
<span>{this.state.errors["birthday"]}</span>
<div className="checkform">
<label>Address<span>*</span></label>
<input type="text" name="address"  onChange={this.handleChange.bind(this , "Address")} value={this.state.fields["Address"]} />
</div>
<span>{this.state.errors["Address"]}</span>
<div className="checkform">
<label>City<span>*</span></label>
<input type="text" name="City" onChange={this.handleChange.bind(this , "City")} value={this.state.fields["City"]}/>
</div>
<span>{this.state.errors["City"]}</span>
<div className="checkform">
<label>Country<span>*</span></label>
<input type="text" name="Country"   onChange={this.handleChange.bind(this , "Country")} value={this.state.fields["Country"]}/>
</div>
<span>{this.state.errors["Country"]}</span>
<div className="checkform">
<label>Zip/Postal Code<span>*</span></label>
<input type="text" name="ZipCode"   onChange={this.handleChange.bind(this , "ZipCode")} value={this.state.fields["ZipCode"]}/>
</div>
<span>{this.state.errors["ZipCode"]}</span>
<div className="checkform">
<label>Phone Number<span>*</span></label>
<input type="number" name="number"  onChange={this.handleChange.bind(this , "number")} value={this.state.fields["number"]} />
</div>
<span>{this.state.errors["number"]}</span>
<input type="checkbox" /><label>	Receive offers from our partners</label>
<br />
<input type="checkbox" /><label>Sign up for our newsletter You may unsubscribe at any moment. For that purpose, please find our contact info in the legal notice.</label>
  <br />
  <input type="submit" value="Submit"  />
   </form>
        </Col>
        <Col lg="4" md="4" sm="12">
          <div className="quantitycart">
          <div >
            <p>{this.props.totalQuantity} items Shipping</p>
            <p>{this.props.total} EGP</p>
          </div>

          <div>
            <p>Total (tax incl.)</p>
            <p>{this.props.total} EGP</p>
          </div>
   
          </div>
          <div className="quantitycart" style={{marginTop:'10px'}}>
          <div><MdSecurity className="flexiconi"/>   <p>Security policy (edit with Customer reassurance module)</p></div>
                  <div><FaTruckMoving  className="flexiconi"/> <p> Delivery policy (edit with Customer reassurance module)</p></div>
                  <div><GiDirectionSigns  className="flexiconi"/> <p>Return policy (edit with Customer reassurance module)</p></div>
          </div>
        </Col>
        </Row>   
        </Container>
        <Footer />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
  return {

    total: state.cart.reduce((total, item) => total + item.quantity * item.product.price, 0),
    totalQuantity:state.cart.reduce((total,item)=> total + parseInt(item.quantity),0),
  };
};


export default connect(mapStateToProps, null)(Checkout);

