import React from 'react';
import ProjectCard from '../ProjectCard';
import "../styles/Projects.css";

const Projects = () => {
    const projects = [
        {
            name: "Free Pictures",
            description: "This is a react-js application dedicated to finding copyright-free images to use for your website via Unsplash API. Just search for a keyword and 10 copyright-free images will pop on your screen. If you hover over the images, you'll have the option of either downloading or viewing the image. Enjoy!",
            imageName: "UnSplash",
            link: "https://5f61d52d2533685d89c42f6e--youthful-hamilton-73ef90.netlify.app/"
        },
        {
            name: "Restaurant Locator",
            description: "This is a react-native application dedicated to finding restaurants near your via Yelp API. The app will automatically find your location and you will have the option of searching for any keyword you want (e.g 'pasta', 'chinese', etc.). You can also click on the restaurant to gain additional info. Clicking on this widget will direct you to my github page in which further explanations on how to download and use this application are provided. ",
            imageName: "Yelp",
            link: "https://github.com/keremguventurk3123/restaurant-locator"
        },
        {
            name: "Get Your Cocktail!",
            description: "This is a react-js application dedicated to suggesting you some refreshing cocktails for the night. Sign in with your Gmail account to view and select from our cocktail selection to add to your favorites list. The app has a server (going to run on localhost:3001) that you would need to setup before using the website. It'll be opened as you click this card. ",
            imageName: "Cocktails",
            link: "https://github.com/keremguventurk3123/cocktails"
        }
    ];

    const renderProjects = (projects) => {
        return projects.map((project) => {
            return (
                <div className="projectCard" key={project.name}>
                    <ProjectCard project={project} />
                </div>
            )
        });
    }

    return (
        <div className="container">
            <div className="title">
                Sample Projects
            </div>
            <div className="quote">
                “Don’t judge each day by the harvest you reap but by the seeds that you plant.” ─ Robert Louis Stevenson
            </div>
            <div className="explanation">
                Here's some mini-projects that I've built!
            </div>
            <div className="projectContent">
                {renderProjects(projects)}
            </div>
            <div className="linkToProject">
                <a href="https://github.com/keremguventurk3123/personal-webiste" target="_blank" rel="noopener noreferrer">
                    <button class="ui github button">
                        <i class="github icon"></i>
                    Check out source code of this website on GitHub!
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Projects;