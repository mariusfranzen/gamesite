import React, { Component } from "react";

class NextImage extends Component {
    render() {
        return (
            <a title={"next"} className="next-image" onClick={this.props.next} />
        );
    }
}
export default NextImage;
