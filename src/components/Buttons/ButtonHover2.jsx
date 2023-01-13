import React from 'react';
// import { ButtonHover, ButtonHoverBox } from './Button.styled';

const ButtonHover2 = ({ title }) => (
  <button className={converted}>
    <span>Hover me</span>
  </button>
);

export default ButtonHover2;


const converted = {
  button: {
    position: 'relative',
    margin: '0',
    padding: '0.8em 1em',
    outline: 'none',
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    border: 'none',
    textTransform: 'uppercase',
    backgroundColor: '#333',
    borderRadius: '10px',
    color: '#fff',
    fontWeight: 300,
    fontSize: '18px',
    fontFamily: 'inherit',
    zIndex: 0,
    overflow: 'hidden',
    transition: 'all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1)',
  },
  'button:hover': { animation: 'sh0 0.5s ease-in-out both' },
  '@keyframes sh0': {
    '0%': { transform: 'rotate(0deg) translate3d(0, 0, 0)' },
    '25%': { transform: 'rotate(7deg) translate3d(0, 0, 0)' },
    '50%': { transform: 'rotate(-7deg) translate3d(0, 0, 0)' },
    '75%': { transform: 'rotate(1deg) translate3d(0, 0, 0)' },
    '100%': { transform: 'rotate(0deg) translate3d(0, 0, 0)' },
  },
  'button:hover span': {
    animation: 'storm 0.7s ease-in-out both',
    animationDelay: '0.06s',
  },
  'button::before,\nbutton::after': {
    content: "''",
    position: 'absolute',
    right: '0',
    bottom: '0',
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    background: '#fff',
    opacity: 0,
    transition:
      'transform 0.15s cubic-bezier(0.02, 0.01, 0.47, 1), opacity 0.15s cubic-bezier(0.02, 0.01, 0.47, 1)',
    zIndex: -1,
    transform: 'translate(100%, -25%) translate3d(0, 0, 0)',
  },
  'button:hover::before,\nbutton:hover::after': {
    opacity: 0.15,
    transition:
      'transform 0.2s cubic-bezier(0.02, 0.01, 0.47, 1), opacity 0.2s cubic-bezier(0.02, 0.01, 0.47, 1)',
  },
  'button:hover::before': { transform: 'translate3d(50%, 0, 0) scale(0.9)' },
  'button:hover::after': { transform: 'translate(50%, 0) scale(1.1)' },
};
