import React, {useState , useRef} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg'
import emailjs from '@emailjs/browser';



const Contact = () => {
    const formDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    }

    const [form, setForm] = useState(formDetails);
    const [buttonText, setButtonText] = useState('Send')
    const [status, setStatus] = useState({});

    const formRef = useRef();
    const  {REACT_APP_SERVICE_ID,REACT_APP_TEMPLATE_ID,REACT_APP_PUBLIC_KEY} = process.env

    const sendEmail = (e) => {
        e.preventDefault();
        setButtonText('Sending ...');
        emailjs.sendForm(`${REACT_APP_SERVICE_ID}`,`${REACT_APP_TEMPLATE_ID}`, formRef.current, `${REACT_APP_PUBLIC_KEY}`)
          .then((result) => {
              console.log(result.text);
              setStatus({ success: true, message: 'Message Sent Successfully'});
          }, (error) => {
              console.log(error.text);
              setStatus({ success: false, message: 'Something Went Wrong, Please try again later.'});

          });
          setForm(formDetails);
          setButtonText('Send');
      };

    const onFormUpdate = (category, value) => {
        setForm({
          ...form,
          [category]: value
        })
    }

  return (
    <section className='contact' id='contact'>
        <Container>
            <Row className='align-items-center'>
                <Col md={6}>
                    <img src={contactImg} className="d-none d-md-block" alt="Contact me" />
                </Col>
                <Col md={6}>
                    <h2>Get In Touch</h2>
                    <form ref={formRef} onSubmit={sendEmail}>
                        <Row>
                            <Col sm={6} className='px-sm-1'>
                                <input 
                                    type="text" 
                                    value={form.firstName} 
                                    name='firstName' 
                                    onChange={(e) => 
                                    onFormUpdate('firstName', e.target.value)} 
                                    placeholder='First Name' 
                                />
                            </Col>
                            <Col sm={6} className='px-sm-1'>
                                <input 
                                    type="text" 
                                    value={form.lastName} 
                                    name='lastName' 
                                    onChange={(e) => 
                                    onFormUpdate('lastName', e.target.value)} 
                                    placeholder='Last Name' 
                                />
                            </Col>
                            <Col sm={6} className='px-sm-1'>
                                <input 
                                    type="email" 
                                    value={form.email} 
                                    name='email' 
                                    onChange={(e) => 
                                    onFormUpdate('email', e.target.value)} 
                                    placeholder='Email Address' 
                                />
                            </Col>
                            <Col sm={6} className='px-sm-1'>
                                <input 
                                    type="tel" 
                                    value={form.phone} 
                                    name='phone' 
                                    onChange={(e) => 
                                    onFormUpdate('phone', e.target.value)} 
                                    placeholder='Phone No' 
                                />
                            </Col>
                            <Col className='px-sm-1'>
                                <textarea 
                                    value={form.message} 
                                    name='message'
                                    rows="6" 
                                    onChange={(e) => 
                                    onFormUpdate('message', e.target.value)}>
                                </textarea>
                                <button type='submit'><span>{buttonText}</span></button>
                                
                            </Col>
                            {
                                status.message && 
                                <Col md={12}>
                                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                </Col>}
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Contact