import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux'

// ws://st-chat.shas.tel
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
    this.props.socket.send(JSON.stringify(this.message));
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