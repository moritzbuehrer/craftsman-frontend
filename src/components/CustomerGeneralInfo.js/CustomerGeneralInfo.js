import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import GoogleMapContainer from '../GoogleMapContainer/GoogleMapContainer';

class ProjectGeneralInfo extends React.Component {

    render() {
        return (
            <div>
                <Row style={{height: '100%'}}>
                    <Col span="16">
                        <Row>
                            <Col span={8}>
                                <Row>
                                    Name:
                            </Row>
                                {this.props.customer.firstName ? <Row> Vorname: </Row> : null}
                                <Row>
                                    Adresse:
                            </Row>
                                <Row>
                                    Telefon Nummer:
                            </Row>
                                <Row>
                                    Email:
                            </Row>
                            </Col>
                            <Col span={16}>
                                <Row>
                                    {this.props.customer.name}
                                </Row>
                                {this.props.customer.firstName ? <Row> {this.props.customer.firstName} </Row> : null}
                                <Row>
                                    {this.props.customer.firstName}
                                </Row>
                                <Row>
                                    {this.props.customer.street}
                                </Row>
                                <Row>
                                    {this.props.customer.phone}
                                </Row>
                                <Row>
                                    {this.props.customer.email}
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col span="8">
                        <GoogleMapContainer />
                    </Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    customer: state.customer.currentCustomer,
});

export default connect(mapStateToProps, null)(ProjectGeneralInfo);