import React from 'react';
import PropTypes from 'prop-types';
import { UserStarLi, UserStatLabel, UserStatPercentage } from './statistics.style';


export const StatisticItem = ({ label, percentage }) => {
  return (
    <UserStarLi>
      <UserStatLabel>{label}</UserStatLabel>
      <UserStatPercentage>{percentage}%</UserStatPercentage>
    </UserStarLi>
  );
};

StatisticItem.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
