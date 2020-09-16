import React from 'react';
import './styles/Skills.css';

const Skill = (props) => {
    const { name, level } = props;

    const levelToColor = {
        1: "red",
        2: "orange",
        3: "yellow",
        4: "olive",
        5: "green"
    }

    const renderIcons = (level) => {
        const icons = []
        let key = 0
        for (var i = 0; i < level; i++) {
            icons.push(<i className={`thumbs up icon ${levelToColor[level]}`} key={key}/>)
            key++;
        }
        for (i = 0; i < 5 - level; i++) {
            icons.push(<i className={`thumbs up icon grey`} key={key}/>)
            key++;
        }
        return icons
    }

    return (
        <div className="skillContainer">
            <div className="skillName"> {name} </div>
            <div className="skillLevel"> {renderIcons(level)}</div>
        </div>
    )
}

export default Skill;