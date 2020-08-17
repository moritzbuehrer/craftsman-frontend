import React from 'react';
import { Row, Col, PageHeader, Button, Statistic, Tag, Descriptions, Tabs } from 'antd';

const { TabPane } = Tabs;

class Project extends React.Component {

    render() {
        return (
            <div>
                <PageHeader
                    onBack={() => window.history.back()}
                    title="Kernsanierung"
                    tags={<Tag color="blue">In Progress</Tag>}
                    subTitle="2020-03-0001"
                    extra={[
                        <Button key="1" type="primary">
                            Add Work
                    </Button>
                    ]}
                >

                    <Row>
                        <Col span={4}>
                            IMAGE
                    </Col>
                        <Col span={16}>
                            <Descriptions size="small" column={3}>
                                <Descriptions.Item label="Contact Person">Marc-Robin Dück</Descriptions.Item>
                                <Descriptions.Item label="Start Date">2017-01-10</Descriptions.Item>
                                <Descriptions.Item label="Effective Time">2017-10-10</Descriptions.Item>
                            </Descriptions>
                        </Col>
                        <Col span={4}>
                            <Statistic title="Total working hours" suffix="h" value={330} />
                        </Col>
                    </Row>
                </PageHeader>

                <Tabs defaultActiveKey="1">
                    <TabPane tab="General Information" key="1">
                        Content of Tab Pane 1
                </TabPane>
                    <TabPane tab="Working hours" key="2">
                        Content of Tab Pane 2
                </TabPane>
                    <TabPane tab="Customer" key="3">
                        Content of Tab Pane 3
                </TabPane>
                <TabPane tab="Notes" key="4">
                        Content of Tab Pane 4
                </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default Project;



