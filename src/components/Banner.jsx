import React, {useEffect, useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {BsFillArrowRightCircleFill} from 'react-icons/bs';
import {BiHappyAlt} from 'react-icons/bi'
import {FiCornerDownRight} from 'react-icons/fi'
import headerImg from "../assets/img/header-img.svg"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period =1200;



    useEffect(() => {
        const toRotate = ['Marketing Specialist', 'Brand Strategist', 'Advertising Expert'];
        const tick = () => {
            let i = loopNum % toRotate.length;
            let fullText = toRotate[i];
            let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
    
            setText(updatedText);
    
            if(isDeleting){
                setDelta(80)
            }
    
            if(!isDeleting && updatedText === fullText) {
                setIsDeleting(true);
                setDelta(period);
            } else if(isDeleting && updatedText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setDelta(100);
            }else {

            }
        }

        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => { clearInterval(ticker)};
    }, [delta, isDeleting, loopNum, text])

  return (
    <section className='banner' id='home'>
        <Container>
            <Row>
                <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                    {({isVisible}) => 
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                            <span className='tagline'>Welcome to my portfolio</span>
                            <h1>{`Hi, I am Hatim `}<BiHappyAlt /></h1>
                            <h2><FiCornerDownRight /> <span className='wrap'>{text}</span></h2>
                            <p>An energetic and driven marketing professional with 3 years of experience in developing and executing successful marketing strategies and campaigns to increase brand awareness, drive sales, and engage target audience. Skilled in project management, content creation, and digital marketing.</p>
                            <button onClick={() => window.location.href='#contact'}>Let's Connect<BsFillArrowRightCircleFill size={25}/></button>
                        </div>
                    }          
                    </TrackVisibility>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} className="d-none d-md-block" alt="Header Img" />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner