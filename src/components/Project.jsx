import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projImg1 from "../assets/img/project/1.png";
import projImg2 from "../assets/img/project/2.png";
import projImg3 from "../assets/img/project/3.png";
import projImg4 from "../assets/img/project/4.png";
import projImg5 from "../assets/img/project/5.png";
import projImg6 from "../assets/img/project/6.png";
import projImg7 from "../assets/img/project/7.png";
import projImg8 from "../assets/img/project/8.png";
import projImg10 from "../assets/img/project/10.png";
import projImg12 from "../assets/img/project/12.png";
import projImg13 from "../assets/img/project/13.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Project = () => {
        const projects = [
            {
              title: "Belly Rubs Campaign",
              imgUrl: projImg1,
              link: "https://drive.google.com/file/d/1Xf8HWlqb0jG4Y-JU95GAnwFmBlHVxBZS/view"
            },
            {
              title: "Samsung Creative Brief",
              imgUrl: projImg2,
              link: "https://drive.google.com/file/d/1dXnlDZE-mned8ojPJGyENkWC8SM4RdhW/view"
            },
            {
              title: "BTS Creative Brief",
              imgUrl: projImg3,
              link: "https://drive.google.com/file/d/1RYsIXnk-pVK3G5_cvCrAbdF3yvhLw-fp/view"
            },
            {
              title: "Ford Everest Campaign",
              imgUrl: projImg4,
              link: "https://drive.google.com/file/d/18rgXHXbf4dPHjlI8l4OsTVOXtcztz6g0/view"
            },
            {
              title: "Patagonia Campaign",
              imgUrl: projImg5,
              link: "https://drive.google.com/file/d/1fLzoN0A48cmDmzYBu6UaalvzyC31rnRQ/view"
            },
            {
              title: "Nintendo Switch Creative Brief",
              imgUrl: projImg6,
              link: "https://drive.google.com/file/d/1DcdVXAbC1z015chQWWJy7QHa1D2PKPzq/view"
            },

          ];

    const projects2 = [
            {
              title: "Poumon Noir Campaign",
              imgUrl: projImg7,
              link: "https://drive.google.com/file/d/1m96x9McM3lHP6WpssNOVg1z-tEIOImMx/view"
            },
            {
              title: "Barbican Campaign",
              imgUrl: projImg8,
              link: "https://drive.google.com/file/d/1KT0DgSK1eDOHu_5ZTnKPEfxHtzjvZBmj/view"
            },
            {
              title: "Flee Rental Car Service logs",
              imgUrl: projImg10,
              link: "https://drive.google.com/file/d/1PMeNzhSON0gg5orPTCx3-ouN5tod6pki/view"
            },
            {
              title: "Samsung Brandwatch & Analytics",
              imgUrl: projImg12,
              link: "https://drive.google.com/file/d/1C4Olb3gCwxbgXF5o9_s6fccH3MXLijEV/view"
            },
            {
              title: "Basic Maintenance Campaign",
              imgUrl: projImg13,
              link: "https://drive.google.com/file/d/148aQg0gfKdBmDI4JQD-ebiF6hmxXmFnb/view"
            },
    ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div>
                <h2 className={isVisible ? "animate__animated animate__slideInUp": ""}>Projects</h2>
                <p>Click on individual Project to see the whole project documentation</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}

export default Project