import React, { Component } from "react";

import Carousel from "../components/carousel/Carousel";

class homePage extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <React.Fragment>
                <section id="home">
                    <Carousel />
                </section>
                <section id="modeling">

                </section>
                <section id="game-development">

                </section>
                <section id="support-us">
                    
                </section>
            </React.Fragment>
        );
    }
}
export default homePage;