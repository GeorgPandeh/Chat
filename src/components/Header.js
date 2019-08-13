import React, { Component } from "react";
import { Layout, Input, Row, Col, Button } from 'antd';
import { Select } from 'antd';

class Header extends Component {

  changeNickName = (e) => {
    const nickName = document.getElementsByClassName('input-nickname-field')[0].value;
    localStorage.setItem('nickName', JSON.stringify(nickName));
  }

  handleChange = (value) => {
    console.log(`selected ${value}`);
  }
  render() {
    const { Option } = Select;
    return (
      <div>
        <Layout.Header>
          <Row>
            <Col span={4}>
              <Input className="input-nickname-field" placeholder="nickName"/>
            </Col>
            <Col span={10}>
              <Button type="primary" onClick={this.changeNickName}>Confirm</Button>
              <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </Col>
          </Row>
        </Layout.Header>
      </div>
    )
  }
}

export default Header;