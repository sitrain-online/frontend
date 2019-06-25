import React from 'react'
import { Table } from 'antd';
import {connect} from 'react-redux';

function TestDetailsTab1(props) {
    const columns = [
        {
          title: 'Name',
          dataIndex: 'key'
        },
        {
          title: 'Details',
          dataIndex: 'value',
        }
    ];
      
    return (
        <div>
            <Table
                columns={columns}
                dataSource={props.trainer.DataActiveTestDetails.testDetails}
                bordered
                title={() => 'Basic Details'}
                pagination={false}
            />
        </div>
    )
}

const mapStateToProps = state => ({
    trainer : state.trainer
});

export default connect(mapStateToProps,null)(TestDetailsTab1);


