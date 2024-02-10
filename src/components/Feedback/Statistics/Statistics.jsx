import React from 'react';
import PropTypes from 'prop-types';
import {
  StatisticsList,
  StatisticsItem,
  StatisticsSpan,
} from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <StatisticsList>
    <StatisticsItem>
      Good: <StatisticsSpan>{good}</StatisticsSpan>
    </StatisticsItem>
    <StatisticsItem>
      Neutral: <StatisticsSpan>{neutral}</StatisticsSpan>
    </StatisticsItem>
    <StatisticsItem>
      Bad: <StatisticsSpan>{bad}</StatisticsSpan>
    </StatisticsItem>
    <StatisticsItem>
      Total: <StatisticsSpan>{total}</StatisticsSpan>
    </StatisticsItem>
    <StatisticsItem>
      Positive feedback: <StatisticsSpan>{positivePercentage}%</StatisticsSpan>
    </StatisticsItem>
  </StatisticsList>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
