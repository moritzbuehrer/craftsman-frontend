import React from 'react';
import { Table, Button, PageHeader, Tag } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleShowNewProjectModal, getAllProjects } from '../../actions/project';
import ProjectModal from '../../components/ProjectModal/ProjectModal';

const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Projekt',
        dataIndex: 'name',
        key: 'name',
        render: (text, record, index) => <Link to={`/project/${record.id}`}>{text}</Link>
    },
    {
        title: 'Kunde',
        dataIndex: 'customer',
        key: 'customer',
    },
    {
        title: 'Adresse',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: (text) => <Tag color="blue">{text}</Tag>
    }
];

class ProjectList extends React.Component {

    componentDidMount() {
        this.props.dispatch(getAllProjects());
    }

    onNewProject = () => {
        this.props.dispatch(toggleShowNewProjectModal());
    }

    render() {
        return (
            <div>
                <ProjectModal />
                <PageHeader
                    onBack={() => window.history.back()}
                    title="Projekte"
                    extra={
                        <Button type="primary" onClick={this.onNewProject}>
                            Hinzufügen
                        </Button>
                    }
                    style={{ padding: '16px 0px' }}
                />
                <Table columns={columns} dataSource={this.props.projects} />
            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    projects: state.project.projects,
    error: state.general.error
});

export default connect(mapStateToProps, null)(ProjectList);
