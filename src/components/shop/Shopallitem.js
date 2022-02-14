import React, { Component } from 'react'
import { addToCart } from "../Cartfolder/action/Action";
import { connect } from "react-redux";
import {HiShoppingCart} from "react-icons/hi"
import {Link } from "react-router-dom";
import {AiFillEye } from "react-icons/ai";


export class Shopallitem extends Component {
  constructor(props) {
    super(props);
    this.state = {
   
      quantity: 1,
      shop: {},}
}
    addToCart = (shop) => {
      this.props.addToCart(shop, this.state.quantity);
    }
   
  render() {
    const runcallback = (cb) => {
      return cb();
    }
    const shop = this.props.shop;
   
    return (
      <div>
           <div className="productdetails">

     

<div className="prodeimg">
    <img className="imgdetail1" width="100%" height="200px" src={shop.img}  />
      <img  className="imgdetail2"width="100%" height="200px" src={shop.img2}  />


<div className="detailicon">
<Link  to={"/Shopall/" + shop.id} ><div className="icondetail"><AiFillEye /> </div></Link><div onClick={() => this.addToCart(shop)} className="icondetail"><HiShoppingCart /> </div>
</div>
        </div>

       <p >{shop.name}</p>
       <h5> {runcallback(() => {
                        const row = []
                        for (var i = 0; i < shop.stars; i++) {
                          row.push(<span className="stary" >  ★ </span>)
                        }
                        for (var n = 0; n < 5 - shop.stars; n++) {
                          row.push(<span className="stary">   ☆</span>)
                        }
                        return row;
                        })
             }</h5>

      <div className="price"> 
      <h5 className="actualprice">{shop.price}EGP </h5>

      <span>{shop.price2-shop.price}</span>
  <p><del>{shop.price2}EGP </del></p>

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
export default connect(null, mapDispatchToProps)(Shopallitem)








