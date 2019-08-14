import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux'

class SendMessage extends Component {
  constructor() {
    super();
    this.message = {
      from: '',
      message: '',
    }
    this.offlineMessages = [];
  }

  send = () => {
    const { socket } = this.props;
    const isReady = socket.readyState;
    const nickName = JSON.parse(localStorage.getItem('nickName'));
    const text = document.getElementsByClassName('text-of-message')[0];

    if (nickName) {
      this.message.from = nickName;
    } else {
      this.message.from = 'anonymus';
    }

    this.message.message = text.value;

    if (isReady === 3 || isReady === 0) {
      this.offlineMessages.push({ ...this.message });
      localStorage.setItem('offlineMessages', JSON.stringify(this.offlineMessages));
    }

    if (isReady === 1) {
      socket.send(JSON.stringify(this.message));
      text.value = '';
    }
  }

  render() {
    return (
      <Button onClick={this.send} type="primary">Send</Button>
    )
  }
}

const mapStateToProps = state => {
  return {
    socket: state.socket
  }
}

export default connect(mapStateToProps)(SendMessage);