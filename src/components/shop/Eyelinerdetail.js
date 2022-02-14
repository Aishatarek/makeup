import React, { Component } from 'react';
import Lists from "./Lists";
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { getById } from "../../api/eyeliner";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import { addToCart } from "../Cartfolder/action/Action";

import { connect } from "react-redux";
import { Container, Row, Col } from 'reactstrap';
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaPinterestP, FaTruckMoving } from 'react-icons/fa';
import { HiShoppingCart } from 'react-icons/hi';
import { MdSecurity } from 'react-icons/md';
import { GiDirectionSigns } from 'react-icons/gi';
import Footer from "../Footer";
class Eyelinerdetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      quantity: 1,
      eyeliner: {},
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
      .then(eyeliner => {
        this.setState({
          eyeliner
        });
      })


    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  addToCart = (eyeliner) => {
    this.props.addToCart(eyeliner, this.state.quantity);
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
    const eyeliner = this.state.eyeliner;
    const quantity = this.state.quantity;
    const runcallback = (cb) => {
      return cb();
    }
    return (
      <div className="productdetailpage">
        <Container >
          <Row className="psec2">
            <Col lg="5" md="5" sm="12" className=" wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.1s" >
              <div className="allslides">
                <Slider
                  asNavFor={this.state.nav2}
                  ref={slider => (this.slider1 = slider)}
                >
                  <div>
                    <img src={eyeliner.img} alt="" className="shownimg" />
                  </div>
                  <div>
                    <img src={eyeliner.img2} alt="" className="shownimg" />
                  </div>
                  <div>
                    <img src={eyeliner.img3} alt="" className="shownimg" />
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
                    <img src={eyeliner.img} alt="" className="smallimg" />
                  </div>
                  <div>
                    <img src={eyeliner.img2} alt="" className="smallimg" />
                  </div>
                  <div>
                    <img src={eyeliner.img3} alt="" className="smallimg" />
                  </div>
                </Slider>
              </div>
            </Col>

            <Col lg="7" md="7" sm="12" className=" wow slideInRight" data-wow-duration="2s" data-wow-delay="0.1s">
              <div className="detainewproduct">
                <h3>{eyeliner.name}</h3>
                <hr />
                <div>

                  <p className="pdetail" onClick={this.onClickButton}>Write your review</p>
                  <Modal open={this.state.openModal} onClose={this.onCloseModal}>
                    <Container>
                      <Row >
                        <Col>
                          <div className="to-do-form">
                            <img src={eyeliner.img2} alt="" className="shownimg" />
                            <h5>{eyeliner.name}</h5>

                            <h5>Description</h5>
                            <p>"{eyeliner.description}"</p>
                          </div>
                        </Col>
                        <Col>
                          <form id="to-do-form" onSubmit={this.addItem}>
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
                <h5>{eyeliner.price} EGP</h5>
                <h5>Description</h5>
                <p>"{eyeliner.description}"</p>
                <h5>Quantity</h5>
                <div className="dibutton"> <input className="inputdetail" type="number" value={quantity} onChange={this.handleQuantity} />
                  <button onClick={() => this.addToCart(eyeliner)} className="buttonadd"><HiShoppingCart className="buttonaddicon" /> Add to Cart</button>

                </div>
                <h5>Total Price : {quantity * eyeliner.price}EGP</h5>
                <div className="flexicon"><h5>Share : </h5><FaFacebookF className="flexiconi" /> <FaTwitter className="flexiconi" /> <FaGooglePlusG className="flexiconi" /> <FaPinterestP className="flexiconi" /></div>
                <div className="diviconssssss">
                  <div><MdSecurity className="flexiconi" /><p>Security policy (edit with Customer reassurance module)</p></div>
                  <div><FaTruckMoving className="flexiconi" /><p> Delivery policy (edit with Customer reassurance module)</p></div>
                  <div><GiDirectionSigns className="flexiconi" /><p>Return policy (edit with Customer reassurance module)</p></div>
                </div>

              </div>

            </Col>
          </Row>

          <hr />
          <div className="listsss wow slideInDown" data-wow-duration="2s" data-wow-delay="0.1s">

            <h5> Reviews </h5>
            <p className="pdetail" onClick={this.onClickButton}>Write your review</p>
            <Modal open={this.state.openModal} onClose={this.onCloseModal}>
              <Container>
                <Row >
                  <Col>
                    <div className="to-do-form">
                      <img src={eyeliner.img2} alt="" className="shownimg" />
                      <h5>{eyeliner.name}</h5>

                      <h5>Description</h5>
                      <p>"{eyeliner.description}"</p>
                    </div>
                  </Col>
                  <Col>
                    <form id="to-do-form" onSubmit={this.addItem}>
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
          <div className="slidessssssss wow slideInRight" data-wow-duration="2s" data-wow-delay="0.1s">
            <h2>Best Seller</h2>

            <Slider {...settings}>
              <div className="productdetails" >



                <div className="prodeimg" style={{ width: '90%' }}>
                  <Link onClick={() => window.location.href = "/Eyeliner/2"} >      <img className="imgdetail1" width="100%" height="200px" src="/images/81B5uT0M05L._SL1500_.jpg" /> </Link>
                  <Link onClick={() => window.location.href = "/Eyeliner/2"} >       <img className="imgdetail2" width="100%" height="200px" src="/images/61u3Qsy67TL._SL1500_.jpg" /></Link>


                  <div className="detailicon">
                    <Link onClick={() => window.location.href = "/Eyeliner/2"} ><div className="icondetail"><AiFillEye /> </div></Link>
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
                  <span>-{315 - 165}</span>
                  <p><del>315 EGP </del></p>

                </div>

              </div>
              <div className="productdetails" >



                <div className="prodeimg" style={{ width: '90%' }}>
                  <Link onClick={() => window.location.href = "/Eyeliner/4"} >      <img className="imgdetail1" width="100%" height="200px" src="/images/21P6KksHQJL._SX342_SY445_QL70_FMwebp_.webp" /> </Link>
                  <Link onClick={() => window.location.href = "/Eyeliner/4"} >       <img className="imgdetail2" width="100%" height="200px" src="/images/41rvkrLf-vL._SL1005_.jpg" /></Link>


                  <div className="detailicon">
                    <Link onClick={() => window.location.href = "/Eyeliner/4"} ><div className="icondetail"><AiFillEye /> </div></Link>
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
                  <span>-{260 - 156}</span>
                  <p><del>260 EGP </del></p>

                </div>

              </div>
              <div className="productdetails">



                <div className="prodeimg" style={{ width: '90%' }}>
                  <Link onClick={() => window.location.href = "/Eyeliner/1"}>      <img className="imgdetail1" width="100%" height="200px" src="/images/61X3I1Yk3zS._SL1500_.jpg" /> </Link>
                  <Link onClick={() => window.location.href = "/Eyeliner/1"}  >       <img className="imgdetail2" width="100%" height="200px" src="/images/31ev5cNV5AS._SX300_SY300_QL70_FMwebp_.webp" /></Link>


                  <div className="detailicon">
                    <Link onClick={() => window.location.href = "/Eyeliner/1"}><div className="icondetail"><AiFillEye /> </div></Link>
                  </div>
                </div>

                <p >Maybelline  Sensational Eyeliner</p>

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
                  <span>-{160 - 112}</span>
                  <p><del>160 EGP </del></p>

                </div>

              </div>
              <div className="productdetails">



                <div className="prodeimg" style={{ width: '90%' }}>
                  <Link onClick={() => window.location.href = "/Eyeliner/20"} >      <img className="imgdetail1" width="100%" height="200px" src="/images/81i3NOFdbqL._SL1500_.jpg" /> </Link>
                  <Link onClick={() => window.location.href = "/Eyeliner/20"} >       <img className="imgdetail2" width="100%" height="200px" src="/images/71H6D7KSYkL._SL1500_.jpg" /></Link>


                  <div className="detailicon">
                    <Link onClick={() => window.location.href = "/Eyeliner/20"} ><div className="icondetail"><AiFillEye /> </div></Link>
                  </div>
                </div>

                <p >COVERGIRL Exhibitionist Eyeliner</p>

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
                  <span>-{330 - 300}</span>
                  <p><del>350 EGP </del></p>

                </div>

              </div>
              <div className="productdetails">



                <div className="prodeimg" style={{ width: '90%' }}>
                  <Link onClick={() => window.location.href = "/Eyeliner/15"} > <img className="imgdetail1" width="100%" height="200px" src="/images/61B3J-bDJpL._SL1500_.jpg" /> </Link>
                  <Link onClick={() => window.location.href = "/Eyeliner/15"} >  <img className="imgdetail2" width="100%" height="200px" src="/images/71wXgxrtI5L._SL1500_.jpg" /></Link>


                  <div className="detailicon">
                    <Link onClick={() => window.location.href = "/Eyeliner/15"} ><div className="icondetail"><AiFillEye /> </div></Link>
                  </div>
                </div>

                <p >Bobbi Brown Grenadine</p>

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
                  <h5 className="actualprice">200 EGP </h5>
                  <span>-{250 - 200}</span>
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
export default connect(null, mapDispatchToProps)(Eyelinerdetail)


