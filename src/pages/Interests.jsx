import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Interests extends Component {
    render() {
        return (
            <React.Fragment>
                <main id="main">
                    <section id="interests" className="services">
                        <div className="container">
                            <div className="section-title">
                                <h2>Interests</h2>
                                <p>Dedicated team approach is best suited if you’re looking for a long collaboration on a complex project that will begin from scratch. This is best suited for projects that fall under the sphere of Fintech and blockchain technology.</p>
                                <p>It’s because it helps you adapt in real-time to any evolving business needs or the changes taking place in the market. This model gives you the most control as you can choose the professionals from our company as your employees without handling any hassles of infrastructure, recruitment, and administration.</p>
                            </div>
                            <br></br>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                                    <div className="icon"><i className="icofont-computer"></i></div>
                                    <h4 className="title"><Link to="">Desktop App</Link></h4>
                                    <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                                </div>
                                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                                    <div className="icon"><i className="icofont-chart-bar-graph"></i></div>
                                    <h4 className="title"><Link to="">Graphic Design</Link></h4>
                                    <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                                </div>
                                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                                    <div className="icon"><i className="icofont-earth"></i></div>
                                    <h4 className="title"><Link to="">Web App</Link></h4>
                                    <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                                </div>                                                             
                            </div>
                        </div>
                    </section>
                   
                </main>
            </React.Fragment>
        );
    }
}

export default Interests;