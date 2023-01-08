import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import useSWR from 'swr';
import { BiErrorCircle } from 'react-icons/bi';
import { Bars } from 'react-loading-icons';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { SERVER_BASE_URL, fetcher, chartStyles } from '../../constants';

import './Accomplishments.scss';

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
        <Bars stroke='#6b7688' fill='#6b7688' />
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
        <Bars stroke='#6b7688' fill='#6b7688' />
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

const HackerRank = () => {
  return (<div className='app__accomplishments-content_container'>
    <Submissions />
    <Scores />
  </div>);
};

export default HackerRank;
