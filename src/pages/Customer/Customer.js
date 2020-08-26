import React from 'react';
import { connect } from 'react-redux';
import { Tabs, Table, PageHeader } from 'antd';
import { setCurrentCustomer, toggleCustomerChange } from '../../actions/customer';

import './Customer.css';
import CustomerGeneralInfo from './../../components/CustomerGeneralInfo.js/CustomerGeneralInfo';

const { TabPane } = Tabs;


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

    render() {
        return (
            <div>
                <PageHeader
                    onBack={() => window.history.back()}
                    title={this.props.customer.name}
                    subTitle={this.props.customer.id}
                    style={{ padding: '16px 0px' }}
                >
                </PageHeader>

                <Tabs defaultActiveKey="1">
                    <TabPane tab="Allgemeine Informationen" key="1">
                        <CustomerGeneralInfo/>
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



