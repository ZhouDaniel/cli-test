import React, { Component } from "react";
import { Link, Route,Redirect,Switch} from "react-router-dom";
import AA from './AA'
import BB from './BB'
export default class Home extends Component {
	render() {
		return (
            <>
			<h3>我是Home的内容</h3>
            <div>
                <Link className="list-group-item" to="/home/aa">
                            AA
                </Link>
                <Link className="list-group-item" to="/home/bb">
                            BB
                </Link>
            </div>
            <div>
                <Route path="/home/aa" component={AA}></Route>
                <Route path="/home/bb" component={BB}></Route>
            </div>
            </>
		)
	}
}
