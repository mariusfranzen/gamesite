import React, { Component } from "react";

import data from "./data";
import NextImage from "../carousel/NextImage";
import PreviousImage from "../carousel/PreviousImage";

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
            pageCount: null,
            pageNumber: 1,
            startingPage: 1,
            data: data,
            dataSlice: []
        }
    }

    next = () => {
        let { pageCount, pageNumber, startingPage } = this.state;
        if (pageNumber == pageCount) {
            this.setState({ pageNumber: startingPage }, function () {
                this.getData();
            });
        } else {
            this.setState({ pageNumber: this.state.pageNumber + 1 }, function () {
                this.getData();
            });
        }
    };

    previous = () => {
        let { pageCount, pageNumber, startingPage } = this.state;
        if (pageNumber == startingPage) {
            this.setState({ pageNumber: pageCount }, function () {
                this.getData();
            });
        } else {
            this.setState({ pageNumber: this.state.pageNumber - 1 }, function () {
                this.getData();
            });
        }
    }

    getData = () => {
        let { data, itemsPerPage, dataSlice, pageNumber } = this.state;
        const upperLimit = pageNumber * itemsPerPage;
        this.setState({ upperLimit: upperLimit });
        let newData = data.slice(upperLimit - itemsPerPage, upperLimit);
        this.setState({ dataSlice: newData });
    };

    render() {
        let { pageNum } = this.state;

        return (
            <React.Fragment>
                <div className="carousel">
                    <PreviousImage previous={this.previous} />
                    <BannerImage data={imgUrls[pageNum]} />
                    <NextImage next={this.next} />
                </div>
            </React.Fragment>
        )
    }
}
export default Carousel;