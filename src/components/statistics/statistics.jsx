import React from 'react';
import { Statisticlist } from './statisticList';
import { StatisticTitle } from './statisticTitle';
import data from '../statistics/data.json';
import { UserStatDiv } from './statistics.style';
import Box from '../profile/Box';

export const Statistic = ({ stats }) => (
         <Box
           bg="backGround"
           ml="2"
           mr="2"
           width="100%"
           display="flex"
         >
           <UserStatDiv>
             <StatisticTitle title="Upload stats" stats={data}></StatisticTitle>
             <Statisticlist stats={data}></Statisticlist>
           </UserStatDiv>
         </Box>
       );
