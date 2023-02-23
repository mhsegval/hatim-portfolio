import React from 'react'
import {Container, Row, Col } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../assets/img/meter1.svg'
import meter2 from '../assets/img/meter2.svg'
import meter3 from '../assets/img/meter3.svg'
import gradient from '../assets/img/color-sharp.png'


const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <section className='skills' id='skills'>
        <Container>
            <Row>
                <Col>
                    <div className="skill-box">
                        <h2>Skills</h2>
                        <p>Alrighty! I’ve got a whole arsenal of marketing skills that are just dying to be put to use. And with me on your side, it’s like a party every day! I’ve got all the skills you need to succeed, from brand development to data analysis and insights. And I promise to make it all fun and enjoyable, like a marketing carnival ride</p>
                        <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                            <div className="item">
                                <img src={meter2} alt="" />
                                <h5>Social Media Management</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="" />
                                <h5>Stategic Planning and Analysis</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="" />
                                <h5>Brand Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="" />
                                <h5>Campaign Management</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="" />
                                <h5>Data Analysis and Insight</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="" />
                                <h5>Market Research</h5>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
        <img src={gradient} className='background-image-left' alt="" />
    </section>
  )
}

export default Skills