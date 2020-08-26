import React from 'react';
import { Modal, Button, Form, AutoComplete, Input, InputNumber } from 'antd';
import { connect } from 'react-redux';
import { toggleShowTimeTrackModal, setWorkingTime } from '../../actions/project';


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
        var timeTrack = {
            id: "",
            employee: formValues.employee,
            workingTime: formValues.Duration,
            note: formValues.note
        }
        this.props.dispatch(setWorkingTime(timeTrack));
        this.props.dispatch(toggleShowTimeTrackModal());
    };

    handleCancel = e => {
        this.props.dispatch(toggleShowTimeTrackModal());
    };

    render() {
        return (
            <Modal
                title="Add new working time"
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
                        label="Employee"
                        name="employee"
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
                        name="Duration"
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
                            Submit
                    </Button>
                        <Button style={{ "margin-left": '8px' }} onClick={this.handleCancel}>
                            Cancel
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