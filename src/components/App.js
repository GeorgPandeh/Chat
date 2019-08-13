import React, { Component } from 'react';
import { connect } from 'react-redux'
import { messagesAction } from '../actions/messagesAction';
import { Input, Layout, Row, Col } from 'antd';
import SendMessage from './SendMessage';
import Messages from './Messages/Messages';
import Layer from './layout';


class App extends Component {
  constructor() {
    super();
    this.state = {
    }
    this.nickName = '';
  }
  
  // function connect() {
  //   var ws = new WebSocket('ws://localhost:8080');
  //   ws.onopen = function() {
  //     console.log('open')
  //   };
  
  //   ws.onmessage = function(e) {
  //     console.log('Message:', e.data);
  //   };
  
  //   ws.onclose = function(e) {
  //     console.log('Socket is closed. Reconnect will be attempted in 1 second.', e.reason);
  //     setTimeout(function() {
  //       connect();
  //     }, 1000);
  //   };
  
  //   ws.onerror = function(err) {
  //     console.error('Socket encountered error: ', err.message, 'Closing socket');
  //     ws.close();
  //   };
  // }
  
  // connect();

  startSocket = () => {
    const socket = new WebSocket('ws://st-chat.shas.tel');
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
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
