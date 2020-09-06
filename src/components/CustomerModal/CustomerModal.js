import React from 'react';
import { Modal, Button, Form, Input } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleNewCustomerModal, postCustomer } from '../../actions/customer';

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
};

const tailLayout = {
    wrapperCol: { offset: 6, span: 18 },
};

class CustomerModal extends React.Component {

    handleOk = formValues => {
        this.props.dispatch(postCustomer(formValues, this.props.history))
    };

    handleCancel = e => {
        this.props.dispatch(toggleNewCustomerModal());
    };

    render() {
        return (
            <Modal
                title="Neuen Kunden hinzufügen"
                visible={this.props.showModal}
                onCancel={this.handleCancel}
                footer={null}
                destroyOnClose={true}
                width="22%"
            >
                <Form
                    {...layout}
                    name="newCustomerForm"
                    onFinish={this.handleOk}
                    onFinishFailed={() => { }}
                    preserve={false}
                >
                    <Form.Item
                        label="Kundenname"
                        name="name"
                        rules={[{ required: true, message: 'Bitte einen Kundennamen angeben' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item label="Vorname" name="firstName" >
                        <Input />
                    </Form.Item>

                    <Form.Item label="Telefon" name="phone" >
                        <Input />
                    </Form.Item>

                    <Form.Item label="Email" name="mail" >
                        <Input />
                    </Form.Item>

                    <Form.Item label="Adresse" name="street" >
                        <Input.Group >
                            <Form.Item name="street" noStyle>
                                <Input placeholder="Straße" style={{ width: '70%' }} />
                            </Form.Item>
                            <Form.Item name="number" >
                                <Input placeholder="Nr." />
                            </Form.Item>
                            <Form.Item name="postcode" noStyle>
                                <Input placeholder="PLZ" style={{ width: '30%' }} />
                            </Form.Item>
                            <Form.Item name="city" >
                                <Input placeholder="Stadt" />
                            </Form.Item>
                            <Form.Item name="country" >
                                <Input placeholder="Land" />
                            </Form.Item>
                        </Input.Group>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Speichern
                        </Button>
                        <Button style={{ "margin-left": '8px' }} onClick={this.handleCancel}>
                            Abbrechen
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        );
    }
}

const mapStateToProps = (state) => ({
    showModal: state.customer.showNewCustomerModal
});

export default withRouter(connect(mapStateToProps, null)(CustomerModal));