import React from 'react';
import { Modal, Button, Form, AutoComplete, Input } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleShowNewProjectModal, postProject } from '../../actions/project';

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
};

const tailLayout = {
    wrapperCol: { offset: 6, span: 18 },
};

class ProjectModal extends React.Component {

    handleOk = formValues => {
        this.props.dispatch(postProject(formValues, this.props.history))
    };

    handleCancel = e => {
        this.props.dispatch(toggleShowNewProjectModal());
    };

    render() {
        return (
            <Modal
                title="Neues Projekt hinzufügen"
                visible={this.props.showModal}
                onCancel={this.handleCancel}
                footer={null}
                destroyOnClose={true}
            >
                <Form
                    {...layout}
                    name="newProjectForm"
                    onFinish={this.handleOk}
                    onFinishFailed={() => { }}
                    preserve={false}
                >
                    <Form.Item
                        label="Projektname"
                        name="name"
                        rules={[{ required: true, message: 'Bitte einen Projektnamen angeben' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item label="Beschreibung" name="description" >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Kunden Id"
                        name="customer"
                        rules={[{ required: true, message: 'Bitte einen Kunden angeben' }]}
                    >
                        <AutoComplete
                            options={this.props.customers}
                            placeholder="Nach Kunden suchen..."
                            filterOption={(inputValue, option) =>
                                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                            }
                        />
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
    showModal: state.project.showNewProjectModal,
    customers: state.customer.customers.map(customer => {
        return {
            "value": customer.id + " | " + customer.name + " " + customer.firstName,
            "customer": customer
        }
    })
});

export default withRouter(connect(mapStateToProps, null)(ProjectModal));