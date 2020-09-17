import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg mb-4 navbar-light bg-white shadow-sm">
            <div className="container-fluid">
                <a className="navbar-brand" href="#a">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#a">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#a">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#a" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                        </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#a">Action</a>
                                <a className="dropdown-item" href="#a">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#a">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item">
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
