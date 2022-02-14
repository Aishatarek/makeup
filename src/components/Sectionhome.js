import React, { useState ,useEffect } from 'react'
import { Container, Row, Col, Button } from 'reactstrap';

function Sectionhome() {
    const [counter , setCounter] = useState(0);
    useEffect(() => {
       const interval = setInterval(() => {
          
if(counter==25){
    clearInterval();
}else{
        setCounter(counter+1);}
       }, 500);
        return () => {
            clearInterval(interval)
        }
      })
    return (
        <section className="sec6">
                <Container>
                        <Row className="psec2">
                           
                            <Col sm="12" lg="4 " md="4" className=" wow slideInLeft"  data-wow-duration="2s" data-wow-delay="0.1s">

                                <h5>
                                  {counter} 
                                </h5>
                                <h3>Years of experience</h3>

                            </Col>
                            <Col  sm="12" lg="8" md="8" className=" wow slideInRight"  data-wow-duration="2s" data-wow-delay="0.1s">
                            <img src="/images/close-up-portrait-of-beautiful-brunette.jpg" alt=""/>
                            </Col>

                        </Row>
                    </Container>
        </section>
    )
}

export default Sectionhome

