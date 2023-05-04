import React from 'react';
import { UserStarLi, UserStatLabel, UserStatPercentage } from './statistics.style';

interface StatisticItemProps {
  label: string;
  percentage: number;
}

export const StatisticItem: React.FC<StatisticItemProps> = ({ label, percentage }) => {
  return (
    <UserStarLi>
      <UserStatLabel>{label}</UserStatLabel>
      <UserStatPercentage>{percentage}%</UserStatPercentage>
    </UserStarLi>
  );
};