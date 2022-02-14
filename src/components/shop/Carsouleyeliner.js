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
    src: '/images/61X3I1Yk3zS._SL1500_.jpg',
    src1: '/images/51nHsn8Kr4S._SL1000_.jpg',
    src2: '/images/71ljNup7XeL._SL1500_.jpg',
    srchover: '/images/31ev5cNV5AS._SX300_SY300_QL70_FMwebp_.webp',
    srchover1: '/images/61mkUSl5uFL._SL1500_.jpg',
    srchover2: '/images/71iEkMOLyKL._SL1500_.jpg',
name:'NYX PROFESSIONAL MAKEUP',
name1:'NYX PROFESSIONAL MAKEUP',
name2:"L'Oréal Paris Infallible Paints",
price:112,
price2:70,
price3:150,
  
  },
  {
    id:2,
    id1:5,
    id2:20,
    src: '/images/61u3Qsy67TL._SL1500_.jpg',
    src1: '/images/61W882M0OLL._SL1000_.jpg',

    src2: '/images/81i3NOFdbqL._SL1500_.jpg',
    srchover: '/images/81B5uT0M05L._SL1500_.jpg',
    srchover1: '/images/51qS9Ur1BTL._SL1000_.jpg',
    srchover2: '/images/71H6D7KSYkL._SL1500_.jpg',
    name:"Maybelline Eyestudio Master",
    name1:'Maybelline New York',
    name2:'Maybelline New York Line',
    price:165,
    price2:170,
    price3:300,
 
  }
];

const Carsouleyeliner = (props) => {
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
     <Link to={"/Eyeliner/" + item.id} >  <div className="carsoulimgs">
  <img   src={item.src}  />
<img className="imghovercarsoul"  src={item.srchover}/>
</div> </Link>
   <div className="textcarsoul">
      <p>{item.name}</p>
     <h5>{item.price}</h5>
     </div> 
     </div> 
     <div className="allcarsoulimg">
     <Link to={"/Eyeliner/" + item.id1} >   <div  className="carsoulimgs">
       <img  src={item.src1} /><img className="imghovercarsoul"  src={item.srchover1} />
       </div> </Link>
     <div className="textcarsoul"><p>{item.name1}</p>
     <h5>{item.price2}</h5></div>
     </div> 
     <div className="allcarsoulimg"> 
     <Link to={"/Eyeliner/" + item.id2} > 
     
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

export default Carsouleyeliner;