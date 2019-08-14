import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Input, Row, Col } from 'antd';

import SendMessage from '../SendMessage';
import Messages from '../Messages/Messages';
import Layer from '../layout/layout.js';
import { messagesAction } from '../../actions/messagesAction';
import { socketAction } from '../../actions/socketAction';
import './app.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
    }
    this.nickName = '';
  }

  startSocket = () => {
    const socket = new WebSocket('wss://wssproxy.herokuapp.com'); // ws://st-chat.shas.tel
    this.props.getSocket(socket);

    socket.onopen = () => {
      const offlineMessages = JSON.parse(localStorage.getItem('offlineMessages'));
      if (offlineMessages && offlineMessages.length > 0) {
        offlineMessages.map((item) => socket.send(JSON.stringify(item)));
        localStorage.removeItem('offlineMessages');
      }
      console.log('WebSocket Client Connected');
    };

    socket.onmessage = ({ data }) => {
      this.props.getMessages(data);
    };

    socket.onclose = () => {
      console.log('close');
      setTimeout(() => {
        this.startSocket();
      }, 1000);
    };
  }

  componentWillUnmount() {
    alert('Chat is offline, refresh page, please.');
  }

  componentDidMount() {
    this.startSocket();
  }

  render() {
    const { TextArea } = Input;

    return (
      <div>
        <Layer>
          <Messages />
          <Row gutter={24} className='form'>
            <Col span={18}>
              <TextArea
                className='text-of-message'
                placeholder="input you message"
                autosize={{ minRows: 1, maxRows: 6 }}
              />
            </Col>
            <Col span={6}>
              <SendMessage />
            </Col>
          </Row>
        </Layer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return (
    state
  )
}
const mapDispatchToProps = dispatch => ({
  getMessages: (data) => dispatch(messagesAction(data)),
  getSocket: (socket) => dispatch(socketAction(socket))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
