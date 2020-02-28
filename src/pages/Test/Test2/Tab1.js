import React, { Component } from "react";
import {
  Table,
  Button
} from "antd";
import pageProv from "@/components/pageProv.js";
import provCom from '@/components/ProvCom.js';

@pageProv
class Tab1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      load: false,
      current: 1,
      size: 20,
      total: 0
    }
    this.columns = [
      {
        title: "ID",
        dataIndex: "id",
        width: 100,
        ellipsis: true
      },
      {
        title: "内容",
        dataIndex: "content",
        width: 100,
        ellipsis: true
      },
      {
        title: "操作",
        width: 100,
        ellipsis: true,
        render: (text, record) => (
          <div>
            {provCom(this.props.provList)(
              'O_edit',
              <Button
                onClick={() => this.editPart(record)}
                size="small"
                type="link"
              >
                编辑
							</Button>
            )}
            {provCom(this.props.provList)(
              'O_del',
              <Button
                onClick={() => this.delPart(record)}
                className="danger-color"
                size="small"
                type="link"
              >
                删除
							</Button>
            )}
          </div>
        )
      }
    ]
  }
  componentDidMount() {
    this.init()
  }
  editPart = row => {

  }
  delPart = row => {

  }
  init = async () => {
    this.setState({
      load: true
    })
    let res = await this.http(this.url.tabList, {
      size: this.state.pageSize,
      current: this.state.pageNum
    });
    this.setState({
      load: false
    })
    if (res.success) {
      this.setState({
        list: res.data.list || []
      })
    }
  }
  render() {
    return <Table
      size="small"
      loading={this.state.load}
      dataSource={this.state.list}
      rowKey="id"
      columns={this.columns}
      pagination={{
        size: 'small',
        current: this.state.current,
        pageSize: this.state.size,
        total: this.state.total,
        showQuickJumper: true,
        showSizeChanger: true,
        showTotal: total => (`共 ${total} 条记录`),
        onChange: (page, size) => {
          this.setState(
            {
              current: page || 1,
              size: size || 20
            },
            this.init
          )
        },
        onShowSizeChange: (page, size) => {
          this.setState(
            {
              current: page || 1,
              size: size || 20
            },
            this.init
          )
        }
      }}
      scroll={{
        y: 'calc(100vh - 250px)'
      }} />
  }
}
export default Tab1;