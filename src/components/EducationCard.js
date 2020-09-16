import React from 'react';
import ColumbiaLogo from '../assets/columbia.png';
import NorthwesternLogo from '../assets/northwestern.png';
import "./styles/EducationCard.css";

const EducationCard = ({ school }) => {

    const { name, location, tenure, degree, minors, relevantCourses, gpa } = school;

    const nameToImage = {
        "Columbia University": {
            logo: ColumbiaLogo,
            size: "40vh"
        },
        "Northwestern University": {
            logo: NorthwesternLogo,
            size: "33vh"
        }
    }

    const {logo, size} = nameToImage[name];

    const renderGPA = (gpa) => {
        if (gpa) {
            return <div className="gpa"> GPA: {gpa} </div>
        }
    }

    const renderMinors = (minors) => {
        if (minors) {
            return (
                <div className="minors"> 
                    Minors: {minors}
                </div>
            )
        }
    }

    const renderRelevantCourses = (relevantCourses) => {
        const renderedCourses = relevantCourses.map(({name,link}) => {
            return (
                <div className="course" key={name}> 
                    <a href={link} target="_blank" rel="noopener noreferrer">
                    -     {name} 
                    </a>
                </div>
            )
        })
        return (
            <div> 
                Relevant Courses: 
                {renderedCourses}
            </div>
        );
    }

    return (
        <div className="educationContainer">
            <div className="logo">
                <img src={logo} style={{ width: size }} alt="educationLogo" />
            </div>
            <div className="description">
                <div className="name"> {name} </div>
                <div className="degree"> 
                    {degree} 
                    {renderGPA(gpa)}
                </div>
                {renderMinors(minors)}
                {renderRelevantCourses(relevantCourses)}
            </div>
            <div className="information">
                {location}
                <br />
                {tenure}
            </div>
        </div>
    )
}

export default EducationCard;