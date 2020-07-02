import React, { Component } from "react";

class NextImage extends Component {
    render() {
        return (
            <a className="next-image" onClick={this.props.next} />
        );
    }
}
export default NextImage;
