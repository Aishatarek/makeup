import React, { Component } from 'react';
import { connect } from "react-redux";
import Cartitem from "./Cartitem";
import { clearcart } from "./action/Action";
import {FaTruckMoving } from 'react-icons/fa';

import { MdSecurity } from 'react-icons/md';
import { GiDirectionSigns } from 'react-icons/gi';
import { Container,Row , Col} from "reactstrap";
import {Link}  from "react-router-dom";
import {FaLessThan}  from "react-icons/fa";
import {Footer}  from "../Footer";


export class Cart extends Component {
  render() {
  
    return (
      <div>
          <div  className="cartall">
    <Container>
      <Row>
        
        <Col lg="8" md="8" sm="12">
          <div className="divcart">
        <h2>Shopping Cart </h2>
         <hr />
        
       {this.props.cart.map((item , index) => (
            <div key={item.product.id}> 
            <Cartitem item={item} index={index} />
            <hr className="hritem"/>
            </div> 
        ))}

      </div>
    <Link className="linkcart" to="/Shopall"   > <FaLessThan /> Continue shopping</Link>
          
          
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
         {this.props.totalQuantity>0?( <div><Link to="/Checkout"><button>Proceed to Checkout</button></Link></div>):(<div></div>)}
          </div>
          <div className="quantitycart" style={{marginTop:'10px'}}>
          <div><MdSecurity className="flexiconi"/>   <p>Security policy (edit with Customer reassurance module)</p></div>
           <div><FaTruckMoving  className="flexiconi"/> <p> Delivery policy (edit with Customer reassurance module)</p></div>
           <div><GiDirectionSigns  className="flexiconi"/> <p>Return policy (edit with Customer reassurance module)</p></div>
          </div>
        </Col>
    
    
      <div >
     

        
      
    


      </div>
      </Row>
 </Container>
 <Footer />
 </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    total: state.cart.reduce((total, item) => total + item.quantity * item.product.price, 0),
    totalQuantity:state.cart.reduce((total,item)=> total + parseInt(item.quantity),0),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    clearcart: () => dispatch(clearcart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);