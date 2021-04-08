import React, { Component } from "react";
import { Link, Route,Redirect,Switch} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Direct from "./components/Redirect";
import {BrowserRouter} from 'react-router-dom'
export const Demo = () => {

    return (
        <BrowserRouter>
            <div className="row">
                <div className="col-xs-offset-2 col-xs-8">
                    <div className="page-header">
                        <h2>React Router Demo</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-2 col-xs-offset-2">
                    <div className="list-group">
                        {/* 原生html中，靠<a>跳转不同的页面 */}
                        {/* <a className="list-group-item" href="./about.html">About</a>
							<a className="list-group-item active" href="./home.html">Home</a> */}

                        {/* 在React中靠路由链接实现切换组件--编写路由链接 */}
                        <Link className="list-group-item" to="/about">
                            About
                        </Link>
                        <Link className="list-group-item" to="/home">
                            Home
                        </Link>
                        <Link className="list-group-item" to="/hang">
                            hang
                        </Link>
                        <Link className="list-group-item" to="/aaaa">
                            aaaa
                        </Link>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel">
                        <div className="panel-body">
                            {/* 注册路由 */}
                            {/* <Switch>     基础 Switch代表匹配上第一个就不匹配
                                <Route path="/home" component={Home} />
                                <Route path="/about" component={About} />
                            </Switch> */}
                            {/* <Switch>     // 如果匹配不上 有两种重定向的方法，写在上面的生效 Redirect 必须写在最后面
                                <Route path="/home" component={Home} />
                                <Route path="/about" component={About} />
                                <Route component={Direct} />
                                <Redirect to="/about"></Redirect>
                            </Switch> */}
                            <Switch>     // render 渲染方式
                                <Route path="/home" component={Home} />
                                <Route path="/about" component={About} />
                                <Route path="/hang" render={(props) => { const {staticContext,...other} = props ;console.log(other) ;if(true) {return <div {...other}>Home1112</div>}}}/>
                            </Switch>
                            {/* <Switch>     // render 渲染方式 里面可以写Redirect重定向 这种重定向不是不要写在最后面
                                <Route path="/home" component={Home} />
                                <Route path="/aaaa" render={()=>{return <Redirect to="/about"></Redirect>}} />
                                <Route path="/about" component={About} />
                            </Switch> */}
                             {/* render 渲染方式 里面可以写组件 */}
                            {/* <Switch>     
                                <Route path="/home" component={Home} />
                                <Route path="/about" component={About} />
                                <Route path="/redirect" render={() => { return <component />}} />
                            </Switch> */}
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
};
