import React, { Component } from 'react'
import { addToCart } from "../Cartfolder/action/Action";
import { connect } from "react-redux";
import {HiShoppingCart} from "react-icons/hi"
import {Link } from "react-router-dom";
import {AiFillEye } from "react-icons/ai";


export class Shopitem extends Component {
  constructor(props) {
    super(props);
    this.state = {
   
      quantity: 1,
      product: {},}
}
    addToCart = (product) => {
      this.props.addToCart(product, this.state.quantity);
    }
   
  render() {
    const runcallback = (cb) => {
      return cb();
    }
    const product = this.props.product;
   
    return (
      <div>
           <div className="productdetails">

     

<div className="prodeimg">
    <img className="imgdetail1" width="100%" height="200px" src={product.img}  />
      <img  className="imgdetail2"width="100%" height="200px" src={product.img2}  />


<div className="detailicon">
<Link  to={"/Shop/" + product.id} ><div className="icondetail"><AiFillEye /> </div></Link><div onClick={() => this.addToCart(product)} className="icondetail"><HiShoppingCart /> </div>
</div>
        </div>

       <p >{product.name}</p>
       <h5> {runcallback(() => {
                        const row = []
                        for (var i = 0; i < product.stars; i++) {
                          row.push(<span className="stary" >  ★ </span>)
                        }
                        for (var n = 0; n < 5 - product.stars; n++) {
                          row.push(<span className="stary">   ☆</span>)
                        }
                        return row;
                        })
             }</h5>

      <div className="price"> 
      <h5 className="actualprice">{product.price}EGP </h5>

      <span>{product.price2-product.price}</span>
  <p><del>{product.price2}EGP </del></p>

  </div>  

      </div>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (productInfo, quantity) => dispatch(addToCart(productInfo, quantity)),

  }
}
export default connect(null, mapDispatchToProps)(Shopitem)








