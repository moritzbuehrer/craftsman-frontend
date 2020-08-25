import React from 'react';
import { connect } from 'react-redux';
import { Typography, Divider, Row, Col } from 'antd';

const { Title, Text } = Typography;


class ProjectGeneralInfo extends React.Component {

    render() {
        return (
            <div >
                <Title level={2}>{this.props.currentProject.name}</Title>

                <Row>
                    <Col span={3}>
                        <Text strong>Project Id:</Text>
                    </Col>
                    <Col span={21}>
                        {this.props.currentProject.id}
                    </Col>
                    <Col span={3}>
                        <Text strong>External Project Id:</Text>
                    </Col>
                    <Col span={21}>
                    {this.props.currentProject.externalId}
                    </Col>
                    <Col span={3}>
                        <Text strong>Description:</Text>
                    </Col>
                    <Col span={21}>
                    {this.props.currentProject.description}
                    </Col>
                </Row>

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    currentProject: state.project.currentProject
});

export default connect(mapStateToProps, null)(ProjectGeneralInfo);