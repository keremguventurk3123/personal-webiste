import React from 'react';
import Education from './screens/Education';
import TechnicalSkills from './screens/TechnicalSkills';
import ProfessionalExperience from './screens/ProfessionalExperience';
import Introduction from './screens/Introduction';
import Projects from './screens/Projects';

class App extends React.Component {
    render() {
        return (
            <div>
                <Introduction />
                <Education />
                <TechnicalSkills />
                <ProfessionalExperience />
                <Projects />
            </div>
        )
    }
}

export default App;