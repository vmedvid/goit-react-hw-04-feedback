import PropTypes from 'prop-types';
import { StatisticsInfo } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <>
    <StatisticsInfo>Good: {good}</StatisticsInfo>
    <StatisticsInfo>Neutral: {neutral}</StatisticsInfo>
    <StatisticsInfo>Bad: {bad}</StatisticsInfo>
    <StatisticsInfo>Total: {total}</StatisticsInfo>
    <StatisticsInfo>
      Positive feedback: {positivePercentage ? positivePercentage : '0'}%
    </StatisticsInfo>
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
