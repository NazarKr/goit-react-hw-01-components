import React from 'react';
import { StatisticItem } from './statisticItem';
import PropTypes from 'prop-types';
import { UserStatUl } from './statistics.style';


export const Statisticlist = ({ stats }) => {
  return (
    <UserStatUl>
      {stats.map(({ id, label, percentage }) => (
        <StatisticItem key={id} label={label} percentage={percentage} />
      ))}
    </UserStatUl>
  );
};

Statisticlist.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
