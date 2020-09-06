import React from 'react';
import { connect } from 'react-redux';
import { Typography, Row, Col, Divider, Button, PageHeader } from 'antd';
import GoogleMapContainer from './GoogleMapContainer/GoogleMapContainer';

const { Title, Text } = Typography;


class ProjectGeneralInfo extends React.Component {

    render() {
        return (
            <div >
                <div>
                    <PageHeader
                        title={<Title level={2}> {this.props.currentProject.name}</Title>}
                        extra={[<Button key="1">Operation</Button>]}
                    />
                </div>
                <div style={{ height: '300px' }}>
                    <Row>
                        <Col span={4}>
                            <Row>
                                <Text strong>Project Id:</Text>
                            </Row>
                            <Row>
                                <Text strong>External Project Id:</Text>
                            </Row>
                            <Row>
                                <Text strong>Start Datum:</Text>
                            </Row>
                            <Row>
                                <Text strong>Geplantes End Datum:</Text>
                            </Row>
                            <Row>
                                <Text strong>Projektbeschreibung:</Text>
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
                                {this.props.currentProject.startDate}
                            </Row>
                            <Row>
                                {this.props.currentProject.plannedEndDate}
                            </Row>
                            <Row>
                                {this.props.currentProject.description}
                            </Row>
                        </Col>
                    </Row>
                </div>

                <Divider orientation="left">Adresse</Divider>
                <div style={{ height: '200px' }}>
                    <div style={{ float: 'left', width: '50%', height: '100%' }}>
                        <Row>
                            <Col span={4}>
                                <Row>
                                    <Text strong>Straße / Nr.:</Text>
                                </Row>
                                <Row>
                                    <Text strong>Stadt:</Text>
                                </Row>
                                <Row>
                                    <Text strong>Postleitzahl:</Text>
                                </Row>
                                <Row>
                                    <Text strong>Land:</Text>
                                </Row>

                            </Col>
                            <Col span="20">
                                <Row>
                                    Mündchen Str. 4
                                </Row>
                                <Row>
                                    Hamburg
                                </Row>
                                <Row>
                                    66575
                                </Row>
                                <Row>
                                    DE
                                </Row>
                            </Col>
                        </Row>
                    </div>
                    <div style={{ float: 'left', width: '50%', height: '100%' }}>
                        <GoogleMapContainer />
                    </div>
                </div>

                <Divider orientation="left">Kontaktperson</Divider>
                <div>
                    <Row>
                        <Col span={4}>
                            <Row>
                                <Text strong>Name:</Text>
                            </Row>
                            <Row>
                                <Text strong>Telefon:</Text>
                            </Row>
                            <Row>
                                <Text strong>Email:</Text>
                            </Row>
                        </Col>
                        <Col span="20">
                            <Row>
                                {this.props.currentProject.contactPerson.name}
                            </Row>
                            <Row>
                                {this.props.currentProject.contactPerson.phone}
                            </Row>
                            <Row>
                                {this.props.currentProject.contactPerson.mail}
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div >
        );
    }
}

const mapStateToProps = (state) => ({
    currentProject: state.project.currentProject
});

export default connect(mapStateToProps, null)(ProjectGeneralInfo);