import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LoginForm from '../containers/login_form_conatiner';
import SignUpForm from '../containers/sign_up_form_container';
import SignUpButtons from '../containers/signup_buttons_container';
import Dashboard from '../containers/dashboard_container'

class Sidebar extends Component {
	render() {
		return(
			<div className="col-md-4 login-sidebar">
				<header>
					<img src="../img/sell-it.png" alt="logo"/>
				</header>

				<BrowserRouter>
					<div>
						<SignUpButtons/>

						<Switch>
							<Route path="/dashboard" component={Dashboard} />
							<Route path="/sign-up" component={SignUpForm} />
							<Route path="/" component={LoginForm} />
						</Switch>
					</div>
				</BrowserRouter>
			</div>
		)
	}
}

export default Sidebar;