import React, { Component,Suspense } from "react";
import { Link, Route, Redirect, Switch } from "react-router-dom";
import {  Spin} from 'antd'
import Home from "./components/Home";
import About from "./components/About";
import Direct from "./components/Redirect";
import { BrowserRouter } from "react-router-dom";
export const Demo = () => {
    const layoutRoutes = [
        {
            path: "/home",
            componet: React.lazy(() => import("./components/Home")),
        },
        {
            path: "/about",
            component: React.lazy(() => import("./components/About")),
        },
    ];
    const renderSubRoutes = (route, i) => {
        console.log(route);
        return <RouteWithSubRoutes key={i} {...route} />;
    };
    

    function RouteContainer({ routes }) {
        return (
          <div className='route-wrapper'>
            {routes &&
              routes.map(renderSubRoutes)}
          </div>
        )
      }
    function RouteWithSubRoutes(route) {
        console.log(route);
        const Component = route.component
        return (<Route path={route.path} 
            // render={() => {
            //     return (    
            //         // <Suspense fallback={<Spin />}>
            //             <Component></Component>   
            //         // </Suspense>     
                    
            //     )
            // }}
        ></Route>);
    }
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
                        {/* 在React中靠路由链接实现切换组件--编写路由链接 */}
                        <Link style={{ margin: "5px" }} to="/about">
                            About
                        </Link>
                        <Link style={{ margin: "5px" }} to="/home">
                            Home
                        </Link>
                        <Link style={{ margin: "5px" }} to="/hang">
                            hang
                        </Link>
                        <Link style={{ margin: "5px" }} to="/aaaa">
                            aaaa
                        </Link>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel">
                        <div className="panel-body">
                            {/* 注册路由 */}
                            <Switch>{layoutRoutes.map(renderSubRoutes)}</Switch>
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
};
