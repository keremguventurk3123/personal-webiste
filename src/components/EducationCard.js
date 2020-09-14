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
            return <div class="gpa"> GPA: {gpa} </div>
        }
    }

    const renderMinors = (minors) => {
        if (minors) {
            return (
                <div class="minors"> 
                    Minors: {minors}
                </div>
            )
        }
    }

    const renderRelevantCourses = (relevantCourses) => {
        const renderedCourses = relevantCourses.map(({name,link}) => {
            return (
                <div class="course"> 
                    <a href={link} target="_blank">
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
        <div class="educationContainer">
            <div class="logo">
                <img src={logo} style={{ width: size }} />
            </div>
            <div class="description">
                <div class="name"> {name} </div>
                <div class="degree"> 
                    {degree} 
                    {renderGPA(gpa)}
                </div>
                {renderMinors(minors)}
                {renderRelevantCourses(relevantCourses)}
            </div>
            <div class="information">
                {location}
                <br />
                {tenure}
            </div>
        </div>
    )
}

export default EducationCard;