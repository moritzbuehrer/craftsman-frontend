import React from 'react';
import { Row, Col, Card, Typography } from 'antd';

const { Title } = Typography;

class Dashboard extends React.Component {

    render() {
        return (
            <div >
                {/* <Title level={2}>Dashboard Overview</Title> */}
                <Row>
                    <Col span={6}>
                        <Card title="Total Income" style={{ margin: '10px', textAlign: "center" }}>
                            <Title level={2}>{3000} €</Title>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card title="Total Working Hours" style={{ margin: '10px', textAlign: "center" }}>
                        <Title level={2}>{500} h</Title>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card title="Open Projects" style={{ margin: '10px', textAlign: "center" }}>
                        <Title level={2}>{9}</Title>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card title="Open Requests" style={{ margin: '10px', textAlign: "center" }}>
                        <Title level={2}>{4}</Title>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Dashboard;