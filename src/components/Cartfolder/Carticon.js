import React from 'react'
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";


function Carticon(props) {
    return (
        <div>
               
          <NavLink to="/Cart" className="link" >
      
         Cart
         <span className="spancart">({props.totalQuantity})</span>
          </NavLink>
     
        </div>
    )
}
const mapStateToProps = (state) => {
  return {

    totalQuantity:state.cart.reduce((total,item)=> total + parseInt(item.quantity),0),
  };
};
export default connect(mapStateToProps)(Carticon)
