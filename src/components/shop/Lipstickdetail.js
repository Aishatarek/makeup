import React, { Component } from 'react';
import Lists from "./Lists";
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { getById } from "../../api/lipsticks";
import Slider from "react-slick";
import {Link } from "react-router-dom";
import {AiFillEye } from "react-icons/ai";
import { addToCart } from "../Cartfolder/action/Action";

import { connect } from "react-redux";
import { Container, Row, Col } from 'reactstrap';
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaPinterestP , FaTruckMoving } from 'react-icons/fa';
import { HiShoppingCart } from 'react-icons/hi';
import { MdSecurity } from 'react-icons/md';
import { GiDirectionSigns } from 'react-icons/gi';
import Footer from "../Footer";
class Lipstickdetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      quantity: 1,
      lipstick: {},
      items: [],
      openModal: false,
      currentItem: {
        text: '',
        key: ''
      }
    };

    this.handleInput = this.handleInput.bind(this)
    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  componentDidMount() {
    
    const id = this.props.match.params.id;
    getById(parseInt(id))
      .then(lipstick => {
        this.setState({
          lipstick
        });
      })


    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  addToCart = (lipstick) => {
    this.props.addToCart(lipstick, this.state.quantity);
  }

  handleQuantity = (event) => {
    const value = event.target.value;
    if (value < 1)
      return;
    this.setState({
      quantity: value
    })
  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
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
  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem]
      this.setState({
        items: newItems,
        currentItem: {
          text: '',
          key: ''

        }
      })
    }
  }
  deleteItem(key) {
    const filteredItems = this.state.items.filter(item => item.key !== key);
    this.setState({
      items: filteredItems
    })
  }
  onClickButton = e => {
    e.preventDefault()
    this.setState({ openModal: true })
  }
  onCloseModal = () => {
    this.setState({ openModal: false })
  }

  render() {
    var settings = {
  
 
  
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
           
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    const lipstick = this.state.lipstick;
    const quantity = this.state.quantity;
    const runcallback = (cb) => {
      return cb();
    }
    return (
      <div className="productdetailpage">
        <Container >
          <Row className="psec2">
            <Col lg="5" md="5" sm="12" className=" wow slideInLeft"  data-wow-duration="2s" data-wow-delay="0.1s" >
              <div className="allslides">
                <Slider
                  asNavFor={this.state.nav2}
                  ref={slider => (this.slider1 = slider)}
                >
                  <div>
                    <img src={lipstick.img} alt="" className="shownimg" />
                  </div>
                  <div>
                    <img src={lipstick.img2} alt="" className="shownimg" />
                  </div>
                  <div>
                    <img src={lipstick.img3} alt="" className="shownimg" />
                  </div>
                </Slider>

                <Slider
                  asNavFor={this.state.nav1}
                  ref={slider => (this.slider2 = slider)}
                  slidesToShow={3}
                  swipeToSlide={true}
                  focusOnSelect={true}
                >
                  <div>
                    <img src={lipstick.img} alt="" className="smallimg" />
                  </div>
                  <div>
                    <img src={lipstick.img2} alt="" className="smallimg" />
                  </div>
                  <div>
                    <img src={lipstick.img3} alt="" className="smallimg" />
                  </div>
                </Slider>
              </div>
            </Col>

            <Col lg="7" md="7" sm="12" className=" wow slideInRight"  data-wow-duration="2s" data-wow-delay="0.1s" >
              <div className="detainewproduct">
                <h3>{lipstick.name}</h3>
                <hr />
                <div>
                  
                  <p className="pdetail" onClick={this.onClickButton}>Write your review</p>
                  <Modal open={this.state.openModal} onClose={this.onCloseModal}>
                 <Container>
                   <Row >
                 <Col>
                    <div className="to-do-form">
                      <img src={lipstick.img2} alt="" className="shownimg" />
                      <h5>{lipstick.name}</h5>

                      <h5>Description</h5>
                      <p>"{lipstick.description}"</p>
                    </div>
                    </Col>
                    <Col>
                    <form id="to-do-form" onSubmit={this.addItem}>
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
                      <p>Title:</p>
                      <input type="text" />
                      <p>Comment</p>
                      <input type="text" value={this.state.currentItem.text} onChange={this.handleInput} />
                      <p>Your name:</p>
                      <input type="text" />
                      <br />
                      <button type="submit">Submit</button>
                    </form>
                    </Col>
                    </Row>
                    </Container>
                  </Modal>

                </div>
                <h5>{lipstick.price} EGP</h5>
                <h5>Description</h5>
                <p>"{lipstick.description}"</p>
                <h5>Quantity</h5>
              <div className="dibutton"> <input className="inputdetail" type="number" value={quantity} onChange={this.handleQuantity} />
                <button onClick={() => this.addToCart(lipstick)} className="buttonadd"><HiShoppingCart className="buttonaddicon"/> Add to Cart</button>

                </div> 
                <h5>Total Price : {quantity * lipstick.price}EGP</h5>
                <div className="flexicon"><h5>Share : </h5><FaFacebookF className="flexiconi"/> <FaTwitter  className="flexiconi"/> <FaGooglePlusG  className="flexiconi"/> <FaPinterestP  className="flexiconi"/></div>
                <div className="diviconssssss">
                  <div><MdSecurity className="flexiconi"/><p>Security policy (edit with Customer reassurance module)</p></div>
                  <div><FaTruckMoving  className="flexiconi"/><p> Delivery policy (edit with Customer reassurance module)</p></div>
                  <div><GiDirectionSigns  className="flexiconi"/><p>Return policy (edit with Customer reassurance module)</p></div>
                </div>
              
              </div>

            </Col>
          </Row>

       <hr />
          <div className="listsss wow slideInDown"  data-wow-duration="2s" data-wow-delay="0.1s" >

                <h5> Reviews </h5> 
                     <p className="pdetail" onClick={this.onClickButton}>Write your review</p>
                  <Modal open={this.state.openModal} onClose={this.onCloseModal}>
                 <Container>
                   <Row >
                 <Col>
                    <div className="to-do-form">
                      <img src={lipstick.img2} alt="" className="shownimg" />
                      <h5>{lipstick.name}</h5>

                      <h5>Description</h5>
                      <p>"{lipstick.description}"</p>
                    </div>
                    </Col>
                    <Col>
                    <form id="to-do-form" onSubmit={this.addItem}>
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
                      <p>Title:</p>
                      <input type="text" />
                      <p>Comment</p>
                      <input type="text" value={this.state.currentItem.text} onChange={this.handleInput} />
                      <p>Your name:</p>
                      <input type="text" />
                      <br />
                      <button type="submit">Submit</button>
                    </form>
                    </Col>
                    </Row>
                    </Container>
                  </Modal>
         <Lists items={this.state.items} deleteItem={this.deleteItem} />
                </div>
                <hr />
<div  className="slidessssssss wow slideInRight"  data-wow-duration="2s" data-wow-delay="0.1s" >
<h2>Best Seller</h2>

          <Slider {...settings}>
          <div className="productdetails" >

     

<div className="prodeimg" style={{width:'90%'}}>
<Link  onClick={()=>window.location.href="/Lipstick/2" } >      <img className="imgdetail1" width="100%" height="200px" src="/images/413o5Fg1nfS._SL1000_.jpg"  /> </Link>
<Link onClick={()=>window.location.href="/Lipstick/2" } >       <img  className="imgdetail2"width="100%" height="200px" src="/images/31NI2hRc84S._SL1000_.jpg"  /></Link>


<div className="detailicon">
<Link  onClick={()=>window.location.href="/Lipstick/2" } ><div className="icondetail"><AiFillEye /> </div></Link>
</div>
        </div>

       <p >Maybelline New York </p>
      
       <h5> {runcallback(() => {
        const row = []
        for (var i = 0; i < 5; i++) {
          row.push(<span className="stary" > ★ </span>)
        }
        for (var n = 0; n < 5 - 5; n++) {
          row.push(<span className="stary"> ☆ </span>)
        }
        return row;
      })
      }</h5>
      <div className="price"> 
      <h5 className="actualprice">165 EGP </h5>
      <span>-{315-165}</span>
  <p><del>315 EGP </del></p>

  </div>  

      </div>
      <div className="productdetails" >

     

<div className="prodeimg" style={{width:'90%'}}>
<Link onClick={()=>window.location.href="/Lipstick/4" } >      <img className="imgdetail1" width="100%" height="200px" src="/images/61QeBhYd29S._SL1500_.jpg"  /> </Link>
<Link  onClick={()=>window.location.href="/Lipstick/4" } >       <img  className="imgdetail2"width="100%" height="200px" src="/images/71N+OvYsJ3S._SL1500_.jpg" /></Link>


<div className="detailicon">
<Link  onClick={()=>window.location.href="/Lipstick/4" } ><div className="icondetail"><AiFillEye /> </div></Link>
</div>
        </div>

       <p >NYX PROFESSIONAL MAKEUP </p>
      
       <h5> {runcallback(() => {
        const row = []
        for (var i = 0; i < 3; i++) {
          row.push(<span className="stary" >  ★ </span>)
        }
        for (var n = 0; n < 5 - 3; n++) {
          row.push(<span className="stary">   ☆</span>)
        }
        return row;
      })
      }</h5>
      <div className="price"> 
      <h5 className="actualprice">156 EGP </h5>
      <span>-{260-156}</span>
  <p><del>260 EGP </del></p>

  </div>  

      </div>
      <div className="productdetails">

     

<div className="prodeimg" style={{width:'90%'}}>
<Link  onClick={()=>window.location.href="/Lipstick/1" }>      <img className="imgdetail1" width="100%" height="200px" src="/images/81+Ha9-EgmL._SL1500_.jpg" /> </Link>
<Link onClick={()=>window.location.href="/Lipstick/1" }  >       <img  className="imgdetail2"width="100%" height="200px" src="/images/71fWO5LXECL._SL1500_.jpg"  /></Link>


<div className="detailicon">
<Link  onClick={()=>window.location.href="/Lipstick/1" }><div className="icondetail"><AiFillEye /> </div></Link>
</div>
        </div>

       <p >Maybelline  Sensational Lipstick</p>
      
       <h5> {runcallback(() => {
        const row = []
        for (var i = 0; i < 5; i++) {
          row.push(<span className="stary" >  ★ </span>)
        }
        for (var n = 0; n < 5 - 5; n++) {
          row.push(<span className="stary">   ☆</span>)
        }
        return row;
      })
      }</h5>
      <div className="price"> 
      <h5 className="actualprice">112 EGP </h5>
      <span>-{160-112}</span>
  <p><del>160 EGP </del></p>

  </div>  

      </div>
      <div className="productdetails">

     

<div className="prodeimg" style={{width:'90%'}}>
<Link  onClick={()=>window.location.href="/Lipstick/20" } >      <img className="imgdetail1" width="100%" height="200px" src="/images/61JardqyliL._SL1500_.jpg" /> </Link>
<Link  onClick={()=>window.location.href="/Lipstick/20" } >       <img  className="imgdetail2"width="100%" height="200px" src="/images/71EdlZnsunL._SL1500_.jpg" /></Link>


<div className="detailicon">
<Link  onClick={()=>window.location.href="/Lipstick/20" } ><div className="icondetail"><AiFillEye /> </div></Link>
</div>
        </div>

       <p >COVERGIRL Exhibitionist Lipstick</p>
      
       <h5> {runcallback(() => {
        const row = []
        for (var i = 0; i < 5; i++) {
          row.push(<span className="stary" >  ★ </span>)
        }
        for (var n = 0; n < 5 - 5; n++) {
          row.push(<span className="stary">   ☆</span>)
        }
        return row;
      })
      }</h5>
      <div className="price"> 
      <h5 className="actualprice">300 EGP </h5>
      <span>-{330-300}</span>
  <p><del>350 EGP </del></p>

  </div>  

      </div>
      <div className="productdetails">

     

<div className="prodeimg" style={{width:'90%'}}>
<Link  onClick={()=>window.location.href="/Lipstick/15" } > <img className="imgdetail1" width="100%" height="200px" src="/images/61jeMnNjL1L._SL1500_.jpg" /> </Link>
<Link  onClick={()=>window.location.href="/Lipstick/15" } >  <img  className="imgdetail2"width="100%" height="200px" src="/images/51vFACILpsL._SL1500_.jpg" /></Link>


<div className="detailicon">
<Link  onClick={()=>window.location.href="/Lipstick/15" } ><div className="icondetail"><AiFillEye /> </div></Link>
</div>
        </div>

       <p >Bobbi Brown Grenadine</p>
      
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
      <h5 className="actualprice">200 EGP </h5>
      <span>-{250-200}</span>
  <p><del>200 EGP </del></p>

  </div>  

      </div>

          </Slider>
          </div>
        </Container>



        <Footer />
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (productInfo, quantity) => dispatch(addToCart(productInfo, quantity)),

  }
}
export default connect(null, mapDispatchToProps)(Lipstickdetail)


