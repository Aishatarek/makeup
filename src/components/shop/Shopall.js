import React, { createContext, useState } from 'react';
import shops from "../../api/shops.json";
import Shopallitem from "./Shopallitem";
import { Col, Container, Row } from "reactstrap";
import Footer from "../Footer";
import {Link} from "react-router-dom";
import Carsoulshop from "./Carsoulshop";
function Shopall() {
  const [search, setSearch] = useState('');

  const [search3, setSearch3] = useState('');
  const [search2, setSearch2] = useState(0);
  const [search4, setSearch4] = useState('');



  return (< div >

    <section className="shopsection">
      <Container className="allproduct">
        <Row>
          <Col lg="3" md="3" sm="12" className=" wow slideInLeft"  data-wow-duration="2s" data-wow-delay="0.1s">


            <div className="filter">
              <form >
                <p className="plink"> Type </p>
                <Link className="link1"  to="/Shopall">All</Link>
                <br />
                <Link className="link1"  to="/Shop">Mascara</Link>
                <br />
                <Link className="link1"  to="/Lipstick">Lipstick</Link>
                <br />
                <Link className="link1"  to="/Eyeliner">Eyeliner</Link>
                <div className="inputs">
                  <p> Color </p>

                  <form >
                    <input type="radio" className="all" name="fav_language1" value="" onChange={event => { setSearch3(event.target.value) }} />
                    <label><span></span> all</label>
                    <br />

                    <input type="radio" className="blue" name="fav_language1" value="Blue" onChange={event => { setSearch3(event.target.value) }} />
                    <label><span></span> blue</label>
                    <br />
                    <input type="radio" className="black" name="fav_language1" value="black" onChange={event => { setSearch3(event.target.value) }} />
                    <label ><span></span> black</label>
                    <br />
                    <input type="radio" className="white" name="fav_language1" value="white" onChange={event => { setSearch3(event.target.value) }} />
                    <label ><span></span> white</label>
                    <br />
                    <input type="radio" className="red" name="fav_language1" value="red" onChange={event => { setSearch3(event.target.value) }} />
                    <label ><span></span> red</label>
                    <br />
                    <input type="radio" className="brown" name="fav_language1" value="brown" onChange={event => { setSearch3(event.target.value) }} />
                    <label ><span></span> brown</label>
                  </form>
                </div>

                <input className="inputsearch" placeholder="Search..." type="text" onChange={event => { setSearch(event.target.value) }} />
                <div className="inputs">
                  <form>
                    <p> Brand </p>


                    <input type="radio" className="all" name="brand" value="" onChange={event => { setSearch4(event.target.value) }} />
                    <label><span></span> all</label>
                    <br />

                    <input type="radio" className="all" name="brand" value="Maybelline" onChange={event => { setSearch4(event.target.value) }} />
                    <label><span></span> Maybelline</label>
                    <br />
                    <input type="radio" className="all" name="brand" value="L'Oreal" onChange={event => { setSearch4(event.target.value) }} />
                    <label ><span></span> L'Oreal</label>
                    <br />
                    <input type="radio" className="all" name="brand" value="Essence" onChange={event => { setSearch4(event.target.value) }} />

                    <label ><span></span> Essence</label>
                    <br />
                    <input type="radio" className="all" name="brand" value="NYX" onChange={event => { setSearch4(event.target.value) }} />

                    <label ><span></span> NYX</label>
                  </form>
                </div>

                <div >
                  <p> Price </p>

                  <input className="range" type="range" id="range" name="range" min="0" step="5" max="300" onChange={event => { setSearch2(event.target.value) }} /><br />
                  <output style={{ color: 'white' }} name="textrange" id="textrange" for="range" >{search2} </output> <label style={{ color: 'white' }}>EGP</label>

                </div>
              </form >
              <img className="imguuu" src="/images/advertising-s1.jpg" alt="" />
              <Carsoulshop />
            </div >
          </Col>
          <Col lg="9" md="9" sm="12">
            <div>
              <div className="shopsec1" className=" wow slideInRight"  data-wow-duration="2s" data-wow-delay="0.1s" >
                <img   className="imguuu" src="/images/mascara.jpg" alt="" />
                < h3 > Shop </h3>
                <p> Items and accessories
                  for your desk, kitchen or living room.Make your house a home with our eye - catching designs. </p> </div > <Row >
                {shops.filter((shop) => {
                  if (search === "" && search3 === "" && search4 === "") {
                    if (search2 == 0) { return shop; }
                    else if (shop.price == search2) {
                      return shop;
                    }
                  }
                  else if (shop.name.toLowerCase().includes(search.toLowerCase()) && shop.color.includes(search3) && shop.brand.toLowerCase().includes(search4.toLowerCase())) {
                    if (search2 == 0) { return shop; }
                    else if (shop.price == search2) {
                      return shop;
                    }
                  }
                }).map((shop) => (<Col lg="3" className=" wow slideInRight"  data-wow-duration="2s" data-wow-delay="0.1s"
                  md="3"
                  sm="12"
                  key={shop.id} >
                  <Shopallitem shop={shop} />
                </Col >))
                }

              </Row> </div >

          </Col>


        </Row>

      </Container>
    </section >

    <Footer />
  </div>
  )
}

export default Shopall