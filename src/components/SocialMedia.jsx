import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const socialData = [
  {
    Icon: FaLinkedinIn,
    href: 'https://www.linkedin.com/in/utkarshpathrabe/',
    label: 'linkedin',
  },
  {
    Icon: FaGithub,
    href: 'https://github.com/UtkarshPathrabe/',
    label: 'github',
  },
  {
    Icon: BsInstagram,
    href: 'https://www.instagram.com/utkarsh_pathrabe/',
    label: 'instagram',
  },
  {
    Icon: FaFacebookF,
    href: 'https://www.facebook.com/utkarshpathrabe/',
    label: 'facebook',
  },
  {
    Icon: BsTwitter,
    href: 'https://twitter.com/UtkarshPathrabe/',
    label: 'twitter',
  }
];

const SocialMedia = () => {
  return (
    <div className='app__social'>
      { socialData.map(({ label, Icon, href }) => (<div key={label}>
        <a href={href} target='_blank' rel='noopener noreferrer' aria-label={label}>
          <Icon />
        </a>
      </div>)) }
    </div>
  );
};

export default SocialMedia;
