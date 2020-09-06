import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Tabs, Table, PageHeader, Button } from 'antd';

import './Customer.css';
import CustomerGeneralInfo from './../../components/CustomerGeneralInfo.js/CustomerGeneralInfo';
import { getCustomer } from './../../actions/customer';

const { TabPane } = Tabs;


const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id'
    },
    {
        title: 'Project Name',
        dataIndex: 'name',
        key: 'name',
        render: (text, record, index) => <Link to={`/project/${record.id}`}>{text}</Link>
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
        id: '1',
        name: 'Project 1',
        age: 32,
        address: 'New York No. 1 Lake Park'
    },
    {
        id: '2',
        name: 'Project 2',
        age: 42,
        address: 'London No. 1 Lake Park'
    },
    {
        id: '3',
        name: 'Project 4',
        age: 32,
        address: 'Sidney No. 1 Lake Park'
    },
];


class Customer extends React.Component {

    componentDidMount() {
        this.props.dispatch(getCustomer(this.props.match.params.id));
    }

    onChangButtonClick = () => {

    }

    render() {
        return (
            <div>
                <PageHeader
                    onBack={() => window.history.back()}
                    title={this.props.customer.name}
                    subTitle={this.props.match.params.id}
                    style={{ padding: '16px 0px' }}
                    extra={
                        <Button onClick={null}>
                            Bearbeiten
                        </Button>
                    }
                >
                </PageHeader>

                <Tabs defaultActiveKey="1">
                    <TabPane tab="Allgemeine Informationen" key="1">
                        <CustomerGeneralInfo />
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



