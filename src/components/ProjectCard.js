import React from 'react';
import YelpLogo from "../assets/yelp.jpg";
import UnSplashLogo from "../assets/unsplash.jpeg";
import CocktailsLogo from '../assets/cocktails.jpeg';
import "./styles/ProjectCard.css";

const imageNameToImage = {
    "Yelp": {
        logo: YelpLogo,
        size: "35vh"
    },
    "UnSplash": {
        logo: UnSplashLogo,
        size: "33vh"
    },
    "Cocktails": {
        logo: CocktailsLogo,
        size: "33vh"
    }
}

class ProjectCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false
        };
    }

    onMouseOver = () => {
        this.setState({ hover: true });
    }

    onMouseOut = () => {
        this.setState({ hover: false });
    }

    render() {
        const { name, description, imageName, link } = this.props.project;
        const { logo, size } = imageNameToImage[imageName];

        return (
            <div
                className="ui dimmable dimmed"
                onMouseOver={this.onMouseOver}
                onMouseOut={this.onMouseOut}
            >
                <div className={`ui dimmer ${this.state.hover ? "active" : null}`}>
                    <div className="content">
                        <div className="center">
                            <a href={link} target="_blank" rel="noopener noreferrer">
                                <h2 className="ui inverted header">
                                    Go To
                                <br />
                                    {name}
                                    <br />
                                    <div className="projectIcon">
                                        <i className="big code icon" />
                                    </div>
                                </h2>
                            </a>
                        </div>
                    </div>
                </div>
                <img src={logo} style={{ width: size }} alt="logo"/>
                <div className="projectTitle">
                    {name}
                </div>
                <div className="projectDescription">
                    {description}
                </div>
            </div>
        )
    }


}

export default ProjectCard;