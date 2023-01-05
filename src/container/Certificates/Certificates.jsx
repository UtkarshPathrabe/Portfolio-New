import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

import './Certificates.scss';
import { CERTIFICATES_LINK } from '../../constants';

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);
  const [educationList, setEducationList] = useState([]);
  const [testScores, setTestScores] = useState([]);

  useEffect(() => {
    const certificatesQuery = '*[_type == "certificates"] | order(issueDate desc)';
    client.fetch(certificatesQuery)
      .then((data) => {
        setCertificates(data);
      });
    const educationQuery = '*[_type == "education"] | order(year desc)';
    client.fetch(educationQuery)
      .then((data) => {
        setEducationList(data);
      });
    const testScoresQuery = '*[_type == "testScore"] | order(rank asc)';
    client.fetch(testScoresQuery)
      .then((data) => {
        setTestScores(data);
      });
  }, []);

  console.log({ certificates, educationList, testScores });

  return (
    <>
      <h2 className='head-text'>Education & Certifications</h2>
      <div className='app__certificate-container'>
        <div className='app__certificate-left-container'>
          <motion.div className='app__certificate-education'>
            { educationList?.map((education) => (
              <motion.div
                className='app__certificate-education-item'
                key={ education.year }
              >
                <div className='app__certificate-education-img-container'>
                  <img className='app__certificate-education-img' alt={education.year} src={urlFor(education.imgUrl)} />
                </div>
                <motion.div
                  className='app__certificate-education-details'
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: [1, 1.05] }}
                >
                  <h4 className='bold-text'>{education.timeLine} [{education.score}]</h4>
                  <p className='p-text'>{education.description}</p>
                  <p className='p-text'>{education.board}</p>
                </motion.div>
              </motion.div>
            )) }
          </motion.div>
          <div className='app__certificate-testscore-container app__flex'>
            { testScores?.map((testScore) => (
              <motion.div
                className='app__certificate-testscore'
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, type: 'tween' }}
                whileHover={{ scale: [1, 1.05] }}
                key={testScore.title}
              >
                <h4 className='bold-text'>{testScore.title}</h4>
                <p className='p-text'>{testScore.score}</p>
              </motion.div>
            )) }
          </div>
        </div>
        <motion.div className='app__certificate-right-container'>
          { certificates?.map((certificate) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.2 }}
              whileHover={{ scale: [1, 0.97] }}
              className='app__certificate-certificate'
              key={ certificate.name }
            >
              <a href={certificate.certificateUrl} target='_blank' rel='noreferrer'>
                <h4 className='bold-text'>{certificate.name}</h4>
                <div className='app__certificate-certificate-details-container'>
                  <div className='app__certificate-certificate-details'>
                    <p className='p-text'>{certificate.organization}</p>
                    <p className='p-text'>Issue Date: {certificate.issueDate}</p>
                    { (certificate.certificateId) ? <p className='p-text'>ID: {certificate.certificateId}</p> : null }
                  </div>
                  <img src={urlFor(certificate.imgUrl)} alt={certificate.organization} className='app__certificate-certificate-img' />
                </div>
              </a>
            </motion.div>
          )) }
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Certificates, 'app__certificate'), CERTIFICATES_LINK, 'app__primarybg');
