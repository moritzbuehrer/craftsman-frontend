import React from 'react';
import { Link } from 'react-router-dom';
import { Table, PageHeader, Button } from 'antd';
import { connect } from 'react-redux';

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

    render() {
        return (
            <div>
                <PageHeader
                    onBack={() => window.history.back()}
                    title="Kunden"
                    extra={
                        <Button type="primary">
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