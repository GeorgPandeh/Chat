import React from 'react';
import { Layout } from 'antd';

import Header from '../Header';
import './layout.css';

const { Footer } = Layout;
const { Content } = Layout;

const Layer = ({ children }) => (
  <div>
    <Layout className="layout">
      <Header />
      <Content className='content'>
        <div className='content-wrapper'>
          <main>{children}</main>
        </div>
      </Content>
      <Footer className='footer'>Ant Design ©2019 Created by Georg Pandeh Fumani</Footer>
    </Layout>
  </div >
);

export default Layer;