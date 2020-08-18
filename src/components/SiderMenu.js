import React from 'react';
import { Typography, Menu } from 'antd';
import { Link } from "react-router-dom";
import './SiderMenu.css'

const { Title } = Typography;

class SiderMenu extends React.Component {

    render() {
        return (
            <div className="sider-menu">
                <div className="sider-header-logo">
                    <Link to="/">
                        <Title id="sider-header-title" level={2}>Craftsman</Title>
                    </Link>
                </div>

                <Menu theme="dark" defaultSelectedKeys={['1']} defaultOpenKeys={['1']}>
                    <Menu.Item key="1">
                        <Link to="/">Dashboard</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/customer">Customers</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/project">Projects</Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link to="/employee">Employees</Link>
                    </Menu.Item>
                </Menu>

            </div>


        )
    }
}

export default SiderMenu;