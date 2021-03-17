import React, { Component, useState } from "react";
import "antd/dist/antd.css";
import { Button, DatePicker, Spin } from "antd";
import {
    WechatOutlined,
    WeiboOutlined,
    SearchOutlined,
} from "@ant-design/icons";
const { RangePicker } = DatePicker;

export default class App extends Component {
    render() {
        return (
            <div>
                App....
                <button>点我</button>
                <Button type="primary">按钮1</Button>
                <Button>按钮2</Button>
                <Button type="link">按钮3</Button>
                <Button type="primary" icon={<SearchOutlined />}>
                    Search
                </Button>
                <WechatOutlined />
                <WeiboOutlined />
                <DatePicker />
                <RangePicker />
            </div>
        );
    }
}

export const Demo = () => {
    const onBtn = () => {
        console.log("aaaa")
        setLoad(true)
        setTimeout(()=> {
            setLoad(false)
        },1000)
    }
    const [load,setLoad] = useState(false)
    return (
        <div>
            <Spin spinning={load}></Spin>
            <button onClick={onBtn}>按钮</button>
        </div>
    );
};
