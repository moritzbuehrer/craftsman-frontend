import React from 'react';
import { Row, Col, PageHeader, Button, Statistic, Tag, Descriptions, Tabs, Input, Table, message } from 'antd';
import { connect } from 'react-redux';
import projectImage from '../../images/project_image.jpg';

import './Project.css'
import ProjectGeneralInfo from '../../components/ProjectGeneralInfo';
import ProjectImages from '../../components/ProjectImages';
import TimeTrackModal from '../../components/TimeTrackModal/TimeTrackModal';

import { toggleShowTimeTrackModal } from './../../actions/project';

const { TextArea } = Input;
const { TabPane } = Tabs;

const columnsTimeTrack = [
    {
        title: 'Employee',
        dataIndex: 'employee',
        key: 'employee',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Working Time',
        dataIndex: 'workingTime',
        key: 'workingTime',
        render: text => <div>{text} h</div>,
    },
    {
        title: 'Note',
        dataIndex: 'note',
        key: 'note',
    }
];

const columnsDevices = [
    {
        title: 'Gerät',
        dataIndex: 'device',
        key: 'device',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status'
    }
];

const columnsResponsibleEmpolyees = [
    {
        title: 'Employee',
        dataIndex: 'employee',
        key: 'employee',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Berufsbezeichnung',
        dataIndex: 'workdegree',
        key: 'workdegree'
    }
];

class Project extends React.Component {

    componentDidMount() {
        let projectId = this.props.match.params.id;
    };

    componentWillReceiveProps() {
        if (this.props.message) {
            message.success(this.props.message);
        }
    }

    showModal = () => {
        this.props.dispatch(toggleShowTimeTrackModal());
    };

    aggregateTotalWorkingHours = () => {
        let timeTracks = this.props.currentProject.timeTracks;

        var aggregatedWorkingTimes = 0;
        for (let timeTrack of timeTracks) {
            aggregatedWorkingTimes += timeTrack.workingTime;
        }
        return aggregatedWorkingTimes;
    };

    render() {
        return (
            <div>
                <TimeTrackModal />
                <PageHeader
                    onBack={() => window.history.back()}
                    title={this.props.currentProject.name}
                    tags={<Tag color="blue">In Progress</Tag>}
                    subTitle={this.props.currentProject.id}
                    extra={[
                        <Button type="primary" onClick={() => this.showModal()}>
                            Arbeitszeit erfassen
                        </Button>,
                        <Button onClick={null}>
                            Bearbeiten
                        </Button>
                    ]}
                    style={{ padding: '16px 0px' }}
                >

                    <Row>
                        <Col span={4}>
                            <img src={projectImage} className="project-image" alt="" />
                        </Col>
                        <Col span={16}>
                            <Descriptions size="small" column={3}>
                                <Descriptions.Item label="Kontaktperson">Marc-Robin Dück</Descriptions.Item>
                                <Descriptions.Item label="Geplantes Start Datum">2017-01-10</Descriptions.Item>
                                <Descriptions.Item label="Effektives Start Datum">2017-10-10</Descriptions.Item>
                                <Descriptions.Item label="Telefonnummer">004919879327498</Descriptions.Item>
                            </Descriptions>
                        </Col>
                        <Col span={4}>
                            <Statistic title="Gesamte Arbeitszeit" suffix="h" value={this.aggregateTotalWorkingHours()} />
                        </Col>
                    </Row>
                </PageHeader>

                <Tabs defaultActiveKey="1">
                    <TabPane tab="Allgemeine Informationen" key="1">
                        <ProjectGeneralInfo />
                    </TabPane>
                    <TabPane tab="Verantwortliche Mitarbeiter" key="2">
                        <Table columns={columnsResponsibleEmpolyees} dataSource={null} />
                    </TabPane>
                    <TabPane tab="Zeiterfassung" key="3">
                        <Table columns={columnsTimeTrack} dataSource={this.props.currentProject.timeTracks} />
                    </TabPane>
                    <TabPane tab="Bilder" key="4">
                        <ProjectImages />
                    </TabPane>
                    <TabPane tab="Geräte" key="5">
                        <Table columns={columnsDevices} dataSource={null} />
                    </TabPane>
                    <TabPane tab="Notizen" key="6">
                        <TextArea rows={4} defaultValue={this.props.currentProject.notes} />
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    currentProject: state.project.currentProject,
    message: state.project.message
});

export default connect(mapStateToProps, null)(Project);



