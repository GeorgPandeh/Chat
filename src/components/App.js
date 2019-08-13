import React, { Component } from 'react';
import { connect } from 'react-redux'
import { messagesAction } from '../actions/messagesAction';
import { socketAction } from '../actions/socketAction';
import { Input, Layout, Row, Col } from 'antd';
import SendMessage from './SendMessage';
import Messages from './Messages/Messages';
import Layer from './layout';
// import { socket } from './socket'; 

class App extends Component {
  constructor() {
    super();
    this.state = {
    }
    this.nickName = '';
  }

  startSocket = () => {
    const socket = new WebSocket('wss://wssproxy.herokuapp.com');
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
          <Content style={{ padding: '0 50px', background: '#f5f5f5' }}>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
              <Messages />
              <Row gutter={24} style={{ marginTop: '20px' }}>
                <Col span={20}>
                  <TextArea
                    className='text-of-message'
                    placeholder="input you message"
                    autosize={{ minRows: 1, maxRows: 6 }}
                  />
                </Col>
                <Col span={4}>
                  <SendMessage/>
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
  return (
    state
  )
}
const mapDispatchToProps = dispatch => ({
  getMessages: (data) => dispatch(messagesAction(data)),
  getSocket: (socket) => dispatch(socketAction(socket))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
