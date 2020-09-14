import React from 'react';
import Education from './screens/Education';
import TechnicalSkills from './screens/TechnicalSkills';
import ProfessionalExperience from './screens/ProfessionalExperience';
import Introduction from './screens/Introduction';

class App extends React.Component {
    render() {
        return (
            <div>
                <Introduction />
                <Education />
                <TechnicalSkills />
                <ProfessionalExperience />
            </div>
        )
    }
}

export default App;