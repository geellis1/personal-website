import React, { Component } from "react";
import { Link, withRouter} from "react-router-dom"


class NavigationBar extends Component {

    render() {
        return (
            <>
                <ul>
                <li><Link className="home" to="/">Home</Link></li>
                    <li><Link className="portfolio" to="/portfolio">Portfolio</Link></li>
                    <li><Link className="about" to="/about">About</Link></li>
                    <li><Link className="resume" to="/resume">Resume</Link></li>
                    <li><Link className="contact" to="/contact">Contact</Link></li>
                </ul>
            </>

        );
    }
}

export default withRouter(NavigationBar);