import React, { Component } from 'react';
import { Table, Input, Button, Icon, Typography, Divider, Modal, Select, Row, Col  } from 'antd';
import Highlighter from 'react-highlight-words';
import { connect } from 'react-redux';
import { 
    ChangeTestSearchText,
    ChangeTestTableData,
    ChangeTestDetailsModalState
} from '../../../actions/trainerAction';
import './alltest.css'

import TestDetails from '../testdetails/testdetails';




class AllTests extends Component {

    openModal = (id)=>{
        this.props.ChangeTestDetailsModalState(true,id);
    }
    
    closeModal = ()=>{
        this.props.ChangeTestDetailsModalState(false,null);
    }

    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
          <div style={{ padding: 8 }}>
            <Input
              ref={node => {
                this.searchInput = node;
              }}
              placeholder={`Search ${dataIndex}`}
              value={selectedKeys[0]}
              onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
              style={{ width: 188, marginBottom: 8, display: 'block' }}
            />
            <Button
              type="primary"
              onClick={() => this.handleSearch(selectedKeys, confirm)}
              icon="search"
              size="small"
              style={{ width: 90, marginRight: 8 }}
            >
              Search
            </Button>
            <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
              Reset
            </Button>
          </div>
        ),
        filterIcon: filtered => (
          <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
        ),
        onFilter: (value, record) =>
          record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
          if (visible) {
            setTimeout(() => this.searchInput.select());
          }
        },
        render: text => (
          <Highlighter
            highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
            searchWords={[this.props.trainer.TestsearchText]}
            autoEscape
            textToHighlight={text.toString()}
          />
        ),
      });
    
      handleSearch = (selectedKeys, confirm) => {
        confirm();
        this.props.ChangeTestSearchText(selectedKeys[0])
      };
    
      handleReset = clearFilters => {
        clearFilters();
        this.props.ChangeTestSearchText('')
      };

    render() {
      const { Title } = Typography;
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          width: '30%',
          ...this.getColumnSearchProps('name'),
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
          width: '20%',
          ...this.getColumnSearchProps('age'),
          sorter: (a, b) => a.age - b.age,
          defaultSortOrder: 'descend'
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
          ...this.getColumnSearchProps('address'),
        },
        {
          title: 'Action',
          key: 'key',
          dataIndex: 'key',
          render: (key) => (
            <span>
              <Button type="primary" shape="circle" icon="info-circle" onClick={()=>this.openModal(key)}/>
            </span>
          ),
        },
      ];
        return (
            <div className="admin-table-container">
              <div className="register-trainer-form-header">
                <Title level={4} style={{color:'#fff',textAlign:'center'}}>List of Tests</Title>
              </div>
              <Table 
                bordered={true} 
                columns={columns} 
                dataSource={this.props.trainer.TestTableData} 
                size="medium" 
                pagination={{ pageSize: 5 }}
                loading={this.props.trainer.TestTableLoading
                }
              />;
              <Modal
                visible={this.props.trainer.TestDetailsmodalOpened}
                title="Test details"
                onOk={this.handleOk}
                onCancel={this.closeModal}
                afterClose={this.closeModal}
                style={{top :'20px',padding:'0px',backgroundColor:'rgb(155,175,190)'}}
                width="90%"
                destroyOnClose={true}
                footer={[
                  
                ]}
              >
                <TestDetails />
              </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    trainer : state.trainer
});

export default connect(mapStateToProps,{
    ChangeTestSearchText,
    ChangeTestTableData,
    ChangeTestDetailsModalState
})(AllTests);