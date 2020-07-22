import React, { Component } from 'react'
import Navigation from '../../Containers/Navigation/Navigation'
import Button from 'react-bootstrap/Button'
import resume from './resume.pdf'
import './Resume.scss'

class Resume extends Component {
    render() {
        return(
            <div>
                <Navigation />
                <div className="resume-header">
                    <h1>Resume</h1>
                    <a href={resume} download>
                        <button type="button" className="btn btn-primary resume-button">Click here to download my resume</button>
                    </a>
                </div>

            </div>
        )
    }
}

export default Resume