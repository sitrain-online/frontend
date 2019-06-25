import React, { Component } from 'react';
import { Table, Input, Button, Icon, Typography, Divider, Modal, Select, Row, Col  } from 'antd';
import Highlighter from 'react-highlight-words';
import { connect } from 'react-redux';
import { 
  ChangeQuestionModalState,
  ChangeQuestionTableData,
  ChangeQuestionSearchText,
  ChangeSelectedSubjects
} from '../../../actions/trainerAction';
import './allquestion.css'
import NewQuestionForm from '../newquestion/newquestion';



class AllQuestions extends Component {

  openModal = (id,mode)=>{
    this.props.ChangeQuestionModalState(true,id,mode);
  }

  closeModal = ()=>{
    this.props.ChangeQuestionModalState(false,null,null);
  }

  handleSubjectChange =(s)=>{
    this.props.ChangeSelectedSubjects(s);
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
            searchWords={[this.props.trainer.QuestionsearchText]}
            autoEscape
            textToHighlight={text.toString()}
          />
        ),
      });
    
      handleSearch = (selectedKeys, confirm) => {
        confirm();
        this.props.ChangeQuestionSearchText(selectedKeys[0])
      };
    
      handleReset = clearFilters => {
        clearFilters();
        this.props.ChangeQuestionSearchText('')
      };

    render() {
      const { Title } = Typography;
      const subjectfilteredoption = this.props.trainer.subjects.filter(o => !this.props.trainer.selectedSubjects.includes(o));
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
              <Button type="primary" shape="circle" icon="edit" onClick={()=>this.openModal(key,'Edit Question')}/>
                <Divider type="vertical" />
              <Button type="danger" shape="circle" icon="delete" />
            </span>
          ),
        },
      ];
        return (
            <div className="admin-table-container">
              <div>
                <Row>
                  <Col span={12}>
                    <Button type="primary" icon="question-circle" style={{marginBottom:'10px'}} onClick={()=>this.openModal(null,'Add New Question')}>
                      Add New Question
                    </Button>
                  </Col>
                  <Col span={12}>
                    <Select
                      mode="multiple"
                      placeholder="Select one or more subjects"
                      value={this.props.trainer.selectedSubjects}
                      onChange={this.handleSubjectChange}
                      style={{ width: '100%' }}
                    >
                      {subjectfilteredoption.map(item => (
                        <Select.Option key={item} value={item}>
                          {item}
                        </Select.Option>
                      ))}
                    </Select>
                  </Col>
                </Row>
              </div>
              <div className="register-trainer-form-header">
                <Title level={4} style={{color:'#fff',textAlign:'center'}}>List of Questions</Title>
              </div>
              <Table 
                bordered={true} 
                columns={columns} 
                dataSource={this.props.trainer.QuestionTableData} 
                size="medium" 
                pagination={{ pageSize: 5 }}
                loading={this.props.trainer.QuestionTableLoading
                }
              />;
              <Modal
                visible={this.props.trainer.NewQuestionmodalOpened}
                title={this.props.trainer.Questionmode}
                onOk={this.handleOk}
                onCancel={this.closeModal}
                afterClose={this.closeModal}
                style={{top :'20px',padding:'0px',backgroundColor:'rgb(155,175,190)'}}
                width="90%"
                destroyOnClose={true}
                footer={[
                  
                ]}
              >
                <NewQuestionForm />
              </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    trainer : state.trainer
});

export default connect(mapStateToProps,{
  ChangeQuestionModalState,
  ChangeQuestionTableData,
  ChangeQuestionSearchText,
  ChangeSelectedSubjects
})(AllQuestions);