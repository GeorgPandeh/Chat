import React, { Component } from 'react';
import { connect } from 'react-redux'
import { messagesAction } from '../actions/messagesAction';

class Socket extends Component {
  constructor() {
    super();
    this.state = {}
  }
  startSocket = (getMessages) => {
    const wss = new WebSocket('wss://wssproxy.herokuapp.com');
    wss.onopen = () => {
        console.log('WebSocket Client Connected');
      };
  
      wss.onmessage = ({ data }) => {
        getMessages(data);
      };
  
      wss.onclose = () => {
        console.log('close');
        setTimeout(() => {
          this.startSocket();
        }, 1000);
      };
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

export default connect(mapStateToProps, mapDispatchToProps)(Socket);