import React, { Component } from 'react';
import { Table, Input, Button, Icon, Typography, Divider, Modal } from 'antd';
import Highlighter from 'react-highlight-words';
import { connect } from 'react-redux';
import { 
    ChangeFormMode,
    ChangeSearchText,
    ChangeTrainerTableData,
    ChangeModalState
} from '../../../actions/adminAction';
import './alltrainer.css'
import NewTrainerForm from '../newTrainer/newtrainer';

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Joe Black',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Jim Green',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
  {
    key: '5',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '6',
    name: 'Joe Black',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '7',
    name: 'Jim Green',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '8',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];

class AllTrainer extends Component {

  openModal = (id)=>{
    this.props.ChangeModalState(true,id);
  }
  closeModal = ()=>{
    this.props.ChangeModalState(false,null);
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
            searchWords={[this.props.admin.searchText]}
            autoEscape
            textToHighlight={text.toString()}
          />
        ),
      });
    
      handleSearch = (selectedKeys, confirm) => {
        confirm();
        this.props.ChangeSearchText(selectedKeys[0])
      };
    
      handleReset = clearFilters => {
        clearFilters();
        this.props.ChangeSearchText('')
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
              <Button type="primary" shape="circle" icon="edit" onClick={()=>this.openModal(key)}/>
                <Divider type="vertical" />
              <Button type="danger" shape="circle" icon="delete" />
            </span>
          ),
        },
      ];
        return (
            <div className="admin-table-container">
              <Button type="primary" icon="user-add" style={{marginBottom:'10px'}} onClick={()=>this.openModal(null)}>
                Add New
              </Button> 
              <div className="register-trainer-form-header">
                <Title level={4} style={{color:'#fff',textAlign:'center'}}>List of Trainer</Title>
              </div>
              <Table 
                bordered={true} 
                columns={columns} 
                dataSource={data} 
                size="medium" 
                pagination={{ pageSize: 5 }}
                loading={this.props.admin.trainerTableLoading
                }
              />;
              <Modal
                visible={this.props.admin.modalOpened}
                title={this.props.admin.mode}
                onOk={this.handleOk}
                onCancel={this.closeModal}
                style={{top :'20px',padding:'0px',backgroundColor:'rgb(155,175,190); '}}
                width="80%"
                footer={[
                  
                ]}
              >
                <NewTrainerForm />
              </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    admin : state.admin
});

export default connect(mapStateToProps,{
    ChangeFormMode,
    ChangeSearchText,
    ChangeTrainerTableData,
    ChangeModalState
})(AllTrainer);