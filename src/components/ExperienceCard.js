import React from 'react';
import SibelHealthLogo from '../assets/sibel_health.jpg';
import ScannectLogo from '../assets/scannect.png';
import NorthwesternLogo from '../assets/northwestern-thumb.jpg';
import SimpsonQuerreyLogo from '../assets/simpson_querrey.png';
import "./styles/ExperienceCard.css";

const ExperienceCard = ({ experience }) => {
    const { title, company, duration, content, link, location } = experience;

    const companyToImage = {
        "Scannect": {
            logo: ScannectLogo,
            size: "35vh"
        },
        "Sibel Health": {
            logo: SibelHealthLogo,
            size: "40vh"
        },
        "Northwestern University IT": {
            logo: NorthwesternLogo,
            size: "25vh"
        },
        "Simpson Querrey Institute": {
            logo: SimpsonQuerreyLogo,
            size: "28vh"
        }
    }

    const { logo, size } = companyToImage[company];

    const renderContent = (content) => {
        const renderedContent = content.map((description) => {
            return (
                <div className="content" key={description}> 
                    -     {description} 
                </div>
            )
        })
        return (
            <div> 
                {renderedContent}
            </div>
        );
    }

    return (
        <div className="experienceContainer">
            <div className="logo">
                <img src={logo} style={{ width: size }} alt="experienceLogo"/>
            </div>
            <div className="descriptionExperience">
                <div className="company">
                    <a href={link} target="_blank" rel="noopener noreferrer">{company}</a>
                </div>
                <div className="position"> 
                    {title} 
                </div>
                {renderContent(content)}
            </div>
            <div className="duration">
                {location}
                <br />
                {duration}
            </div>
        </div>
    )
}

export default ExperienceCard;