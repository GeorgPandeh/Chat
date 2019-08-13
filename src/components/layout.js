import React from 'react';
import Header from './Header';
import { Layout } from 'antd';

const { Footer } = Layout;
const Layer = ({ children }) => (
  <div>
    <Layout className="layout">
      <Header/>
      <main>{children}</main>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2019 Created by Georg Pandeh Fumani</Footer>
    </Layout>
  </div>
);

export default Layer;