import React from 'react';
import { Typography, Menu} from 'antd';
import './SiderMenu.css'

const { Title } = Typography;

class SiderMenu extends React.Component {

    render() {
        return (
            <div className="sider-menu">
                <div className="sider-header-logo">
                    <Title id="sider-header-title" level={2}>Craftsman</Title>
                </div>
                
                <Menu theme="dark" defaultSelectedKeys={['1']} defaultOpenKeys={['1']}>
                    <Menu.Item key="1">
                        Dashboard
                    </Menu.Item>
                    <Menu.Item key="2">
                        Customers
                    </Menu.Item>
                    <Menu.Item key="3">
                        Projects
                    </Menu.Item>
                </Menu>

            </div>


        )
    }
}

export default SiderMenu;