import React from 'react';
import { Link } from 'react-router-dom';
import { Table, PageHeader, Button } from 'antd';
import { connect } from 'react-redux';
import { toggleNewCustomerModal, getAllCustomers } from '../../actions/customer';
import EmployeeModal from './../../components/EmployeeModal/EmployeeModal';
import { toggleNewEmployeeModal, getAllEmployees } from './../../actions/employee';

const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text, record, index) => <Link to={`/employee/${record.id}`}>{text}</Link>
    },
    {
        title: 'Vorname',
        dataIndex: 'firstName',
        key: 'firstName',
    },
    {
        title: 'Adresse',
        dataIndex: 'street',
        key: 'street',
    },
    {
        title: 'Telefonnummer',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    }
];

class EmployeeList extends React.Component {
    
    componentDidMount() {
        this.props.dispatch(getAllEmployees());
    }

    onNewCustomer = () => {
        this.props.dispatch(toggleNewEmployeeModal())
    }

    render() {
        return (
            <div>
                <EmployeeModal/>
                <PageHeader
                    onBack={() => window.history.back()}
                    title="Mitarbeiter"
                    extra={
                        <Button type="primary" onClick={this.onNewCustomer}>
                            Hinzufügen
                        </Button>
                    }
                    style={{ padding: '16px 0px' }}
                />
                <Table columns={columns} dataSource={this.props.employees} />
            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    employees: state.employee.employees
});

export default connect(mapStateToProps, null)(EmployeeList);