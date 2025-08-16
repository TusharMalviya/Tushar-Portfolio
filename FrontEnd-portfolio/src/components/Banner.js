import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import BgLogoEngineer from '../assets/img/BgLogoEngineer.png';


export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const toRotate = ["Software Engineer", "Full-Stack Developer", "Web Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }


    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-item-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to My Portfolio</span>
                        <h1>{`Hi I'm Tushar J Malviya`} <span className="wrap">{text}</span></h1>
                        <p>
                            💻 I Code. I Solve. I Scale.<br />
                            🚀 Full-Stack Developer | Capgemini Technologies<br />
                            <br />
                            Adaptable and detail-oriented Full Stack Developer with experience in scalable web application development and
                            enhancing legacy enterprise systems. Proficient in Java, Spring Boot, React, and backend system architecture.
                            Recognized for delivering high-quality, maintainable solutions under pressure, while collaborating with
                            cross-functional teams.
                        </p>
                        <button onClick={() => { window.location.hash = "#connect"; }}>Let's Connect <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={BgLogoEngineer} alt="Headder image" />
                    </Col>
                </Row>
            </Container>

        </section>
    )
}