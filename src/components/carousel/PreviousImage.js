import React, { Component } from "react";

class PreviousImage extends Component {
    render() {
        return (
            <a title={"previous"} className="previous-image" onClick={this.props.previous} />
        );
    }
}
export default PreviousImage;
