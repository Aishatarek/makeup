import React, { Component } from 'react'
import { addToCart } from "../Cartfolder/action/Action";
import { connect } from "react-redux";
import {HiShoppingCart} from "react-icons/hi"
import {Link } from "react-router-dom";
import {AiFillEye } from "react-icons/ai";


export class Eyelineritem extends Component {
  constructor(props) {
    super(props);
    this.state = {
   
      quantity: 1,
      eyeliner: {},}
}
    addToCart = (eyeliner) => {
      this.props.addToCart(eyeliner, this.state.quantity);
    }
   
  render() {
    const runcallback = (cb) => {
      return cb();
    }
    const eyeliner = this.props.eyeliner;
   
    return (
      <div>
           <div className="productdetails">

     

<div className="prodeimg">
    <img className="imgdetail1" width="100%" height="200px" src={eyeliner.img}  />
      <img  className="imgdetail2"width="100%" height="200px" src={eyeliner.img2}  />


<div className="detailicon">
<Link  to={"/Eyeliner/" + eyeliner.id} ><div className="icondetail"><AiFillEye /> </div></Link><div onClick={() => this.addToCart(eyeliner)} className="icondetail"><HiShoppingCart /> </div>
</div>
        </div>

       <p >{eyeliner.name}</p>
       <h5> {runcallback(() => {
                        const row = []
                        for (var i = 0; i < eyeliner.stars; i++) {
                          row.push(<span className="stary" >  ★ </span>)
                        }
                        for (var n = 0; n < 5 - eyeliner.stars; n++) {
                          row.push(<span className="stary">   ☆</span>)
                        }
                        return row;
                        })
             }</h5>

      <div className="price"> 
      <h5 className="actualprice">{eyeliner.price}EGP </h5>

      <span>{eyeliner.price2-eyeliner.price}</span>
  <p><del>{eyeliner.price2}EGP </del></p>

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
export default connect(null, mapDispatchToProps)(Eyelineritem)








