import React from 'react';
import { Row, Col, PageHeader, Button, Statistic, Tag, Descriptions, Tabs, Input, Table } from 'antd';
import { connect } from 'react-redux';
import projectImage from '../../images/project_image.jpg';

import './Project.css'
import ProjectGeneralInfo from '../../components/ProjectGeneralInfo';
import ProjectImages from '../../components/ProjectImages';
import TimeTrackModal from '../../components/TimeTrackModal/TimeTrackModal';

import { toggleShowTimeTrackModal, getProject } from './../../actions/project';

const { TextArea } = Input;
const { TabPane } = Tabs;

const columnsTimeTrack = [
    {
        title: 'Mitarbeiter',
        dataIndex: 'employee',
        key: 'employee',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Arbeitszeit',
        dataIndex: 'workingTime',
        key: 'workingTime',
        render: text => <div>{text} h</div>,
    },
    {
        title: 'Notiz',
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
        title: 'Mitarbeiter',
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
        this.props.dispatch(getProject(this.props.match.params.id))
    };

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
                    tags={<Tag color="blue">{this.props.currentProject.status}</Tag>}
                    subTitle={this.props.match.params.id}
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
                                <Descriptions.Item label="Kontaktperson">
                                    {/* {this.props.currentProject.contactPerson.name} */}
                                </Descriptions.Item>
                                <Descriptions.Item label="Start Datum">
                                    {/* {this.props.currentProject.startDate} */}
                                </Descriptions.Item>
                                <Descriptions.Item label="Geplantes End Datum">
                                    {/* {this.props.currentProject.plannedEndDate} */}
                                </Descriptions.Item>
                                <Descriptions.Item label="Telefonnummer">
                                    {/* {this.props.currentProject.contactPerson.phone} */}
                                </Descriptions.Item>
                            </Descriptions>
                        </Col>
                        <Col span={4}>
                            <Statistic title="Gesamte Arbeitszeit" suffix="h" value={this.aggregateTotalWorkingHours()} />
                        </Col>
                    </Row>
                </PageHeader>

                <Tabs defaultActiveKey="1">
                    <TabPane tab="Allgemeine Informationen" key="1">
                        {/* <ProjectGeneralInfo /> */}
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
    editMode: state.project.editMode
});

export default connect(mapStateToProps)(Project);



