import React, { Component } from "react";
import { Layout, Input, Row, Col, Button } from 'antd';

class Header extends Component {

  changeNickName = () => {
    const nickName = document.getElementsByClassName('input-nickname-field')[0].value;
    localStorage.setItem('nickName', JSON.stringify(nickName));
  }

  notifyMe = () => {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }

    if (Notification.permission !== "denied") {
      Notification.requestPermission();
    }
  }

  render() {
    return (
      <div>
        <Layout.Header>
          <Row>
            <Col span={10}>
              <Input className="input-nickname-field" placeholder="nickName" />
            </Col>
            <Col span={10}>
              <Button type="primary" onClick={this.changeNickName}>Confirm</Button>
            </Col>
            <Col span={4}>
              <Button type='primary' onClick={this.notifyMe}>Notify me!</Button>
            </Col>
          </Row>
        </Layout.Header>
      </div>
    )
  }
}

export default Header;