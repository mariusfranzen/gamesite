import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";

// styles
import "../sass/main.scss";
// pages
import HomePage from "../pages/Home";
// components
import Navigation from "./common/navigation";
import history from "./common/history";

export default class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    };
    render() {
        return (
            <React.Fragment>
                <Router history={history}>
                    <Navigation />
                </Router>
                <HomePage />
            </React.Fragment>
        );
    }
}
