import React, { Component } from 'react';
import Box from '../profile/Box';
import { Buttons } from './buttons';

class Counter extends Component {
  static defaultProps = {
    initirialValue: 5,
    step: 1,
  };

  state = {
    value: this.props.initirialValue,
  };

  hendleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  hendleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    const { step } = this.props;

    return (
      <Box bg="backGround" ml="2" mr="2" width="100%" display="flex">
        <div>
          <span>{this.state.value}</span>
          <br />
          <Buttons
            onIncrement={this.hendleIncrement}
            onDecrement={this.hendleDecrement}
            onStep={step}
          />
        </div>
      </Box>
    );
  }
}

export default Counter;