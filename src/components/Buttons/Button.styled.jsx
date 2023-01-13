import styled from 'styled-components';

export const ButtonSubmits = styled.button`
  appearance: none;
  background-color: transparent;
  border: 0.125em solid #1a1a1a;
  border-radius: 0.9375em;
  box-sizing: border-box;
  color: #3b3b3b;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 3.75em;
  min-width: 0;
  outline: none;
  padding: 1em 2.3em;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  will-change: transform;

  &:disabled {
    pointer-events: none;
  }

  &:hover {
    color: #fff;
    background-color: #1a1a1a;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;

//==================

export const ButtonHover = styled.button`
  color: black;
  text-decoration: none;
  cursor: pointer;
  outline: none;
  border: none;
  background: transparent;
`;

export const ButtonHoverBox = styled.span`
  width: 140px;
  height: auto;
  float: left;
  transition: 0.5s linear;
  position: relative;
  display: block;
  overflow: hidden;
  padding: 15px;
  text-align: center;
  margin: 0 5px;
  background: transparent;
  text-transform: uppercase;
  font-weight: 900;

  &:before {
    position: absolute;
    content: '';
    left: 0;
    bottom: 0;
    height: 4px;
    width: 100%;
    border-bottom: 4px solid transparent;
    border-left: 4px solid transparent;
    box-sizing: border-box;
    transform: translateX(100%);
  }

  &:after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    border-top: 4px solid transparent;
    border-right: 4px solid transparent;
    box-sizing: border-box;
    transform: translateX(-100%);
  }

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  }

  &:hover:before {
    border-color: #262626;
    height: 100%;
    transform: translateX(0);
    transition: 0.3s transform linear, 0.3s height linear 0.3s;
  }

  &:hover:after {
    border-color: #262626;
    height: 100%;
    transform: translateX(0);
    transition: 0.3s transform linear, 0.3s height linear 0.5s;
  }
`;
