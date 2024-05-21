import React from 'react'
// import { Link } from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav id='main-nav' className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                            {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
                        </li>
                        <li className="nav-item">
                            {/* <Link className="nav-link" to="/about">About</Link> */}
                        </li>
                    </ul>
                    <div className="form-check form-switch">
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.modeText}</label>
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;