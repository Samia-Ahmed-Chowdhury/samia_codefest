import React from 'react'
import { NavLink } from 'react-router-dom';

function Slide() {
    return (
        <>
            <div className="slide" id="slide" style={{ position: "fixed" }}>
                <ul className="">
                        <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" to="/page" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Hosting
                            </NavLink>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><NavLink className="dropdown-item" to="/page">
                                    <img src="../images/web.svg" alt='img' />
                                    Web Hosting
                                </NavLink></li>
                                <li><NavLink className="dropdown-item" to="/page">
                                    <img src="../images/cloud.svg" alt='img' />
                                    Cloud Web Hosting
                                </NavLink></li>
                                <li><NavLink className="dropdown-item" to="/page">
                                    <img src="../images/wordpress.svg" alt='img' />
                                    WordPress Hosting
                                </NavLink></li>
                                <li><NavLink className="dropdown-item" to="/page">
                                    <img src="../images/agency.svg" alt='img' />
                                    Hosting for Agencies
                                </NavLink></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" to="/page" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                VPS
                            </NavLink>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><NavLink className="dropdown-item" to="/page">
                                    <img src="../images/vps1.svg" alt='img' />
                                    VPS Hosting
                                </NavLink></li>
                                <li><NavLink className="dropdown-item" to="/page">
                                    <img src="../images/vps2.svg" alt='img' />
                                    CyberPanel Hosting
                                </NavLink></li>
                                <li><NavLink className="dropdown-item" to="/page">
                                    <img src="../images/vps3.svg" alt='img' />
                                    Minecraft Server Hosting
                                </NavLink></li>

                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" to="/page" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                            
                                Email
                            </NavLink>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><NavLink className="dropdown-item" to="/page">
                                    <img src="../images/em1.svg" alt='img' />
                                    Google Email Hosting
                                </NavLink></li>
                                <li><NavLink className="dropdown-item" to="/page">
                                    <img src="../images/em2.svg" alt='img' />
                                    Titan Email Hosting
                                </NavLink></li>


                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" to="/page" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Domain
                            </NavLink>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><NavLink className="dropdown-item" to="/page">
                                    <img src="../images/dm1.svg" alt='img' />
                                    Domain Checker
                                </NavLink></li>
                                <li><NavLink className="dropdown-item" to="/page">
                                    <img src="../images/dm2.svg" alt='img' />
                                    WHOIS Lookup
                                </NavLink></li>
                                <li><NavLink className="dropdown-item" to="/page">
                                    <img src="../images/dm3.svg" alt='img' />
                                    Domain Transfer
                                </NavLink></li>

                            </ul>
                        </li>

             
                </ul>
            </div>
        </>
    )
}

export default Slide