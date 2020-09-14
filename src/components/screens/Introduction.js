import React from 'react';
import Graduation from '../../assets/graduation.jpg';
import "../styles/Introduction.css";

const Introduction = () => {
    return (
        <div className="introductionContainer">
            <div className="background">
                <div className="introductionTitle">
                 ─── Hey, I'm Kerem! ───
                    <div className="introductionDescription">
                        I like to program, have fun, and spend time with my loved ones. 
                        <br />
                        <br />
                        <br />
                        Hope you'll enjoy my resume.
                    </div>
                </div>
            </div>
            <img src={Graduation} style={{ height: "100vh" }} />
        </div>
    )
}

export default Introduction;