import React from 'react';
import { Row, Col, PageHeader, Button, Statistic, Tag, Descriptions, Tabs } from 'antd';

import projectImage from './../images/project_image.jpg';

import './Project.css'
import ProjectGeneralInfo from '../components/ProjectGeneralInfo';

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
                    extra={
                        <Button type="primary">
                            Add Workin Hours
                        </Button>
                    }
                >

                    <Row>
                        <Col span={4}>
                            <img src={projectImage} className="project-image" />
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
                        <ProjectGeneralInfo/>
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



