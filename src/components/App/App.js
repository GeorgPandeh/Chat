import React, { Component } from 'react';
import { connect } from 'react-redux'
import { messagesAction } from '../../actions/messagesAction';
import { socketAction } from '../../actions/socketAction';
import { Input, Layout, Row, Col } from 'antd';
import SendMessage from '../SendMessage';
import Messages from '../Messages/Messages';
import Layer from '../layout';

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

  componentDidMount() {
    this.startSocket();
  }

  render() {
    const { Content } = Layout;
    const { TextArea } = Input;

    return (
      <div>
        <Layer>
          <Content className='content'>
            <div className='content-wrapper'>
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
            </div>
          </Content>
        </Layer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    messages: state.messages
  })
}
const mapDispatchToProps = dispatch => ({
  getMessages: (data) => dispatch(messagesAction(data)),
  getSocket: (socket) => dispatch(socketAction(socket))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
