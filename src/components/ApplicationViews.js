import { Route }  from "react-router-dom";
import React, { Component } from "react";
import Landing from "./landing/Landing"
import PortfolioList from "./portfolio/PortfolioList"
import Resume  from "./Resume/Resume"
import About from "./about/About"
import Contact from "./contact/Contact"

export default class ApplicationViews extends Component {

    render() {
        return (
            <>
                <Route
                    exact path="/" render={props => {
                        return <Landing {...props} />
                    }}
                />
                <Route
                    exact path="/portfolio" render={props => {
                        return <PortfolioList {...props} />
                    }}
                />
                <Route
                    exact path="/resume" render={props => {
                        return <Resume {...props} />
                    }}
                />
                <Route
                    exact path="/about" render={props => {
                        return <About {...props} />
                    }}
                />
                <Route
                    exact path="/contact" render={props => {
                        return <Contact {...props} />
                    }}
                />
        </>
        )
    }
}