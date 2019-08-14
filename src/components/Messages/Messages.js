import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Divider, Row, Col } from 'antd';
import moment from 'moment';

import 'moment/locale/ru'
import './messages.css';
class Messages extends Component {

  messageRender = (item) => {
    const nickName = JSON.parse(localStorage.getItem('nickName'));
    let id = item.id;
    if (item.from === nickName) {
      id = 'personal-message';
    }
    const time = moment(item.time).fromNow();
    return (
      <div id={id} key={item.id}>
        <Row className='message-block'>
          <Row>
            <Col className='author'>
              {item.from}
            </Col>
            <Col className='time'>
              {time}
            </Col>
          </Row>
          <Row
            style={{
              maxWidth: '55%',
              display: 'inline-block'
            }}>
            <Col className='message'>
              {item.message}
            </Col>
          </Row>
        </Row>
        <Divider />
      </div>
    );
  }

  render() {
    moment.locale('ru');
    const { messages } = this.props;
    return (
      <div className='messages'>
        <Divider />
        {messages.map(this.messageRender)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    messages: state.messages,
  }
}

export default connect(mapStateToProps)(Messages);