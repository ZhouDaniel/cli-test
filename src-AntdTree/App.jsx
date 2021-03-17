import React, { Component, useState } from "react";
import "antd/dist/antd.css";
import { Button, DatePicker, Tree } from "antd";
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
const initTreeDate = [
    {
        title: "Expand to load",
        key: "0",
    },
    {
        title: "Expand2 to load",
        key: "1",
    },
    {
        title: "Tree Node",
        key: "2",
    },
]; // It's just a simple demo. You can use tree map to optimize update perf.

function updateTreeData(list, key, children) {
    console.log(list,key)
    return list.map((node) => {
        if (node.key === key) {
            return { ...node, children };
        }

        if (node.children) {
            console.log("children")
            return {
                ...node,
                children: updateTreeData(node.children, key, children),
            };
        }
        console.log(node)
        return node;
    });
}

export const Demo = () => {
    const [treeData, setTreeData] = useState(initTreeDate);

    function onLoadData({ key, children }) {
        console.log(key,children)
        return new Promise((resolve) => {
            if (children) {
                resolve();
                return;
            }

            setTimeout(() => {
                setTreeData((origin) =>
                    updateTreeData(origin, key, [
                        {
                            title: "Child Node",
                            key: `${key}-0`,
                        },
                        {
                            title: "Child Node",
                            key: `${key}-1`,
                        },
                    ])
                );
                resolve();
            }, 1000);
        });
    }

    return <Tree loadData={onLoadData} treeData={treeData} />;
};


