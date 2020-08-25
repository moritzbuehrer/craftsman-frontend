import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Input, List, Button, Spin, Typography, Tabs, Table, PageHeader, Descriptions } from 'antd';
import { fetchCustomers, setCurrentCustomer, toggleCustomerChange } from '../../actions/customer';

import './Customer.css';

import { LoadingOutlined } from '@ant-design/icons';
import customer from './../../reducers/customer';
const { Text } = Typography;
const { TabPane } = Tabs;

const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />;


const columns = [
    {
        title: 'Project Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Description',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    }
];

const data = [
    {
        key: '1',
        name: 'Project 1',
        age: 32,
        address: 'New York No. 1 Lake Park'
    },
    {
        key: '2',
        name: 'Project 2',
        age: 42,
        address: 'London No. 1 Lake Park'
    },
    {
        key: '3',
        name: 'Project 4',
        age: 32,
        address: 'Sidney No. 1 Lake Park'
    },
];


class Customer extends React.Component {

    onListItemClick = (customer) => {
        this.props.dispatch(setCurrentCustomer(customer));
    }

    onChangButtonClick = () => {
        this.props.dispatch(toggleCustomerChange());
    }

    componentDidMount() {
        this.props.dispatch(fetchCustomers());
    }

    render() {
        return (
            <div>
                <PageHeader
                    onBack={() => window.history.back()}
                    title="Test GmbH"
                    subTitle="398276"
                    style={{ padding: '16px 0px' }}
                >

                    <Descriptions size="small" column={3}>
                        <Descriptions.Item label="Name">{this.props.customer.name}</Descriptions.Item>
                        {this.props.customer.firstName ? <Descriptions.Item label="Vorname">{this.props.customer.firstName}</Descriptions.Item> : null}
                        <Descriptions.Item label="Telefonnummer">{this.props.customer.phone}</Descriptions.Item>
                        <Descriptions.Item label="Email">{this.props.customer.email}</Descriptions.Item>
                    </Descriptions>

                </PageHeader>

                <Tabs defaultActiveKey="1">
                    <TabPane tab="Allgemeine Informationen" key="1">

                    </TabPane>
                    <TabPane tab="Offene Projekte" key="2">
                        <Table columns={columns} dataSource={data} />
                    </TabPane>
                    <TabPane tab="Notizen" key="3">

                    </TabPane>
                </Tabs>


            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    customer: state.customer.currentCustomer,
    error: state.customer.error,
    changeMode: state.customer.changeMode
});

export default connect(mapStateToProps, null)(Customer);



