import React, { useCallback, useState } from 'react';

import { CONTACT_LINK, images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';

import './Footer.scss';

const Footer = () => {
  const [formData, setformData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = useCallback((e) => {
    const { name, value } = e.target;
    setformData(current => ({
      ...current,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback((e) => {
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
  }, [email, message, name]);

  return (
    <>
      <h2 className='head-text'>Connect with me</h2>
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
      (<div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input className='p-text' type='text' placeholder='Your Name' name="name" value={name} onChange={handleChangeInput} />
        </div>
        <div className='app__flex'>
          <input className='p-text' type='email' placeholder='Your Email' name="email" value={email} onChange={handleChangeInput} />
        </div>
        <div>
          <textarea className='p-text' placeholder='Your Message' value={message} name="message" onChange={handleChangeInput} />
        </div>
        <button type="button" className='p-text' onClick={handleSubmit} disabled={ loading }>
          { loading ? 'Sending' : 'Send Message' }
        </button>
      </div>) : (<div>
        <h3 className='head-text'>Thank you for getting in touch!</h3>
      </div>)}
    </>
  );
};

export default AppWrap(MotionWrap(Footer, 'app__footer'), CONTACT_LINK, 'app__whitebg');
