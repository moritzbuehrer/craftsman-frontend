import React from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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
        dataIndex: 'age',
        key: 'age',
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
    }
];

class ProjectList extends React.Component{

    render(){
        return(
            <div>
                <Table columns={columns} dataSource={this.props.projects} />
            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    projects: state.project.projects
});

export default connect(mapStateToProps, null)(ProjectList);
