import React from 'react';
import { Row, Col, PageHeader, Button, Statistic, Tag, Descriptions, Tabs, Input, Table, Modal } from 'antd';

import projectImage from '../../images/project_image.jpg';

import './Project.css'
import ProjectGeneralInfo from '../../components/ProjectGeneralInfo';
import ProjectImages from '../../components/ProjectImages';
import TimeTrackModal from '../../components/TimeTrackModal/TimeTrackModal';

const { TextArea } = Input;
const { TabPane } = Tabs;

const columns = [
    {
        title: 'Employee',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Working Time',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Note',
        dataIndex: 'address',
        key: 'address',
    }
];

const data = [
    {
        key: '1',
        name: 'Marc-Robin',
        age: '1.5h',
        address: 'Example Note'
    },
    {
        key: '2',
        name: 'Moritz',
        age: '2h',
        address: 'Example Note'
    },
    {
        key: '3',
        name: 'Moritz',
        age: '8h',
        address: 'Example Note'
    },
];

class Project extends React.Component {

    state = { visible: false };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <div>
                <Modal
                    title="Add new working time"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>

                <PageHeader
                    onBack={() => window.history.back()}
                    title="Kernsanierung"
                    tags={<Tag color="blue">In Progress</Tag>}
                    subTitle="2020-03-0001"
                    extra={
                        <Button type="primary" onClick={() => this.showModal()}>
                            Add Workin Hours
                        </Button>
                    }
                >

                    <Row>
                        <Col span={4}>
                            <img src={projectImage} className="project-image" alt="" />
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
                        <ProjectGeneralInfo />
                    </TabPane>
                    <TabPane tab="Working hours" key="2">
                        <Table columns={columns} dataSource={data} />
                    </TabPane>
                    <TabPane tab="Images" key="3">
                        <ProjectImages />
                    </TabPane>
                    <TabPane tab="Notes" key="4">
                        <TextArea rows={4} />
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default Project;



