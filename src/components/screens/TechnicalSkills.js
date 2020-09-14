import React from 'react';
import Skill from '../Skill';
import '../styles/TechnicalSkills.css';

const TechnicalSkills = () => {
    const skills = [
        { name: "Python", level: 5 },
        { name: "C++", level: 3 },
        { name: "C", level: 1 },
        { name: "C#", level: 1 },
        { name: "Javascript", level: 5 },
        { name: "Matlab", level: 3 },
        { name: "HTML5/CSS", level: 4 },
        { name: "Swift", level: 3 },
        { name: "React Native", level: 5 },
        { name: "React JS", level: 5 },
        { name: "Flask", level: 1 },
        { name: "OpenCV", level: 2 },
        { name: "DynamoDB", level: 2 },
        { name: "Firebase", level: 4 },
        { name: "MongoDB", level: 3 },
        { name: "AWS Services", level: 2 },
    ]

    const renderSkills = (skills) => {
        return skills.map(({ name, level }) => {
            return (
                <Skill name={name} level={level} />
            )
        })
    }

    const skillsSorted = skills.sort((a, b) => {
        if (b.level === a.level) {
            return (a.name > b.name) ? 1 : -1
        }
        return b.level - a.level;
    })

    const leftContainerSkills = skillsSorted.slice(0, Math.floor(skillsSorted.length / 2));
    const rightContainerSkills = skillsSorted.slice(Math.floor(skillsSorted.length / 2));

    return (
        <div class="container">
            <div class="title"> 
                Technical Skills 
            </div>
            <div class="quote"> 
            “You don’t learn to walk by following rules. You learn by doing, and by falling over.” –Richard Branson 
            </div>
            <div class="skills">
                <div>
                    {renderSkills(leftContainerSkills)}
                </div>
                <div>
                    {renderSkills(rightContainerSkills)}
                </div>
            </div>
        </div>
    )
};

export default TechnicalSkills;