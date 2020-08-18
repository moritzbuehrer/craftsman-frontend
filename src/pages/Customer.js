import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Input, List, Button, Spin, Avatar, Typography } from 'antd';
import { fetchCustomers, setCurrentCustomer, toggleCustomerChange } from './../actions/customer';

import './Customer.css';

import { LoadingOutlined } from '@ant-design/icons';
const { Text } = Typography;

const data = [
    'Moritz Bührer',
    'Tamara Schmid',
    'Mara Bührer',
    'Hilka Bührer',
    'Michael Bührer',
    'Moritz Bührer',
    'Tamara Schmid',
    'Mara Bührer',
    'Hilka Bührer'
];


const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />;


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

                {this.props.loading ? <Spin indicator={antIcon} /> : null}

                <Row>
                    <Col span={6}>
                        <List
                            header={
                                <Input placeholder="Search Customers" bordered={false} />
                            }
                            size="large"
                            bordered
                            dataSource={this.props.customers}
                            renderItem={customer => <List.Item onClick={() => this.onListItemClick(customer)} className="customer-list-item">{customer.firstName + " " + customer.name}</List.Item>}
                        />

                    </Col>
                    <Col span={18}>
                        <Row>
                            <Col span={12}>
                                <Button onClick={() => this.onChangButtonClick()}>Change</Button>
                                <Button>Delete</Button>
                            </Col>
                            <Col span={12}>
                                <Button type="primary" style={{ float: "right" }}>Add new Customer</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <Row>
                                    <Text strong>First Name:</Text> 
                                    {this.props.changeMode ? <Input value={this.props.currentCustomer.firstName}/> : this.props.currentCustomer.firstName}
                                </Row>
                                <Row>
                                    <Text strong>Last Name:</Text> 
                                    {this.props.changeMode ?  <Input value={this.props.currentCustomer.lastName}/> : this.props.currentCustomer.lastName}
                                </Row>
                                <Row>
                                    <Text strong>Phone Number:</Text> 
                                    {this.props.changeMode ?  <Input value={this.props.currentCustomer.phoneNumber}/> : this.props.currentCustomer.phoneNumber}
                                </Row>
                                <Row>
                                    <Text strong>Email:</Text> 
                                    {this.props.changeMode ? <Input value={this.props.currentCustomer.email}/> : this.props.currentCustomer.email}
                                </Row>

                            </Col>
                        </Row>

                    </Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    currentCustomer: state.customer.currentCustomer,
    customers: state.customer.customers,
    loading: state.customer.loading,
    error: state.customer.error,
    changeMode: state.customer.changeMode
});

export default connect(mapStateToProps, null)(Customer);



