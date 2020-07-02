import React, { Component } from "react";

class PreviousImage extends Component {
    render() {
        return (
            <a className="previous-image" onClick={this.props.previous} />
        );
    }
}
export default PreviousImage;
