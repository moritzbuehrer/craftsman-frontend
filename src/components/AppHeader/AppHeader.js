import React from 'react';
import { Avatar, Popover, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import './AppHeader.css'
import { Link } from 'react-router-dom';

const text = <span>Title</span>;
const content = (
    <div>
        <p>
            <Link to={'/support'}>
                Hilfe & Support
            </Link>
        </p>
        <p>
            <Link to={'/settings'}>
                Einstellungen
            </Link>
        </p>
        <p>
            <Button type="primary">
                Logout
            </Button>
        </p>
    </div>
);

class AppHeader extends React.Component {

    render() {
        return (
            <div className="header-avatar">
                <Popover placement="bottomRight" content={content} trigger="hover">
                    <Link to={'/profile'}>
                        <Avatar size="large" icon={<UserOutlined />} />
                    </Link>
                </Popover>
            </div>
        );
    }
}

export default AppHeader;