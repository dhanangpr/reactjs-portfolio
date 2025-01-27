import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
  render() {
    return (
        <React.Fragment>
            <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu"></i></button>
            <header id="header">
                <div className="d-flex flex-column">
                    <div className="profile">
                        <img src="../../assets/img/PraStudio.jpg" alt="" className="img-fluid rounded-circle"></img>
                        <h1 className="text-light"><Link to="/">Dhanang Prasetya</Link></h1>
                        <div className="social-links mt-3 text-center">                            
                            <Link to="#" className="facebook"><i className="bx bxl-facebook"></i></Link>
                            <Link to="#" className="instagram"><i className="bx bxl-instagram"></i></Link>                            
                            <Link to="#" className="linkedin"><i className="bx bxl-linkedin"></i></Link>
                        </div>
                    </div>
                    <nav className="nav-menu">
                        <ul>
                            <li className="active"><Link to="#hero"><i className="bx bx-home"></i> <span><b>Home</b></span></Link></li>
                            <li><Link to="#about"><i className="bx bx-user"></i> <span><b>About</b></span></Link></li>
                            <li><Link to="#experience"><i className="bx bx-file-blank"></i> <span><b>Experience</b></span></Link></li>
                            <li><Link to="#skills"><i className="bx bx-file-blank"></i> <span><b>Skills</b></span></Link></li>
                            <li><Link to="#awards"><i className="bx bx-book-content"></i><b>Awards</b></Link></li>
                            <li><Link to="#interests"><i className="bx bx-server"></i><b>Interests</b></Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </React.Fragment>
    );
  }
}

export default Sidebar;