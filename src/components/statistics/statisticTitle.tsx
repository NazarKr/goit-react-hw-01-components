import React from 'react';
import {UserStatTitle} from './statistics.style'

interface StatisticTitleProps {
        title: string;
}

export const StatisticTitle: React.FC<StatisticTitleProps> = ({ title }) => (
        <UserStatTitle>{title}</UserStatTitle>
);
