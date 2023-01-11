import React, { Component } from 'react';
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
      <DropdownDiv>
        <button
          type="button"
          className="Dropdown__toggle"
          onClick={this.toggle}>
          {visible ? 'Сховати' : 'Показати'}
        </button>


        {visible && (<DropdownMenu>Выпадающее меню</DropdownMenu>)}
      </DropdownDiv>
    );
  }
}

export default Dropdown;