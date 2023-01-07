import React, { useMemo } from 'react';
import useSWR from 'swr';
import { BiErrorCircle } from 'react-icons/bi';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { Bars } from 'react-loading-icons';
import get from 'lodash/get';

import { SERVER_BASE_URL, fetcher, getDateDiffInDays } from '../../constants';

import './Accomplishments.scss';

const LeetCode = () => {
  const { data, error } = useSWR(`${SERVER_BASE_URL}/leetcode_data`, fetcher);

  const content = useMemo(() => {
    if (error) {
      return (<div className='app__accomplishments-error_container'>
        <BiErrorCircle size='3rem' />
        <p className='bold-text'>Failed to load LeetCode profile data.</p>
      </div>);
    }
    else if (!data) {
      return <Bars width='5rem' height='4rem' />;
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
          <p className='bold-text'>World Rank: {ranking}</p>
          <p className='bold-text'>Rating: <FaStar /><FaStar /><FaStar /><FaStarHalfAlt /><FaRegStar /></p>
          <p className='bold-text'>Problems Solved: {allProblemsSolved}</p>
        </div>
      </div>);
    }
  }, [data, error]);

  return content;
};

export default LeetCode;
