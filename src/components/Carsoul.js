import React, { Component } from "react";
import Slider from "react-slick";

export default class Carsoul extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
       
        <Slider {...settings} className="allcarsoul">
          <div className="carsoul">
            <img src="/images/futuristic-make-up-1.jpg" />
            <div className=" wow slideInDown" data-wow-duration="2s" data-wow-delay="0.1s">
     <h3>
     Welcome <br />
to
Rouge Makeup 
     </h3>
     <button>Our Services</button>
     </div>
          </div>
          <div className="carsoul">
            <img src="/images/glamour-portrait-of-beautiful-woman-model-with-fresh-daily-makeup-and-romantic-wavy-hairstyle-1.jpg" />
            <div>
     <h3>
     Welcome<br /> to
Rouge Makeup 
     </h3>
     <button>Our Services</button>
     </div>
          </div>
          <div className="carsoul">
            <img src="/images/glamour-portrait-of-beautiful-woman-model-with-fresh-daily-makeup-and-romantic-wavy-hairstyle.jpg" />
            <div>
     <h3>
     Welcome<br /> to
Rouge Makeup 
     </h3>
     <button>Our Services</button>
     </div>
          </div>
          <div className="carsoul">
            <img src="/images/make-up-glamour-portrait-of-beautiful-woman-model-with-fresh-makeup-and-romantic-hairstyle-1-3.jpg"/>
            <div>
     <h3>
     Welcome<br /> to
Rouge Makeup 
     </h3>
     <button>Our Services</button>
     </div>
          </div>
        </Slider>
      </div>
    );
  }
}
