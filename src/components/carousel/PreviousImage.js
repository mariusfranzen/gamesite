import React, { Component } from "react";

class PreviousImage extends Component {
    render() {
        let { previous } = this.props;
        return (
            <a title={"previous"} className="previous-image" onClick={previous} />
        );
    }
}
export default PreviousImage;
