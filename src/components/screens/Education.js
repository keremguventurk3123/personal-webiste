import React from 'react';
import EducationCard from '../EducationCard.js';
import "../styles/Education.css";

const Education = () => {
    const schools = [
        {
            name: "Columbia University",
            location: "New York, NY",
            tenure: "Exp Dec 2021",
            degree: "M.S in Computer Science",
            logo: "columbia.jpeg",
            relevantCourses: [
                {name: "Machine Learning", link: "http://www.cs.columbia.edu/~verma/classes/ml/index.html"},
                {name: "Natural Language Processing", link:"http://www.cs.columbia.edu/~mcollins/cs4705-spring2019/"}
            ]
        },
        {
            name: "Northwestern University",
            location: "Evanston, IL",
            tenure: "Sep 2016 - Jun 2020",
            degree: "B.S in Biomedical Engineering,",
            gpa: 3.70,
            minors: "Computer Science, Cognitive Science",
            relevantCourses: [
                {name: "Software Construction", link: "https://www.mccormick.northwestern.edu/computer-science/academics/courses/descriptions/393.html"},
                {name: "Intro to AI", link: "https://www.mccormick.northwestern.edu/computer-science/academics/courses/descriptions/348.html"}, 
                {name: "Human Computer Interaction", link: "https://www.mccormick.northwestern.edu/computer-science/academics/courses/descriptions/330.html"}
            ]
        },
    ]

    const renderSchools = (schools) => {
        return schools.map((school) => {
            return <EducationCard school={school} key={school.name} />
        });
    }

    return (
        <div className="container">
            <div className="title">
                Education
            </div>
            <div className="quote">
                “Educating the mind without educating the heart is no education at all.” ― Aristotle
            </div>
            <div className="schools">
                {renderSchools(schools)}
            </div>
        </div>
    )
}

export default Education;