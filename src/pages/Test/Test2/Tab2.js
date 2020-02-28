import React, { Component } from "react";
import {
  Button
} from "antd";
import pageProv from "@/components/pageProv.js";

@pageProv
class Tab2 extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.init()
  }
  init = async () => {

  }
  render() {
    return <Button>tab2页面</Button>
  }
}
export default Tab2;