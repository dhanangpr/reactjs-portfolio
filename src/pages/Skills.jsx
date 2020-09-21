import React, { Component } from 'react';

class Skills extends Component {
    render() {
        return (
            <React.Fragment>
                <main id="main">
                <section id="skills" className="skills section-bg">
                        <div className="container">
                            <div className="section-title">
                                <h2>Skills</h2>
                            </div>

                            <div className="row skills-content">
                                <div className="col-lg-12" data-aos="fade-up">
                                    <div className="progress">
                                        <span className="skill">HTML <i className="val">90%</i></span>
                                        <div className="progress-bar-wrap">
                                            <div className="progress-bar" role="progressbar" style={{width: 90 + '%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <span className="skill">CSS <i className="val">90%</i></span>
                                        <div className="progress-bar-wrap">
                                          <div className="progress-bar" role="progressbar" style={{width: 90 + '%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <span className="skill">JavaScript <i className="val">75%</i></span>
                                        <div className="progress-bar-wrap">
                                            <div className="progress-bar" role="progressbar" style={{width: 75 + '%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <span className="skill">PHP <i className="val">90%</i></span>
                                        <div className="progress-bar-wrap">
                                            <div className="progress-bar" role="progressbar" style={{width: 90 + '%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <span className="skill">MySQL <i className="val">85%</i></span>
                                        <div className="progress-bar-wrap">
                                            <div className="progress-bar" role="progressbar" style={{width: 85 + '%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <span className="skill">Bootstrap <i className="val">80%</i></span>
                                        <div className="progress-bar-wrap">
                                            <div className="progress-bar" role="progressbar" style={{width: 80 + '%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <span className="skill">React JS <i className="val">15%</i></span>
                                        <div className="progress-bar-wrap">
                                            <div className="progress-bar" role="progressbar" style={{width: 15 + '%'}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </React.Fragment>
        );
    }
}
export default Skills;