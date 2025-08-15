import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { WorkExpericence } from "./ProjectCard";
import { EducationCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import ecom from "../assets/ProjectImages/ecomWebsiteProject.png";
import havq from "../assets/ProjectImages/HAVOQProjectttt.png";
import nids from "../assets/ProjectImages/NIDSProject.png";
import portfolio from "../assets/ProjectImages/portfolioProject.png";
import capgemini from "../assets/ProjectImages/CapgeminiWorkExperience.png";
import cambridge from "../assets/ProjectImages/Cambridge.png";
import dsu from "../assets/ProjectImages/dsi.jpg";
import presidency from "../assets/ProjectImages/PRESIDENCY.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "🛒 E-commerce Website",
      description: "Built a React–Spring Boot site with microservices, API Gateway, and MySQL backend.",
      imgUrl: ecom,
    },
    {
      title: "🛡️ NIDS",
      description: "ML-powered intrusion detection with Flask UI and real-time email alerts.",
      imgUrl: nids,
    },
    {
      title: "📱 havoQ",
      description: "Android app for QR-based student attendance; cut manual tracking.",
      imgUrl: havq,
    },
    {
      title: "Portfolio",
      description: "The current webpage you are viewing, showcasing my skills and projects.",
      imgUrl: portfolio,
    },
  ];

  const experience = [
    {
      title: "💼 Capgemini",
      description: "Work Experience at Capgemini, where I contributed to various projects and gained valuable industry insights.",
      imgUrl: capgemini,
    },

  ];

  const education = [
    {
      title: "Cambridge School",
      description: "10th Grade",
      imgUrl: cambridge,
    },
    {
      title: "Dayanand Sagar Pre-University",
      description: "Pre-University",
      imgUrl: dsu,
    },
    {
      title: "Presidency University",
      description: "Bachelor of Technology in Computer Science",
      imgUrl: presidency,
    },

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects & Experience</h2>
                  <p>
                    ⚡ Turning caffeine into code and chaos into clean UI. <br />
                    📈 Projects? Delivered. Experience? Stacked. Let’s get it.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">WorkExperience</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Education</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {experience.map((experiences, index) => (
                            <WorkExpericence key={index} {...experiences}
                              imgClassName="capgemini-experience-img"
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {education.map((edu, index) => (
                            <EducationCard key={index} {...edu}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};
