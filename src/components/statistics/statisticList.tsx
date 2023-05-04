import React from 'react';
import { StatisticItem } from './statisticItem';
import { UserStatUl } from './statistics.style';

interface StatisticlistProps {
  stats: Array<{
    id: string;
    label: string;
    percentage: number;
  }>;
}

export const Statisticlist: React.FC<StatisticlistProps> = ({ stats }) => {
  return (
    <UserStatUl>
      {stats.map(({ id, label, percentage }) => (
        <StatisticItem key={id} label={label} percentage={percentage} />
      ))}
    </UserStatUl>
  );
};
