import React, { useState } from 'react';
import { connect } from "react-redux";

import { FaTrash } from 'react-icons/fa';

import { removefromcart } from "./action/Action";


function Cartitem( props) {
  const { item, index } = props;
  const { product } = item;
  const [quantity, setQuantity] = useState(item.quantity);

   return (
    
 
   
<div className="divcarttttt">

          <img height="200px" className="img1234" src={product.img} />
          <div className="divcartttttp">
          <p >{product.name}</p>
          <p><del>{product.price2}EGP </del> <span>-{product.price2-product.price}EGP</span></p>
         <h5>{product.price}</h5>
          </div>

   <input className="inputdetail"  min="1" type="number" value={quantity}  onChange={event => { setQuantity(event.target.value) }}/>
                    <h5>{quantity * product.price}EGP</h5>

            <button className="buttonx" onClick={() => props.removefromcart(index)} ><FaTrash /></button> 
            
 </div>
 
 
  





  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    removefromcart: (index) => dispatch(removefromcart(index))
  }
}
export default connect(null, mapDispatchToProps)(Cartitem);