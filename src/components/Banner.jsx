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
        const toRotate = ['Marketing Specialist'];
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
                            <h1>{`Hi, I'm Hatim `}<BiHappyAlt /></h1>
                            <h2><FiCornerDownRight /> <span className='wrap'>{text}</span></h2>
                            <p>Howdy! I’m a marketing wizard, here to save the day (or at least your brand). I’ve spent the last three years stretching my creative muscles and devising strategies that will make your head spin like a Beyoncé dance move. I’ll make your brand stand out like a flamingo in a flock of pigeons. I can engage your target audience like a celebrity gossip columnist and drive sales like a hot dog stand at a baseball game. Let’s create something magical together!</p>
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