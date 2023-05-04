import React from 'react';
import { Statisticlist } from './statisticList';
import { StatisticTitle } from './statisticTitle';
import data from './data.json';
import { UserStatDiv } from './statistics.style';

interface StatisticProps {
  title?: string;
  // stats?: string;
}

export const Statistic: React.FC<StatisticProps> = ({ title }) => (
  <UserStatDiv>
    {title && <StatisticTitle title={title} />}
    <Statisticlist stats={data}/>
  </UserStatDiv>
);
