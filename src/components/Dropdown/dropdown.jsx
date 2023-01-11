import React, { Component } from 'react';
import Box from '../profile/Box';
import { DropdownDiv, DropdownMenu } from './dropdown.styled';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }))
  };

  // show = () => {
  //   this.setState({ visible: true });
  // };

  // hide = () => {
  //   this.setState({ visible: false });
  // };

  render() {
const { visible } = this.state;

    return (
      <Box bg="backGround" ml="2" mr="2" width="100%" display="flex">
        <DropdownDiv>
          <button
            type="button"
            className="Dropdown__toggle"
            onClick={this.toggle}
          >
            {visible ? 'Сховати' : 'Показати'}
          </button>

          {visible && <DropdownMenu>Выпадающее меню</DropdownMenu>}
        </DropdownDiv>
      </Box>
    );
  }
}

export default Dropdown;