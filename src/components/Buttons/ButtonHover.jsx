import React from 'react';
import { ButtonHover, ButtonHoverBox } from './Button.styled';

const ButtonHovers = ({ title }) => (
  <ButtonHover>
    <ButtonHoverBox>{title}</ButtonHoverBox>
  </ButtonHover>
);

export default ButtonHovers;
