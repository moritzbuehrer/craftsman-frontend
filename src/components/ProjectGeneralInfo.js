import React from 'react';
import { Typography, Divider, Row, Col, Descriptions } from 'antd';

const { Title, Text } = Typography;


class ProjectGeneralInfo extends React.Component {

    render() {
        return (
            <div >
                <Title level={2}>Kernsanierung</Title>

                <Row>
                    <Col span={3}>
                        <Text strong>Project Id:</Text>
                    </Col>
                    <Col span={21}>
                        123456789
                    </Col>
                    <Col span={3}>
                        <Text strong>External Project Id:</Text>
                    </Col>
                    <Col span={21}>
                        987654321
                    </Col>
                    <Col span={3}>
                        <Text strong>Description:</Text>
                    </Col>
                    <Col span={21}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    </Col>
                </Row>

                <Divider orientation="left">Further Details</Divider>

            </div>
        );
    }
}

export default ProjectGeneralInfo;