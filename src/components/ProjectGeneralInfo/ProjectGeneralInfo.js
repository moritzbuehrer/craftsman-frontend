import React from 'react';
import { connect } from 'react-redux';
import { Typography, Row, Col, Divider, Button, PageHeader } from 'antd';
import Map from './../Map/Map';

const { Title, Text } = Typography;

class ProjectGeneralInfo extends React.Component {

    render() {
        return (
            <div >
                <div>
                    <PageHeader
                        title={<Title level={4}> {this.props.currentProject.name}</Title>}
                        extra={[<Button key="1">Operation</Button>]}
                        style={{padding: "5px"}}
                    />
                </div>
                <div style={{ height: '150px', padding: "0px 0px 0px 30px" }}>
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
                <div style={{ height: '200px', padding: "0px 0px 0px 30px" }}>
                    <div style={{ float: 'left', width: '50%', height: '100%' }}>
                        <Row>
                            <Col span={4}>
                                <Row>
                                    <Text strong>Straße / Nr.:</Text>
                                </Row>
                                <Row>
                                    <Text strong>Postleitzahl:</Text>
                                </Row>
                                <Row>
                                    <Text strong>Stadt:</Text>
                                </Row>
                                <Row>
                                    <Text strong>Land:</Text>
                                </Row>

                            </Col>
                            <Col span="20">
                                <Row>
                                    {this.props.currentProject.address.street + ' ' + this.props.currentProject.address.number}
                                </Row>
                                <Row>
                                    {this.props.currentProject.address.postcode}
                                </Row>
                                <Row>
                                    {this.props.currentProject.address.city}
                                </Row>
                                <Row>
                                    {this.props.currentProject.address.country}
                                </Row>
                            </Col>
                        </Row>
                    </div>
                    <div style={{ float: 'left', width: '50%', height: '100%' }}>
                        <Map/>
                    </div>
                </div>

                <Divider orientation="left">Kontaktperson</Divider>
                {/* <div>
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
                </div> */}
            </div >
        );
    }
}

const mapStateToProps = (state) => ({
    currentProject: state.project.currentProject
});

export default connect(mapStateToProps, null)(ProjectGeneralInfo);