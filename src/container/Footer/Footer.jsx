import React, { useCallback, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import { CONTACT_LINK, images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';

import './Footer.scss';

const Footer = () => {
  const [formData, setformData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  const { name, email, message } = formData;

  const handleChangeInput = useCallback((e) => {
    const { name, value } = e.target;
    setformData(current => ({
      ...current,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback((e) => {
    if (name.trim().length === 0 || email.trim().length === 0 || message.trim().length === 0) {
      return;
    }
    e.preventDefault();
    setLoading(true);
    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    };
    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      });
    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, formRef.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  }, [email, message, name]);

  return (
    <>
      <h2 className='head-text'><span>Connect</span> with me</h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt="email" />
          <a href="mailto:uapathrabe@gmail.com" className='p-text' target='_blank' rel='noreferrer'>uapathrabe@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt="mobile" />
          <a href="http://m.me/utkarshpathrabe" className='p-text' target='_blank' rel='noreferrer'>Messenger</a>
        </div>
      </div>
      { (!isFormSubmitted) ?
      (<form className='app__footer-form app__flex' onSubmit={handleSubmit} ref={formRef} >
        <div className='app__flex'>
          <input className='p-text' type='text' placeholder='Your Name' name="name" value={name} onChange={handleChangeInput} required />
        </div>
        <div className='app__flex'>
          <input className='p-text' type='email' placeholder='Your Email' name="email" value={email} onChange={handleChangeInput} required />
        </div>
        <div>
          <textarea className='p-text' placeholder='Your Message' value={message} name="message" onChange={handleChangeInput} required />
        </div>
        <button type="submit" className='p-text' disabled={ loading }>
          { loading ? 'Sending' : 'Send Message' }
        </button>
      </form>) : (<div>
        <h3 className='head-text'>Thank you for getting in touch!</h3>
      </div>)}
    </>
  );
};

export default AppWrap(MotionWrap(Footer, 'app__footer'), CONTACT_LINK, 'app__whitebg');
