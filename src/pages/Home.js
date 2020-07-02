import React, { Component } from "react";

import Carousel from "../components/carousel/Carousel";
import BannerCarousel from "../components/bannerCarousel/Carousel";

class homePage extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <React.Fragment>
                <div className="wrapper">
                <section id="home">
                    <BannerCarousel />
                </section>
                <section id="modeling">

                </section>
                <section id="game-development">

                </section>
                <section id="support-us">
                    
                </section>
                </div>
            </React.Fragment>
        );
    }
}
export default homePage;