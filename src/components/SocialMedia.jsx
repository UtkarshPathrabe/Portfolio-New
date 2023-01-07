import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaGithub, FaHackerrank, FaLinkedinIn } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const socialData = [
  {
    Icon: FaLinkedinIn,
    href: 'https://www.linkedin.com/in/utkarshpathrabe/',
    label: 'LinkedIn',
  },
  {
    Icon: FaGithub,
    href: 'https://github.com/UtkarshPathrabe/',
    label: 'Github',
  },
  {
    Icon: SiLeetcode,
    href: 'https://leetcode.com/Utkarsh_Pathrabe/',
    label: 'LeetCode',
  },
  {
    Icon: FaHackerrank,
    href: 'https://www.hackerrank.com/UtkarshPathrabe',
    label: 'HackerRank',
  },
  {
    Icon: BsInstagram,
    href: 'https://www.instagram.com/utkarsh_pathrabe/',
    label: 'Instagram',
  },
  {
    Icon: FaFacebookF,
    href: 'https://www.facebook.com/utkarshpathrabe/',
    label: 'Facebook',
  },
  {
    Icon: BsTwitter,
    href: 'https://twitter.com/UtkarshPathrabe/',
    label: 'Twitter',
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
