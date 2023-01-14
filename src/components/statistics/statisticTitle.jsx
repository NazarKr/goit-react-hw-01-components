import React from 'react';
import PropTypes from 'prop-types';
import {UserStatTitle} from './statistics.style'


export const StatisticTitle = ({ title }) => (
    
        <UserStatTitle>{title}</UserStatTitle>
    
);

StatisticTitle.propTypes = {
    title: PropTypes.string,
}