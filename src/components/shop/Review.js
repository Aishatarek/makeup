import React, { Component } from 'react'
import Lists from "./Lists";
import { Button, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
export class Review extends Component {
    constructor(props){
        super(props);
        this.state={
          items:[] ,

          openModal : false,
          currentItem:{
              text: '' ,
              key: ''
          }
         

        }

        this.handleInput=this.handleInput.bind(this)
        this.addItem=this.addItem.bind(this)
        this.deleteItem=this.deleteItem.bind(this)
    }
    handleInput(e){
        this.setState({
            currentItem:{
                text: e.target.value ,
                key: Date.now()

            }

        })
    }
    showModal = () => {
        this.setState({ show: true });
      };
    
      hideModal = () => {
        this.setState({ show: false });
      };
    addItem(e){
        e.preventDefault();
        const newItem= this.state.currentItem;
if(newItem.text!==""){
    const newItems = [...this.state.items , newItem]
    this.setState({
        items: newItems ,
        currentItem:{
            text: '' ,
            key: ''

        }
    })
}
    }
    deleteItem(key){
        const filteredItems = this.state.items.filter(item => item.key!== key);
        this.setState({
            items: filteredItems
        })
    }
    onClickButton = e =>{
        e.preventDefault()
        this.setState({openModal : true})
}
onCloseModal = ()=>{
    this.setState({openModal : false})
}
    render() {

     
   
 
        return (
            
            <div>
             
           
           
      

    
        
     
      <Lists items={this.state.items} deleteItem={this.deleteItem}/>
      <p onClick={this.onClickButton}>Write your review</p>
      <Modal open={this.state.openModal} onClose={this.onCloseModal}>
      <form id="to-do-form" onSubmit={this.addItem}>
<p>Title:</p>
      <input  type="text" />
      <p>Comment</p>
                    <input  type="text"  value={this.state.currentItem.text}  onChange={this.handleInput}/>
               <p>Your name:</p>
               <input  type="text" />
                    <button type="submit"></button>
                </form>     
</Modal>
           
            </div>
        )
    }
}

export default Review








