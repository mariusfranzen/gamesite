import React, { Component } from "react";

import NextImage from "../carousel/NextImage";
import PreviousImage from "../carousel/PreviousImage";

import image0 from "../../img/banner0.jpg";
import image1 from "../../img/banner1.jpg";
import image2 from "../../img/banner2.jpg";
import image3 from "../../img/banner3.jpg";

const imgUrls = [
    {
        image: image0,
        title: "",
        body: (
            <span></span>
        )
    },
    {
        image: image1,
        title: "",
        body: (
            <span></span>
        )
    },
    {
        image: image2,
        title: "",
        body: (
            <span></span>
        )
    },
    {
        image: image3,
        title: "",
        body: (
            <span></span>
        )
    }
];

const BannerImage = ({ data }) => {
    console.log("data: " + JSON.stringify(data));
    return (
        <div
            className="carousel-slide"
            style={{
                backgroundImage: `url(${data.image})`
            }}
        >
            {data.title ? <h1>{data.title}</h1> : null}
            {data.body ? data.body : null}
        </div>
    )
}

class Carousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pageNum: 0
        }
    }

    render() {
        let { pageNum } = this.state;

        return (
            <React.Fragment>
                <div className="carousel">
                    <PreviousImage previous={this.previous}/>
                    <BannerImage data={imgUrls[pageNum]}/>
                    <NextImage next={this.next}/>
                </div>
            </React.Fragment>
        )
    }
}
export default Carousel;