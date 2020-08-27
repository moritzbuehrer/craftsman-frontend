import React from 'react';
import { Modal, Button, Form, AutoComplete, Input } from 'antd';
import { connect } from 'react-redux';
import { resetProjectMessage, toggleShowNewProjectModal } from '../../actions/project';


const options = [
    { value: 'John Doe' },
    { value: 'Max Mustermann' },
    { value: 'Test User1' },
];

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
};

const tailLayout = {
    wrapperCol: { offset: 6, span: 18 },
};

class ProjectModal extends React.Component {

    mapCustomersForAutocomplete = (customers) => {
        for (let customer of customers) {
            console.log(customer);
        }
    }

    handleOk = formValues => {
        this.props.dispatch(toggleShowNewProjectModal());
        this.props.dispatch(resetProjectMessage());
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
                    name="timeTrackForm"
                    onFinish={this.handleOk}
                    onFinishFailed={() => { }}
                    preserve={false}
                >
                    <Form.Item
                        label="Projektname"
                        name="projectname"
                        rules={[{ required: true, message: 'Bitte Projektname angeben' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Kunde"
                        name="customer"
                        rules={[{ required: true, message: 'Bitte Kunden angeben' }]}
                    >
                        <AutoComplete
                            options={this.props.customers}
                            placeholder="Nach Mitarbeitern suchen..."
                            filterOption={(inputValue, option) =>
                                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                            }
                        />
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
        return { "value": customer.name + " " + customer.firstName}
    })
});

export default connect(mapStateToProps, null)(ProjectModal);