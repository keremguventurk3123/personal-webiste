import React from 'react';
import "../styles/Publications.css";

const Publications = () => {

    const content = [
        { "title": "Summary", "description": " A soft, wearable microfluidic platform collects and quantitatively analyzes sweat biomarkers with potential to improve diagnosis and management of cystic fibrosis." },
        { "title": "Authors", "description": " Tyler R. Ray, John A. Rogers, Paul Curtis, Daniel Franklin, Kerem Guventurk + 17 others" },
        { "title": "Publication", "description": " Science Translational Medicine" },
    ]

    const renderContent = (content) => {
        const renderedContent = content.map((c) => {
            var { title, description } = c
            return (
                <div className="content" key={c}>
                    {title}:
                    {description}
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
        <div className="container">
            <div className="title">
                Publications
            </div>
            <div className="quote">
                “Equipped with his five senses, man explores the universe around him and calls the adventure Science.” ― Edwin Powell Hubble
            </div>
            <div className="publicationContainer">
                <div className="descriptionPublication">
                    <div className="paper">
                        Soft, skin-interfaced sweat stickers for cystic fibrosis diagnostics and management
                    </div>
                    {renderContent(content)}
                </div>
                <div className="duration">
                    Evanston, IL
                    <br />
                    Jul 2020
                </div>
            </div>
        </div>
    )
}

export default Publications;