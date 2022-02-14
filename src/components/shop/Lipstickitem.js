import React, { Component } from 'react'
import { addToCart } from "../Cartfolder/action/Action";
import { connect } from "react-redux";
import {HiShoppingCart} from "react-icons/hi"
import {Link } from "react-router-dom";
import {AiFillEye } from "react-icons/ai";


export class Lipstickitem extends Component {
  constructor(props) {
    super(props);
    this.state = {
   
      quantity: 1,
      lipstick: {},}
}
    addToCart = (lipstick) => {
      this.props.addToCart(lipstick, this.state.quantity);
    }
   
  render() {
    const runcallback = (cb) => {
      return cb();
    }
    const lipstick = this.props.lipstick;
   
    return (
      <div>
           <div className="productdetails">

      

<div className="prodeimg">
    <img className="imgdetail1" width="100%" height="200px" src={lipstick.img}  />
      <img  className="imgdetail2"width="100%" height="200px" src={lipstick.img2}  />


<div className="detailicon">
<Link  to={"/Lipstick/" + lipstick.id} ><div className="icondetail"><AiFillEye /> </div></Link><div onClick={() => this.addToCart(lipstick)} className="icondetail"><HiShoppingCart /> </div>
</div>
        </div>

       <p >{lipstick.name}</p>
       <h5> {runcallback(() => {
                        const row = []
                        for (var i = 0; i < lipstick.stars; i++) {
                          row.push(<span className="stary" >  ★ </span>)
                        }
                        for (var n = 0; n < 5 - lipstick.stars; n++) {
                          row.push(<span className="stary">   ☆</span>)
                        }
                        return row;
                        })
             }</h5>

      <div className="price"> 
      <h5 className="actualprice">{lipstick.price}EGP </h5>

      <span>{lipstick.price2-lipstick.price}</span>
  <p><del>{lipstick.price2}EGP </del></p>

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
export default connect(null, mapDispatchToProps)(Lipstickitem)








