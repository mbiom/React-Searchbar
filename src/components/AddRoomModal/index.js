import React, { Component } from 'react';
import Modal  from '../Modal';
import Button   from '../Button';
import TextInput from '../TextInput';
import './style.less';

const rooms = {
  one:   false,
  two:   false,
  three: false,
  four:  false
};

class AddRoomModal extends Component {
  static initialState = {
    newRoomName: ''
  };

  constructor() {
    super();

    this.state = { ...AddRoomModal.initialState };
  }

  handleChange(text) {
    this.setState({
      newRoomName: text
    });
  }

  save() {
    if (!this.state.newRoomName) {
      return;
    }
    this.props.onSave(this.state.newRoomName);
    this.props.onClose();
    this.setState(AddRoomModal.initialState);
  }

  render() {
    const { visible, onClose } = this.props;
    return (
      <Modal
        visible={visible}
        onClose={onClose}
      >
        <div className="AddStudentModal">
          <div className="Modal__header">
            <span className="Modal__header-title">
              Add Room
            </span>
          </div>

          <div className="Modal__window-container">
            <div className="AddStudentModal__list">
              <TextInput
                value={this.state.newRoomName}
                placeholder="ROOM NAME"
                onChange={e => ::this.handleChange(e.target.value)}
              />
            </div>
          </div>

          <Button onClick={::this.save} className="Modal__submit" label="Save Room" />
        </div>
      </Modal>
    );
  }
}

export default AddRoomModal;
