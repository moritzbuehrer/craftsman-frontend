import React from 'react';
import { connect } from 'react-redux';
import { Typography, Row, Col } from 'antd';
import GoogleMapContainer from './GoogleMapContainer/GoogleMapContainer';

const { Title, Text } = Typography;


class ProjectGeneralInfo extends React.Component {

    render() {
        return (
            <div >
                <Title level={2}>{this.props.currentProject.name}</Title>
                <Row>
                    <Col span="16">
                        <Row>
                            <Col span={4}>
                                <Row>
                                    <Text strong>Project Id:</Text>
                                </Row>
                                <Row>
                                    <Text strong>External Project Id:</Text>
                                </Row>
                                <Row>
                                    <Text strong>Description:</Text>
                                </Row>
                            </Col>
                            <Col span="20">
                                <Row>
                                    {this.props.currentProject.id}
                                </Row>
                                <Row>
                                    {this.props.currentProject.externalId}
                                </Row>
                                <Row>
                                    {this.props.currentProject.description}
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col span="8">
                        <GoogleMapContainer/>
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