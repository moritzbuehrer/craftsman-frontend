import React from 'react';
import { Row, Col, Input, List } from 'antd';

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


class Customer extends React.Component {

    render() {
        return (
            <Row>
                <Col span={6}>
                    <List
                        header={
                            <Input placeholder="Search Customers" bordered={false} />
                        }
                        size="large"
                        bordered
                        dataSource={data}
                        renderItem={item => <List.Item>{item}</List.Item>}
                    />

                </Col>
                <Col span={18}>
                    
                </Col>
            </Row>
        );
    }
}

export default Customer;



