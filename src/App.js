import React from 'react';
import { Layout } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import SiderMenu from './component/SiderMenu';
import AppHeader from './component/AppHeader';
import Customer from './page/Customer';
import Project from './page/Project';

import 'antd/dist/antd.css';
import './App.css';

const { Header, Footer, Sider, Content } = Layout;

class App extends React.Component {

  render() {
    return (
      <Router>
        <Layout>
          <Sider className="sider">
            <SiderMenu />
          </Sider>
          <Layout>
            <Header className="header">
              <AppHeader />
            </Header>

            <Content className="content">

              <Switch>
                <Route exact path="/">

                </Route>
                <Route path="/customer">
                  <Customer />
                </Route>
                <Route path="/project">
                  <Project/>
                </Route>
              </Switch>

            </Content>

            <Footer className="footer">
              Craftsman @ 2020 Created by BuehrerDueck
          </Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default App;
