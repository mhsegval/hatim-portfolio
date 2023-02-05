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
                        <p>I am capable of managing a company's social media presence to promote the brand and engage with customers. I have experience in brand development, market research, and strategic planning & analysis to inform decision making and create effective content, aided by my skills in graphic design tools like Adobe Illustrator, Photoshop, and Figma, as well as data analysis and insights.</p>
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
                                <h5>Content Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="" />
                                <h5>Data Analysis and Insight</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="" />
                                <h5>Adobe Cloud</h5>
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