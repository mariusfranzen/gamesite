import React, { Component } from "react";
import PreviousImage from "../carousel/PreviousImage";
import NextImage from "../carousel/NextImage";

import data from "../bannerCarousel/data";

const Banner = ({ data }) => {
    return(
        <img className="banner-image" src={data.image} alt={data.alt} />
    )
}

class Carousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: data,
            imageID: 0,
            totalImages: 4
        }
    }

    componentDidMount() {

    }

    next = () => {
        let { imageID, totalImages } = this.state;
        console.log(imageID)
        let currentID = imageID;
        let newID;
        if(currentID === totalImages - 1){
            newID = 0;
        } else {
            newID = currentID + 1;
            console.log(newID)
        }
        this.setState({ imageID: newID });
    }

    previous = () => {
        let { imageID, totalImages } = this.state;
        console.log(imageID)
        let currentID = imageID;
        let newID;
        if(currentID === 0){
            newID = totalImages - 1;
        } else {
            newID = currentID - 1;
        }
        this.setState({ imageID: newID });
    }

    render() {
        let { data, imageID } = this.state;

        return(
            <React.Fragment>
                <div className="banner-carousel">
                    <PreviousImage previous={this.previous} />
                    <Banner data={data[imageID]} />
                    <NextImage next={this.next} />
                </div>
            </React.Fragment>
        )
    }

}
export default Carousel;