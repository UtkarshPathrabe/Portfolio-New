import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

import './Testimonial.scss';
import { TESTIMONIALS_LINK } from '../../constants';

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const testimonialsQuery = '*[_type == "testimonials"]';
    client.fetch(testimonialsQuery)
      .then((data) => {
        setTestimonials(data);
      });
  }, []);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  const testimonial = testimonials[currentIndex];

  return (
    <>
      { (testimonials.length > 0) ? (<>
        <div className='app__testimonial-item app__flex'>
          <img src={urlFor(testimonial.imgurl)} alt={`${testimonial.name}-testimonial`} />
          <div className='app__testimonial-content'>
            <p className='p-text'>
              {testimonial.feedback}
            </p>
            <div>
              <h4 className='bold-text'>
                {testimonial.name}
              </h4>
              <h5 className='p-text'>
                {testimonial.company}
              </h5>
            </div>
          </div>
        </div>
        <div className='app__testimonial-btns app__flex'>
          <div className='app__flex' onClick={() => handleClick((currentIndex === 0) ? (testimonials.length - 1) : (currentIndex - 1))}>
            <HiChevronLeft />
          </div>
          <div className='app__flex' onClick={() => handleClick((currentIndex === (testimonials.length - 1)) ? 0 : (currentIndex + 1))}>
            <HiChevronRight />
          </div>
        </div>
      </>) : null }
    </>
  );
};

export default AppWrap(MotionWrap(Testimonial, 'app__testimonial'), TESTIMONIALS_LINK, 'app__primarybg');
