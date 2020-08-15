import React from 'react';
import { Layout } from 'antd';
import SiderMenu from './component/SiderMenu';
import AppHeader from './component/AppHeader';

import 'antd/dist/antd.css';
import './App.css';

const { Header, Footer, Sider, Content } = Layout;

class App extends React.Component {

  render() {
    return (
      <Layout>
        <Sider className="sider">
          <SiderMenu />
        </Sider>
        <Layout>
          <Header className="header">
            <AppHeader/>
          </Header>
          <Content className="content">
            CONTENT
          </Content>
          <Footer className="footer">
            Craftsman @ 2020 Created by BuehrerDueck
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
