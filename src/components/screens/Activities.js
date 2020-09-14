import React from 'react';
import "../styles/Activities.css";

const contentBasketball = 
    <div> 
        basketball 
    </div>;

const content = {
    basketball: contentBasketball,
    comedy: "comedy",
    charity: "habitat for humanity"
}

class Activities extends React.Component {
    state = {
        contentToShow: "basketball"
    }

    render() {
        return (
            <div className="container">
                <div className="title">
                    What I Like To Do
                </div>
                <div className="quote">
                    “If you plan to make your hobby your work, make something else your hobby. You will still need hobbies.” ― Vineet Raj Kapoor
                </div>
                <div className="activities">
                    <div className="activityIcons">
                        <div className="activityIcon" onMouseEnter={() => this.setState({ contentToShow: "basketball" })}>
                            <i className="basketball ball icon orange massive" />
                        </div>
                        <div className="activityIcon" onMouseEnter={() => this.setState({ contentToShow: "comedy" })}>
                            <i className="pencil alternate icon massive" />
                        </div>
                        <div className="activityIcon" onMouseEnter={() => this.setState({ contentToShow: "charity" })}>
                            <i className="home icon massive" />
                        </div>
                    </div>
                    <div className="activityDescription">
                        {content[this.state.contentToShow]}
                    </div>

                </div>
            </div>
        )
    }
};

export default Activities;