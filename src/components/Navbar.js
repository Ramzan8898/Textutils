import React from 'react'
import { Link } from "react-router-dom";

const Navbar = (props) => {
    return (
        <>
            <nav id='main-nav' className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    {/* <a className="navbar-brand" href="#">{props.title}</a> */}
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-content" aria-controls="nav-content" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div className="form-check form-switch">
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.modeText}</label>
                    </div>
                    
                </div>
            </nav>
        </>

    );
}
export default Navbar;