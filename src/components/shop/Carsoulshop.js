import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import {Link } from "react-router-dom";
const items = [
  {
   id:1,
   id1:6,
   id2:14,
    src: '/images/2.jpg',
    src1: '/images/81gziv35I2L._SL1500_.jpg',
    src2: '/images/61ePrpY0RBL._SL1500_.jpg',
    srchover: '/images/1.jpg',
    srchover1: '/images/71wpyQ1QzFL._SL1500_.jpg',
    srchover2: '/images/6141Q4icDSL._SL1500_.jpg',
name:'Maybelline New York',
name1:'Maybelline New York ',
name2:'Pure Ziva Deep',
price:112,
price2:70,
price3:150,
  
  },
  {
    id:2,
    id1:5,
    id2:20,
    src: '/images/1 (1).jpg',
    src1: '/images/711E7nd0wUL._SL1500_.jpg',

    src2: '/images/ebbfd129-c70e-4063-b472-704330e0ced6.73096f54c9eddecab10085e0793d9e54.jpeg',
    srchover: '/images/3.jpg',
    srchover1: '/images/71k2eZqPTSL._SL1500_.jpg',
    srchover2: '/images/f08c3826-b581-4611-9f41-367c2103863d.dd88878dc8d83b307f7a56df2525c506.jpeg',
    name:"L'Oreal Paris False",
    name1:'Maybelline New York ',
    name2:'Luma Lash Professional',
    price:165,
    price2:170,
    price3:300,
 
  }
];

const Carsoulshop = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src} className="alllllllll"
      >
     <div className="allcarsoulimg">
     <Link to={"/Shop/" + item.id} >  <div className="carsoulimgs">
  <img   src={item.src}  />
<img className="imghovercarsoul"  src={item.srchover}/>
</div> </Link>
   <div className="textcarsoul">
      <p>{item.name}</p>
     <h5>{item.price}</h5>
     </div> 
     </div> 
     <div className="allcarsoulimg">
     <Link to={"/Shop/" + item.id1} >   <div  className="carsoulimgs">
       <img  src={item.src1} /><img className="imghovercarsoul"  src={item.srchover1} />
       </div> </Link>
     <div className="textcarsoul"><p>{item.name1}</p>
     <h5>{item.price2}</h5></div>
     </div> 
     <div className="allcarsoulimg"> 
     <Link to={"/Shop/" + item.id2} > 
     
      <div className="carsoulimgs"><img src={item.src2} /><img className="imghovercarsoul"  src={item.srchover2} /></div> </Link>
    <div className="textcarsoul"> <p>{item.name2}</p>
     <h5>{item.price3}</h5></div>
     </div> 
      </CarouselItem>
      
    );
    
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Carsoulshop;