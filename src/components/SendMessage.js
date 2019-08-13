import React, { Component } from 'react';
import { Button } from 'antd';
const socket = new WebSocket('ws://st-chat.shas.tel');

class SendMessage extends Component {
  constructor() {
    super();
    this.message = {
      from: '',
      message: '',
    }
  }

  send = () => {
    const nickName = JSON.parse(localStorage.getItem('nickName'));
    if (nickName) {
      this.message.from = nickName;
    } else {
      this.message.from = 'anonymus';
    }

    const text = document.getElementsByClassName('text-of-message')[0];
    this.message.message = text.value;
    socket.send(JSON.stringify(this.message));
  }

  render() {
    return (
      <Button onClick={this.send} type="primary">Send</Button>
    )
  }
}

export default SendMessage;