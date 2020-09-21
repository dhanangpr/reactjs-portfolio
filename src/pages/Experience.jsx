import React, { Component } from 'react';

class Experience extends Component {
    render() {
        return (
            <React.Fragment>
                <main id="main">
                    <section id="experience" className="resume">
                        <div className="container">
                            <div className="section-title">
                              <h2>Experience</h2>
                            </div>
                            <div className="row">
                                <div className="col-lg-6" data-aos="fade-up">                                  
                                    <h3 className="resume-title">Education</h3>
                                    <div className="resume-item">
                                        <h4>Diploma of Computer Information Systems</h4>
                                        <h5>2012 - 2015</h5>
                                        <p><em>Gadjah Mada University, Yogyakarta</em></p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6" data-aos="fade-up">                                  
                                    <h3 className="resume-title">Works</h3>
                                    <div className="resume-item">
                                        <h4>Assistant Officer of Smelter Carbon Preparation</h4>
                                        <h5>2016 - 2018</h5>
                                        <p><em>PT Indonesia Asahan Aluminium (Persero)</em></p>
                                    </div>
                                    <div className="resume-item">
                                        <h4>Assistant Superintendent of Smelter Carbon Preparation</h4>
                                        <h5>2018 - 2020</h5>
                                        <p><em>PT Indonesia Asahan Aluminium (Persero)</em></p>
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

export default Experience;