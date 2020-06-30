import React, { Component } from "react";

class NextImage extends Component {
    render() {
        let { next } = this.props;
        return (
            <a title={"next"} className="next-image" onClick={next} />
        );
    }
}
export default NextImage;
