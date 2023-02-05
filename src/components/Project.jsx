import React from 'react';
import { Container, Row, Col,} from 'react-bootstrap';
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import gradient from '../assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import ProjectCard from './ProjectCard';



const Project = () => {
    const projects = [
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
        },
      ];
    
  return (
    <section className='project' id='projects'>
        <Container>
            <Row>
                <Col>
                <TrackVisibility>
                    {({isVisible}) => 
                        <div className={isVisible ? "animate__animated animate__slideInUp": ""}>
                            <h2>Projects</h2>
                        </div>
                    }
                </TrackVisibility>
                    <Row>
                        {
                            projects.map((project, i) => {
                                return (
                                    <ProjectCard
                                        key={i}
                                        {...project}
                                    />
                                )
                            })
                        }
                    </Row>
                </Col>
            </Row>
        </Container>
        <img src={gradient} className='background-image-right' alt="" />
    </section>
  )
}

export default Project