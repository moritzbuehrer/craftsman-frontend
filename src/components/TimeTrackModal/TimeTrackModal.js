import React from 'react';
import { Modal, Button, Form, AutoComplete, Input, InputNumber } from 'antd';
import { connect } from 'react-redux';
import { toggleShowTimeTrackModal } from '../../actions/project';
import { postTimeTrack } from '../../actions/timeTrack';


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

class TimeTrackModal extends React.Component {

    handleOk = formValues => {
        this.props.dispatch(postTimeTrack(formValues))
    };

    handleCancel = e => {
        this.props.dispatch(toggleShowTimeTrackModal());
    };

    render() {
        return (
            <Modal
                title="Neue Arbeitszeit hinzufügen"
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
                        label="Mitarbeiter Id"
                        name="employeeId"
                        rules={[{ required: true, message: 'Bitte Mitarbeiter angeben' }]}
                    >
                        <AutoComplete
                            options={options}
                            placeholder="Nach Mitarbeitern suchen..."
                            filterOption={(inputValue, option) =>
                                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                            }
                        />
                    </Form.Item>

                    <Form.Item
                        label="Duration"
                        name="duration"
                        rules={[{ required: true, message: 'Please set Working Time duration' }, { type: 'number' }]}
                    >
                        <InputNumber min={0} />
                    </Form.Item>

                    <Form.Item
                        label="Note"
                        name="note"
                    >
                        <Input />
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
    showModal: state.project.showTimeTrackModal
});

export default connect(mapStateToProps, null)(TimeTrackModal);