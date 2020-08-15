import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import './AppHeader.css'

class AppHeader extends React.Component {

    render() {
        return (
            <div className="header-avatar">
                <Avatar size="large" icon={<UserOutlined />} />
            </div>
        );
    }
}

export default AppHeader;