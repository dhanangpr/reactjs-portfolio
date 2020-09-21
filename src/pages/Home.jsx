import React, { Component } from 'react';


class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
                  <div className="hero-container" data-aos="fade-in">
                    <h1>Dhanang Prasetya</h1>
                    <p>PraStudio</p>
                  </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Home;