import React from 'react';
import ExperienceCard from '../ExperienceCard.js';
import "../styles/ProfessionalExperience.css";

const ProfessionalExperience = () => {
    const experiences = [
        {
            title: "Lead Software Developer",
            company: "Vybe",
            duration: "Sep 2020 - Present",
            content: [
                "Currently leading frontend and backend development of Vybe, an early-stage startup that aims to revolutionize the way young professionals connect and create their own micro-communities.",
                "Refactored 20+ screens and programmed 8 new screens for application’s frontend (in React Native).",
                "Refactored backend of the application and wrote tests (in Django)."
            ],
            location: "New York, NY"
        },
        {
            title: "Lead Software Developer",
            company: "Scannect",
            duration: "Jan 2020 - Present",
            content: [
                "Currently leading frontend and backend development of Scannect, a startup company aiming to enable companies to scan business cards and transfer contact information to databases from a mobile app.",
                "Programmed 20+ screens for application’s frontend (in React Native).",
                "Wrote 10+ API endpoints, created a user profile, and configured authentication for backend (in Firebase)."
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
                "Collaborated with 6 frontend developers in programming a web application (in React JS), programming 5 screens and developing demo version of website.",
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
                “I’m a great believer in luck, and I find the harder I work, the more I have of it.” ― Thomas Jefferson
            </div>
            <div>
                {renderExperiences(experiences)}
            </div>
        </div>
    )
}

export default ProfessionalExperience;