import React from 'react';
import ExperienceCard from '../ExperienceCard.js';
import "../styles/ProfessionalExperience.css";

const ProfessionalExperience = () => {
    const experiences = [
        {
            title: "Lead Software Developer",
            company: "Scannect",
            duration: "Jan 2020 - Present",
            content: [
                "Led frontend and backend development of Scannect, a startup company accepted in Wildfire Pre-Accelerator program, an entrepreneurship program for Northwestern’s most promising startup companies.",
                "Led a group of software engineers in developing a mobile application (in React Native and MongoDB) for companies to scan business cards and send contact information of potential customers directly to databases."
            ],
            link: "https://www.linkedin.com/company/scannect/",
            location: "Evanston, IL"
        },
        {
            title: "Software Developer Intern",
            company: "Sibel Health",
            duration: "Jun 2019 – Aug 2019",
            content: [
                "Worked in frontend and backend development team of Sibel Health, a startup company aiming to deliver better health data by producing wearable sensors integrated with advanced software, cloud services, and machine learning.",
                "Collaborated with frontend developers in programming ANNE web application (in React JS) used by clinical investigators and designated users to monitor vital signals.",
                "Wrote API of the ANNE web application (in AWS API Gateway).",
                "Met with interns and full-time developers twice a week to configure cloud services (AWS Cognito, DynamoDB, etc.). "
            ],
            link: "https://www.sibelhealth.com/",
            location: "Evanston, IL"
        },
        {
            title: "IT Consultant",
            company: "Northwestern University IT",
            duration: "May 2018 – Mar 2019",
            content: [
                "Worked at IT Helpdesk, diagnosing and solving IT related problems of NU students and faculty.",
                "Solved 1000+ problems related to IT and provided directory assistance to parents / prospective students / contractors new on campus."
            ],
            link: "https://www.it.northwestern.edu/",
            location: "Evanston, IL"
        },
        {
            title: "Research Assistant",
            company: "Simpson Querrey Institute",
            duration: "Jun 2017 - Jun 2019",
            content: [
                "Wrote image recognition applications, a (Python) software for client-based computers and an iPhone app (Swift), to determine how much sweat a patch collected given an image.",
                "Developed a computer application (in Python) to analyze and compare the RGB and LAB values of sweat in multiple devices and determine composition of certain chemicals given information about the first image."
            ],
            link: "https://sqi.northwestern.edu/",
            location: "Evanston, IL",
        }
    ];

    const renderExperiences = (experiences) => {
        return experiences.map((experience) => <ExperienceCard experience={experience} key={experience.title}/>)
    }

    return (
        <div className="container">
            <div className="title">
                Professional Experience
            </div>
            <div className="quote">
                “Don’t judge each day by the harvest you reap but by the seeds that you plant.” ― Robert Louis Stevenson
            </div>
            <div>
                {renderExperiences(experiences)}
            </div>
        </div>
    )
}

export default ProfessionalExperience;