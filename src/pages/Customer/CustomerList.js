import React from 'react';
import { Link } from 'react-router-dom';
import { Table, PageHeader, Button } from 'antd';
import { connect } from 'react-redux';
import { toggleNewCustomerModal, getAllCustomers } from '../../actions/customer';
import CustomerModal from '../../components/CustomerModal/CustomerModal';

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
        render: (text, record, index) => <Link to={`/customer/${record.id}`}>{text}</Link>
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

class CustomerList extends React.Component {
    
    componentDidMount() {
        this.props.dispatch(getAllCustomers());
    }

    onNewCustomer = () => {
        this.props.dispatch(toggleNewCustomerModal())
    }

    render() {
        return (
            <div>
                <CustomerModal/>
                <PageHeader
                    onBack={() => window.history.back()}
                    title="Kunden"
                    extra={
                        <Button type="primary" onClick={this.onNewCustomer}>
                            Hinzufügen
                        </Button>
                    }
                    style={{ padding: '16px 0px' }}
                />
                <Table columns={columns} dataSource={this.props.customers} />
            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    customers: state.customer.customers
});

export default connect(mapStateToProps, null)(CustomerList);