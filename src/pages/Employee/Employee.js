import { PageHeader } from 'antd';
import React from 'react';

class Employee extends React.Component {

    componentDidMount() {
        this.props.dispatch(getCustomer(this.props.match.params.id));
    }
    
    render() {
        return (
            <div>
                <PageHeader
                    onBack={() => window.history.back()}
                    title={this.props.customer.name}
                    subTitle={this.props.match.params.id}
                    style={{ padding: '16px 0px' }}
                    extra={
                        <Button onClick={null}>
                            Bearbeiten
                        </Button>}
                />

                <Tabs defaultActiveKey="1">
                    <TabPane tab="Allgemeine Informationen" key="1">
                        
                    </TabPane>
                    <TabPane tab="Notizen" key="3">

                    </TabPane>
                </Tabs>
            </div>
        );
    }

}

export default Employee;