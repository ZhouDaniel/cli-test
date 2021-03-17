
import React, { useState , useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
function Index() {
    useEffect(()=>{
        console.log('useEffect=>老弟，你来了！Index页面')
        return ()=>{
            console.log('老弟，你走了!Index页面')
        }
    },[])
    return <h2>JSPang.com</h2>;
}
function Aaa(props) {
    return(
        <h3>{props.title}</h3>
    )
}
function List() {
    useEffect(()=>{
        console.log('useEffect=>老弟，你来了！List页面')
        return ()=>{
            console.log('老弟，你走了!List页面')
        }
    },[])
    return <Aaa title="这是title"></Aaa>;
}

function Example(){
    const [ count , setCount ] = useState(0);
    //---关键代码---------start-------
    useEffect(()=>{
        // console.log(`useEffect=>You clicked ${count} times`)
        console.log('++')
        return ()=>{
            console.log('+++++++++++++++++')
        }
    },[])
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>click me</button>
    
            <Router>
                <ul>
                    <li> <Link to="/">首页</Link> </li>
                    <li><Link to="/list/">列表</Link> </li>
                </ul>
                <Route path="/" exact component={Index} />
                <Route path="/list/" component={List} />
            </Router>
        </div>
    )
}
export default Example;
