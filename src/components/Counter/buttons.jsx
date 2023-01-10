import React from 'react';

export const Buttons = ({ onIncrement, onDecrement, onStep }) => (
  <div>
    <button type="button" onClick={onIncrement}>
      Increment by +{onStep}
    </button>
    <button type="button" onClick={onDecrement}>
      Decrement by -{onStep}
    </button>
  </div>
);
