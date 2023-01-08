import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import useSWR from 'swr';
import { BiErrorCircle } from 'react-icons/bi';
import { FaStar } from 'react-icons/fa';
import { Bars } from 'react-loading-icons';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { SERVER_BASE_URL, fetcher, chartStyles } from '../../constants';

import './Accomplishments.scss';

const badgesImagesURL = new Map();
badgesImagesURL['/domains/data-structures'] = 'https://hrcdn.net/community-frontend/assets/badges/problem-solving-ecaf59a612.svg';
badgesImagesURL['/domains/cpp'] = 'https://hrcdn.net/community-frontend/assets/badges/cpp-739b350881.svg';
badgesImagesURL['/domains/java'] = 'https://hrcdn.net/community-frontend/assets/badges/java-9d05b1f559.svg';
badgesImagesURL['/domains/python'] = 'https://hrcdn.net/community-frontend/assets/badges/python-f70befd824.svg';
badgesImagesURL['/domains/tutorials/30-days-of-code'] = 'https://hrcdn.net/community-frontend/assets/badges/30-days-of-code-a772ae4c2f.svg';
badgesImagesURL['/domains/tutorials/10-days-of-javascript'] = 'https://hrcdn.net/community-frontend/assets/badges/10-days-of-javascript-94ff22d1c9.svg';
badgesImagesURL['/domains/tutorials/10-days-of-statistics'] = 'https://hrcdn.net/community-frontend/assets/badges/10-days-of-statistics-94ff22d1c9.svg';
badgesImagesURL['/domains/sql'] = 'https://hrcdn.net/community-frontend/assets/badges/sql-89e76e7082.svg';
badgesImagesURL['/domains/c'] = 'https://hrcdn.net/community-frontend/assets/badges/c-d1985901e6.svg';

const getLevel = (level) => {
  switch (level) {
    case 3:
      return 'Gold Level';
    case 2:
      return 'Silver Level';
    case 1:
      return 'Bronze Level';
    default:
      return '';
  }
};

const getLevelColor = (level) => {
  switch (level) {
    case 3:
      return '#ffd700';
    case 2:
      return '#c0c0c0';
    case 1:
      return '#cd7f32';
    default:
      return '#FFFFFF';
  }
};

const Submissions = () => {
  const { data, error } = useSWR(`${SERVER_BASE_URL}/hackerrank_submission_histories`, fetcher);

  const content = useMemo(() => {
    if (error) {
      return (<div className='app__accomplishments-error_container'>
        <BiErrorCircle size='3rem' />
        <p className='bold-text'>Failed to load HackerRank submissions data.</p>
      </div>);
    }
    else if (!data) {
      return <div className='app__accomplishments-error_container'>
        <Bars stroke={chartStyles.color} fill={chartStyles.color} />
      </div>;
    }
    else {
      return <div className='app__accomplishments-hackerrank-details-chart_container'>
        <HighchartsReact
          highcharts={Highcharts}
          options={{
            chart: {
              zoomType: 'x',
              backgroundColor: chartStyles.backgroundColor,
            },
            title: {
              text: `HackerRank Submissions`,
              style: {
                color: chartStyles.color,
                fontFamily: chartStyles.fontFamily,
                fontSize: '18px',
              },
            },
            subtitle: {
              text: document.ontouchstart === undefined
                ? 'Click and drag in the plot area to zoom in'
                : 'Pinch the chart to zoom in',
              style: {
                color: chartStyles.subTitleColor,
                fontFamily: chartStyles.fontFamily,
                fontSize: '14px',
              },
            },
            xAxis: {
              type: 'datetime',
              labels: {
                style: {
                  color: chartStyles.color,
                  fontFamily: chartStyles.fontFamily,
                  fontSize: '14px',
                },
              }
            },
            yAxis: {
              title: {
                text: 'Submissions',
                style: {
                  color: chartStyles.color,
                  fontFamily: chartStyles.fontFamily,
                  fontSize: '14px',
                },
              },
              labels: {
                style: {
                  color: chartStyles.color,
                  fontFamily: chartStyles.fontFamily,
                  fontSize: '14px',
                },
              }
            },
            legend: {
              enabled: false,
            },
            series: [
              {
                type: 'area',
                name: 'Problems submitted',
                data: data,
                color: chartStyles.fillColor01,
              },
            ],
          }}
        />
      </div>;
    }
  }, [data, error]);

  return content;
};

const Scores = () => {
  const { data, error } = useSWR(`${SERVER_BASE_URL}/hackerrank_scores`, fetcher);

  const content = useMemo(() => {
    if (error) {
      return (<div className='app__accomplishments-error_container'>
        <BiErrorCircle size='3rem' />
        <p className='bold-text'>Failed to load HackerRank scores data.</p>
      </div>);
    }
    else if (!data) {
      return <div className='app__accomplishments-error_container'>
        <Bars stroke={chartStyles.color} fill={chartStyles.color} />
      </div>;
    }
    else {
      return (<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '2rem' }}>
        <h3 className='bold-text'>HackerRank Scores</h3>
        <div className='app__accomplishments-hackerrank-details-score_outer_container'>
          { data?.map(({ name, score }) => (
            <motion.div
              whileHover={{ scale: [1, 1.08] }}
              transition={{ duration: 0.25 }}
              className='app__accomplishments-hackerrank-details-score_container'
              key={ name }
            >
              <p className='bold-text'>{name}</p>
              <p className='p-text'>{score}</p>
            </motion.div>
          )) }
        </div>
      </div>);
    }
  }, [data, error]);

  return content;
};

const Badges = () => {
  const { data, error } = useSWR(`${SERVER_BASE_URL}/hackerrank_badges`, fetcher);

  const content = useMemo(() => {
    if (error) {
      return (<div className='app__accomplishments-error_container'>
        <BiErrorCircle size='3rem' />
        <p className='bold-text'>Failed to load HackerRank badges data.</p>
      </div>);
    }
    else if (!data) {
      return <div className='app__accomplishments-error_container'>
        <Bars stroke={chartStyles.color} fill={chartStyles.color} />
      </div>;
    }
    else {
      return <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '2rem', marginTop: '2rem' }}>
        <h3 className='bold-text'>HackerRank Badges</h3>
        <div className='app__accomplishments-hackerrank-details-badges_outer_container'>
          {data.models.filter(({ solved, level }) => solved > 0 && level > 0).map(({ url, level, badge_name, current_points, stars, solved, total_challenges }) => (
            <motion.div
              whileHover={{ scale: [1, 1.08] }}
              transition={{ duration: 0.25 }}
              className='app__accomplishments-hackerrank-details-badges_container'
              key={url}
            >
              <img src={badgesImagesURL[url]} alt={url} style={{backgroundColor: getLevelColor(level), padding: '0.5rem', borderRadius: '1rem'}} />
              <h3 className='bold-text'>{badge_name}</h3>
              <p className='p-text'>{getLevel(level)}</p>
              <div>
                {Array.from(Array(stars)).map((_, i) => (<FaStar key={i} color={chartStyles.color} />))}
              </div>
              <p className='p-text'>Earned {current_points} points</p>
              <p className='p-text'>{solved} of {total_challenges} challenges solved</p>
            </motion.div>
          ))}
        </div>
      </div>;
    }
  }, [data, error]);

  return content;
};

const HackerRank = () => {
  return (<div className='app__accomplishments-content_container'>
    <Scores />
    <Submissions />
    <Badges />
  </div>);
};

export default HackerRank;
