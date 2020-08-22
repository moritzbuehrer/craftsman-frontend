import React from 'react';
import { Row, Col, PageHeader, Button, Statistic, Tag, Descriptions, Tabs, Input, Table, Modal, Form, InputNumber, AutoComplete } from 'antd';
import { connect } from 'react-redux';
import projectImage from '../../images/project_image.jpg';

import './Project.css'
import ProjectGeneralInfo from '../../components/ProjectGeneralInfo';
import ProjectImages from '../../components/ProjectImages';
import TimeTrackModal from '../../components/TimeTrackModal/TimeTrackModal';

import { setWorkingTime } from './../../actions/project';

const { TextArea } = Input;
const { TabPane } = Tabs;

const columns = [
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

const options = [
    { value: 'John Doe' },
    { value: 'Max Mustermann' },
    { value: 'Test User1' },
];

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
};

const tailLayout = {
    wrapperCol: { offset: 6, span: 18 },
};


class Project extends React.Component {

    state = { visible: false };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = formValues => {
        var timeTrack = {
            id: "",
            employee: formValues.employee,
            workingTime: formValues.Duration,
            note: formValues.note
        }
        this.props.dispatch(setWorkingTime(timeTrack))

        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };

    aggregateTotalWorkingHours = () => {

        let timeTracks = this.props.currentProject.timeTracks;
        console.log(timeTracks)

    }


    render() {
        return (
            <div>
                <Modal
                    title="Add new working time"
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    footer={null}
                    destroyOnClose={true}
                >
                    <Form
                        {...layout}
                        name="timeTrackForm"
                        onFinish={this.handleOk}
                        onFinishFailed={() => { }}
                        preserve={false}
                    >
                        <Form.Item
                            label="Employee"
                            name="employee"
                            rules={[{ required: true, message: 'Please specify Employee name' }]}
                        >
                            <AutoComplete
                                options={options}
                                placeholder="Search for employee"
                                filterOption={(inputValue, option) =>
                                    option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                                }
                            />
                        </Form.Item>

                        <Form.Item
                            label="Duration"
                            name="Duration"
                            rules={[{ required: true, message: 'Please set Working Time duration' }, { type: 'number' }]}
                        >
                            <InputNumber min={0} />
                        </Form.Item>

                        <Form.Item
                            label="Note"
                            name="note"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                            <Button style={{ "margin-left": '8px' }} onClick={this.handleCancel}>
                                Cancel
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>

                <PageHeader
                    onBack={() => window.history.back()}
                    title={this.props.currentProject.name}
                    tags={<Tag color="blue">In Progress</Tag>}
                    subTitle={this.props.currentProject.id}
                    extra={
                        <Button type="primary" onClick={() => this.showModal()}>
                            Arbeitszeit erfassen
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
                            <Statistic title="Total working hours" suffix="h" value={this.props.currentProject.totalWorkingHours} />
                        </Col>
                    </Row>
                </PageHeader>

                <Tabs defaultActiveKey="1">
                    <TabPane tab="Allgemeine Informationen" key="1">
                        <ProjectGeneralInfo />
                    </TabPane>
                    <TabPane tab="Verantwortliche Mitarbeiter" key="2">
                        
                    </TabPane>
                    <TabPane tab="Zeiterfassung" key="3">
                        <Table columns={columns} dataSource={this.props.currentProject.timeTracks} />
                    </TabPane>
                    <TabPane tab="Bilder" key="4">
                        <ProjectImages />
                    </TabPane>
                    <TabPane tab="Geräte" key="5">
                        
                    </TabPane>
                    <TabPane tab="Notizen" key="6">
                        <TextArea rows={4} />
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    currentProject: state.project.currentProject
});

export default connect(mapStateToProps, null)(Project);



