import React, { Component } from "react";
import { Link } from 'react-router-dom'
import {
  Button
} from "antd";
export default class Tab2 extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.init()
  }
  init = async () => {

  }
  render() {
    return <Button>
      <Link to={'/pages/test1/tab'}>Tab2页面，go to test1-tab1</Link>
    </Button>
  }
}