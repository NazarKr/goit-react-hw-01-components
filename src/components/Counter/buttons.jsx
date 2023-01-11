import React from 'react';

export const Buttons = ({ onIncrement, onDecrement, onStep }) => (
  <>
    <button type="button" onClick={onIncrement}>
      Increment by +{onStep}
    </button>
    <button type="button" onClick={onDecrement}>
      Decrement by -{onStep}
    </button>
  </>
);
