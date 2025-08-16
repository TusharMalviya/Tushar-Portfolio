import { Container, Col, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import AndroidStudio from "../assets/symbols/ANdroidStudio.svg";
import BootStrapFrameWork from "../assets/symbols/BootStrapFrameWork.svg";
import C from "../assets/symbols/C.svg";
import Cpp from "../assets/symbols/C++.svg";
import CSS from "../assets/symbols/CSS.svg";
import Docker from "../assets/symbols/Docker.svg";
import Eclipse from "../assets/symbols/Eclipse.svg";
import Figma from "../assets/symbols/Figma.svg";
import git from "../assets/symbols/git.svg";
import Gitbash from "../assets/symbols/Gitbash.svg";
import Golang from "../assets/symbols/Golang.svg";
import HTML from "../assets/symbols/HTML.svg";
import IJ from "../assets/symbols/IJ.svg";
import java from "../assets/symbols/java.svg";
import JS from "../assets/symbols/JS.svg";
import LombokFramework from "../assets/symbols/LombokFramework.svg";
import MongoDB from "../assets/symbols/MongoDB.svg";
import Mysql from "../assets/symbols/Mysql.svg";
import OracleDB from "../assets/symbols/OracleDB.svg";
import Python from "../assets/symbols/Python.svg";
import ReactFramework from "../assets/symbols/ReactFramework.svg";
import springIcon from "../assets/symbols/spring-icon-svgrepo-com.svg";
import VSCode from "../assets/symbols/VSCode.svg";
import xml from "../assets/symbols/xml-svgrepo-com.svg";
import bgSharp from '../assets/img/bg-sharp.jpg';


export const Skills = () => {
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
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <h2>
                                Skills
                            </h2>
                            <ul style={{ listStyle: "none", padding: 0, margin: 0, textAlign: "center" }}>
                                <li style={{ marginBottom: "10px" }}>
                                    <strong>Backend:</strong> Core Java, Spring Boot, Spring MVC, RESTful Services, Microservices, Batch Jobs, JMS/MQ
                                </li>
                                <li style={{ marginBottom: "10px" }}>
                                    <strong>Frontend:</strong> React.js, JSP, HTML, CSS, JavaScript, XML
                                </li>
                                <li style={{ marginBottom: "10px" }}>
                                    <strong>Databases:</strong> MySQL, MongoDB, Oracle DB
                                </li>
                                <li style={{ marginBottom: "10px" }}>
                                    <strong>Servers &amp; Middleware:</strong> JBoss, Apache Tomcat
                                </li>
                                <li style={{ marginBottom: "10px" }}>
                                    <strong>Tools:</strong> Spring Tool Suite, Eclipse, VS Code, Docker, Android Studio
                                </li>
                                <li>
                                    <strong>Version Control:</strong> Git, GitHub
                                </li>
                            </ul>
                        </div>
                        <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                            <div className='item'>
                                <img src={java} alt="java" />
                            </div>
                            <div className='item'>
                                <img src={C} alt="C" />
                            </div>
                            <div className='item'>
                                <img src={Cpp} alt="C++" />
                            </div>
                            <div className='item'>
                                <img src={Python} alt="Python" />
                            </div>
                            <div className='item'>
                                <img src={Golang} alt="Golang" />
                            </div>
                            <div className='item'>
                                <img src={HTML} alt="HTML" />
                            </div>
                            <div className='item'>
                                <img src={CSS} alt="CSS" />
                            </div>
                            <div className='item'>
                                <img src={JS} alt="JS" />
                            </div>
                            <div className='item'>
                                <img src={OracleDB} alt="OracleDB" />
                            </div>
                            <div className='item'>
                                <img src={Mysql} alt="Mysql" />
                            </div>
                            <div className='item'>
                                <img src={MongoDB} alt="MongoDB" />
                            </div>
                            <div className='item'>
                                <img src={Gitbash} alt="Gitbash" />
                            </div>
                            <div className='item'>
                                <img src={git} alt="git" />
                            </div>
                            <div className='item'>
                                <img src={Docker} alt="Docker" />
                            </div>

                            <div className='item'>
                                <img src={xml} alt="xml-svgrepo-com" />
                            </div>
                            <div className='item'>
                                <img src={BootStrapFrameWork} alt="BootStrapFrameWork" />
                            </div>
                            <div className='item'>
                                <img src={ReactFramework} alt="ReactFramework" />
                            </div>
                            <div className='item'>
                                <img src={LombokFramework} alt="LombokFramework" />
                            </div>
                            <div className='item'>
                                <img src={VSCode} alt="VSCode" />
                            </div>
                            <div className='item'>
                                <img src={springIcon} alt="springIcon" />
                            </div>
                            <div className='item'>
                                <img src={Eclipse} alt="Eclipse" />
                            </div>
                            <div className='item'>
                                <img src={AndroidStudio} alt="ANdroidStudio" />
                            </div>
                            <div className='item'>
                                <img src={Figma} alt="Figma" />
                            </div>
                            <div className='item'>
                                <img src={IJ} alt="IJ" />
                            </div>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-left' src={bgSharp} />
        </section>
    )


}
