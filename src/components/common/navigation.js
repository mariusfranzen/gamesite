import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Router, Route, Switch } from "react-router-dom";

import history from "../common/history";

class navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="row blue1-background">
                <h1 className="text-logo col-4 left gold-text">estrait<br />productions</h1>
                <nav className="col-8 right">
                    <Link to="/#home">home</Link>
                    <Link to="/#modeling">3d modeling and art</Link>
                    <Link to="/#game-development">game development</Link>
                    <Link to="/#support-us">support us!</Link>
                </nav>
                </div>
            </React.Fragment>
        );
    }
}

export default navigation;