import React from 'react';
import { Layout, Spin } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



import SiderMenu from './components/SiderMenu';
import AppHeader from './components/AppHeader';
import Customer from './pages/Customer/Customer';
import Project from './pages/Project/Project';
import ProjectList from './pages/Project/ProjectList';
import Dashboard from './pages/Dashboard';
import CustomerList from './pages/Customer/CustomerList';

import 'antd/dist/antd.css';
import './App.css';
import { connect } from 'react-redux';



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
              {this.props.loading ? <Spin size="large" className="spinner" /> : null}
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/customer" component={CustomerList} />
                <Route exact path="/customer/:id" component={Customer} />
                <Route exact path="/project" component={ProjectList} />
                <Route exact path="/project/:id" component={Project} />
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

const mapStateToProps = (state) => ({
  loading: state.general.loading
});

export default connect(mapStateToProps)(App);
