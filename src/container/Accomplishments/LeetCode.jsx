import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import useSWR from 'swr';
import { BiErrorCircle } from 'react-icons/bi';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { Bars } from 'react-loading-icons';
import get from 'lodash/get';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { SERVER_BASE_URL, fetcher, getDateDiffInDays, chartStyles } from '../../constants';

import './Accomplishments.scss';

const LeetCode = () => {
  const { data, error } = useSWR(`${SERVER_BASE_URL}/leetcode`, fetcher);

  const content = useMemo(() => {
    if (error) {
      return (<div className='app__accomplishments-error_container'>
        <BiErrorCircle size='3rem' />
        <p className='bold-text'>Failed to load LeetCode profile data.</p>
      </div>);
    }
    else if (!data) {
      return <div className='app__accomplishments-error_container'>
        <Bars stroke={ chartStyles.color } fill={ chartStyles.color } />
      </div>;
    }
    else {
      const ranking = get(data, ['data', 'matchedUser', 'profile', 'ranking']);
      const badges = get(data, ['data', 'matchedUser', 'badges']);
      const allProblemsSolved = get(data, ['data', 'matchedUser', 'submitStats', 'acSubmissionNum', 0, 'count']);
      const allProblems = get(data, ['data', 'allQuestionsCount', 0, 'count']);
      const easyProblemsSolved = get(data, ['data', 'matchedUser', 'submitStats', 'acSubmissionNum', 1, 'count']);
      const easyProblems = get(data, ['data', 'allQuestionsCount', 1, 'count']);
      const mediumProblemsSolved = get(data, ['data', 'matchedUser', 'submitStats', 'acSubmissionNum', 2, 'count']);
      const mediumProblems = get(data, ['data', 'allQuestionsCount', 2, 'count']);
      const hardProblemsSolved = get(data, ['data', 'matchedUser', 'submitStats', 'acSubmissionNum', 3, 'count']);
      const hardProblems = get(data, ['data', 'allQuestionsCount', 3, 'count']);
      const totalSubmissions = get(data, ['data', 'matchedUser', 'submitStats', 'totalSubmissionNum', 0, 'submissions']);
      const submissionStatsString = get(data, ['data', 'matchedUser', 'submissionCalendar']);
      const submissionStatsObject = JSON.parse(submissionStatsString,);
      const availableSubmissionTimeStamps = Object.keys(submissionStatsObject).sort();
      const submissionStatsData = [];
      for (let i = 0; i < availableSubmissionTimeStamps.length; i++) {
        if (i > 0 && getDateDiffInDays(availableSubmissionTimeStamps[i], availableSubmissionTimeStamps[i - 1]) > 1) {
          const currentDate = new Date(availableSubmissionTimeStamps[i] * 1000);
          currentDate.setDate(currentDate.getDate() - 1);
          submissionStatsData.push([currentDate.getTime(), 0]);
        }
        submissionStatsData.push([
          parseInt(availableSubmissionTimeStamps[i]) * 1000,
          parseInt(submissionStatsObject[availableSubmissionTimeStamps[i]]),
        ]);
        if (i < availableSubmissionTimeStamps.length - 1 && getDateDiffInDays(availableSubmissionTimeStamps[i + 1], availableSubmissionTimeStamps[i]) > 1) {
          const currentDate = new Date(availableSubmissionTimeStamps[i] * 1000);
          currentDate.setDate(currentDate.getDate() + 1);
          submissionStatsData.push([currentDate.getTime(), 0]);
        }
      }
      return (<div className='app__accomplishments-content_container'>
        <div className='app__accomplishments-leetcode-details-text_container'>
          <p className='bold-text'>World Rank:&nbsp;&nbsp;{ranking}</p>
          <p className='bold-text'>Rating:&nbsp;&nbsp;<FaStar /><FaStar /><FaStar /><FaStarHalfAlt /><FaRegStar /></p>
          <p className='bold-text'>Problems Solved:&nbsp;&nbsp;{allProblemsSolved}</p>
        </div>
        <div className='app__accomplishments-leetcode-details-chart_outer_container'>
          <div className='app__accomplishments-leetcode-details-chart_container'>
            <HighchartsReact
              highcharts={Highcharts}
              options={{
                chart: {
                  type: 'column',
                  backgroundColor: chartStyles.backgroundColor,
                },
                title: {
                  text: 'Problems Solved',
                  style: {
                    color: chartStyles.color,
                    fontFamily: chartStyles.fontFamily,
                    fontSize: '18px',
                  },
                },
                xAxis: {
                  categories: ['All', 'Easy', 'Medium', 'Hard'],
                  labels: {
                    style: {
                      color: chartStyles.color,
                      fontFamily: chartStyles.fontFamily,
                      fontSize: '14px',
                    },
                  }
                },
                yAxis: [
                  {
                    min: 0,
                    title: {
                      text: 'Problems',
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
                ],
                legend: {
                  shadow: true,
                  style: {
                    color: chartStyles.color,
                    fontFamily: chartStyles.fontFamily,
                    fontSize: '16px',
                  },
                },
                tooltip: {
                  shared: true,
                  style: {
                    fontFamily: chartStyles.fontFamily,
                    fontSize: '12px',
                  },
                },
                plotOptions: {
                  column: {
                    grouping: false,
                    shadow: false,
                    borderWidth: 0,
                  },
                },
                series: [
                  {
                    name: 'Total',
                    color: chartStyles.fillColor01,
                    data: [
                      allProblems,
                      easyProblems,
                      mediumProblems,
                      hardProblems,
                    ],
                    pointPadding: 0.3,
                    pointPlacement: 0,
                  },
                  {
                    name: 'Solved',
                    color: chartStyles.fillColor02,
                    data: [
                      allProblemsSolved,
                      easyProblemsSolved,
                      mediumProblemsSolved,
                      hardProblemsSolved,
                    ],
                    pointPadding: 0.4,
                    pointPlacement: 0,
                  },
                ],
              }}
            />
          </div>
          <div className='app__accomplishments-leetcode-details-chart_container'>
            <HighchartsReact
              highcharts={Highcharts}
              options={{
                chart: {
                  zoomType: 'x',
                  backgroundColor: chartStyles.backgroundColor,
                },
                title: {
                  text: `${totalSubmissions} Total Submissions`,
                  style: {
                    color: chartStyles.color,
                    fontFamily: chartStyles.fontFamily,
                    fontSize: '18px',
                  },
                },
                subtitle: {
                  text: (document.ontouchstart === undefined)
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
                    data: submissionStatsData,
                    color: chartStyles.fillColor01,
                  },
                ],
              }}
            />
          </div>
        </div>
        <div className='app__accomplishments-leetcode-details-badges_outer_container'>
          <h3 className='bold-text'>LeetCode Badges</h3>
          <div className='app__accomplishments-leetcode-details-badges_container'>
            { badges.map(({ displayName, icon }) => (
              <motion.div
                whileHover={{ scale: [1, 1.05] }}
                transition={{ duration: 0.25 }}
                className='app__accomplishments-leetcode-details-badge'
                key={`${displayName}_${icon}`}
              >
                <img src={(icon && String(icon).startsWith("https://")) ? icon : `https://leetcode.com${icon}`} alt={displayName} loading='lazy' width='100%' height='100%' />
                <p className='p-text'>{displayName}</p>
              </motion.div>
            )) }
          </div>
        </div>
      </div>);
    }
  }, [data, error]);

  return content;
};

export default LeetCode;
