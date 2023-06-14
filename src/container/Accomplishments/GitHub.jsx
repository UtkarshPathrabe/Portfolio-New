import { motion } from "framer-motion";

import './Accomplishments.scss';

const GitHub = () => {
  return (<div className='app__accomplishments-content_container'>
    <div className="app__accomplishments-github-details-stats-chart">
      <motion.img
        whileHover={{ scale: [1, 1.05] }}
        transition={{ duration: 0.25 }}
        src='https://raw.githubusercontent.com/UtkarshPathrabe/UtkarshPathrabe/main/profile-3d-contrib/profile-south-season-animate.svg'
        alt='github_stats_chart'
        loading='lazy'
      />
    </div>
    <div className="app__accomplishments-github-details-stats-chart">
      <motion.img
        whileHover={{ scale: [1, 1.05] }}
        transition={{ duration: 0.25 }}
        src='https://github-profile-trophy.vercel.app/?username=utkarshpathrabe&theme=transparent&column=6&margin-w=2&margin-h=2&no-bg=true&no-frame=true&rank=-C,-?'
        alt='github_stats'
        loading='lazy'
      />
    </div>
    <div className="app__accomplishments-github-details-stats-chart_container">
      <motion.img
        whileHover={{ scale: [1, 1.05] }}
        transition={{ duration: 0.25 }}
        src='https://github-readme-stats.vercel.app/api?username=UtkarshPathrabe&show_icons=true&theme=transparent&border_radius=10px&count_private=true'
        alt='github_stats'
        loading='lazy'
      />
      <motion.img
        whileHover={{ scale: [1, 1.05] }}
        transition={{ duration: 0.25 }}
        src='https://github-readme-stats.vercel.app/api/top-langs/?username=UtkarshPathrabe&theme=transparent&border_radius=10px&layout=compact&langs_count=10'
        alt='github_stats'
        loading='lazy'
      />
    </div>
  </div>);
};

export default GitHub;
