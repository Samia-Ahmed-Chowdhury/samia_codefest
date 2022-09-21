import React, { useState } from 'react'
import "./Navbar.css"
import Slide from './Slide';
import { Link, NavLink } from 'react-router-dom';
import {  } from "react-router-dom";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LockPersonIcon from '@mui/icons-material/LockPerson';

function Navbar() {
    const [show, setShow] = useState(false)
    return (
        <>
            {/* <!-- ------------------------- top bar ------------------------- --> */}

            <section id="topbar" className="topbar">
                <div className="container">
                    <div className="row">
                        <div className="top_left_bar col-lg-6 col-md-6 ">
                            <ul>
                                <li>
                                    <Link className="top_btn">Guarantee</Link> 30-Day Money-Back Offer <span> Get Started</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


            {/* <!-- ------------------------- END ---------top bar ------------------------- --> */}

            {/* <!-- ------------------------- Navbar bar ------------------------- --> */}

            <nav className="navbar navbar-expand-lg py-4">
                <div className="container-fluid">

                    <NavLink to="/" >
                        <svg xmlns="http://www.w3.org/2000/svg" data-v-7111483a="" className='long_logo' width="150" height="30" viewBox="0 0 150 30" fill="white"> <path data-v-7111483a="" fillRule="evenodd" clipRule="evenodd" d="M45.1114 8.89822H47.9253V21.3612H45.1114V16.0739H40.3857V21.3612H37.5718V8.89822H40.3857V13.6637H45.1114V8.89822Z" /> <path data-v-7111483a="" fillRule="evenodd" clipRule="evenodd" d="M54.4949 15.1209C54.4949 15.732 54.5698 16.2835 54.7201 16.7752C54.8704 17.267 55.0871 17.6895 55.3698 18.0431C55.6518 18.3972 55.9978 18.6695 56.4069 18.8612C56.8155 19.0535 57.2843 19.1496 57.8137 19.1496C58.3305 19.1496 58.7966 19.0535 59.2117 18.8612C59.6261 18.6695 59.9752 18.3972 60.2574 18.0431C60.5399 17.6895 60.7568 17.267 60.9071 16.7752C61.0574 16.2835 61.1326 15.732 61.1326 15.1209C61.1326 14.5091 61.0574 13.9546 60.9071 13.4569C60.7568 12.9595 60.5399 12.5342 60.2574 12.1802C59.9752 11.8266 59.6261 11.5535 59.2117 11.3621C58.7966 11.1702 58.3305 11.0744 57.8137 11.0744C57.2843 11.0744 56.8155 11.1732 56.4069 11.3709C55.9978 11.5688 55.6518 11.8447 55.3698 12.1985C55.0871 12.5521 54.8704 12.9776 54.7201 13.475C54.5698 13.9729 54.4949 14.5214 54.4949 15.1209ZM64.0369 15.1209C64.0369 16.1877 63.8773 17.1262 63.5593 17.935C63.2402 18.7445 62.8041 19.4219 62.2513 19.9672C61.6982 20.5131 61.0397 20.9235 60.2762 21.1991C59.5128 21.4753 58.6918 21.6131 57.8144 21.6131C56.9604 21.6131 56.1551 21.4753 55.3974 21.1991C54.6398 20.9235 53.9782 20.5131 53.4133 19.9672C52.8478 19.4219 52.4034 18.7445 52.0786 17.935C51.754 17.1262 51.5913 16.1877 51.5913 15.1209C51.5913 14.0537 51.7598 13.1154 52.0965 12.3064C52.4329 11.4969 52.8872 10.8164 53.4584 10.2649C54.0292 9.71341 54.6907 9.29998 55.4426 9.02411C56.1937 8.74799 56.9846 8.60993 57.8144 8.60993C58.6679 8.60993 59.4734 8.74799 60.2313 9.02411C60.9887 9.29998 61.65 9.71341 62.2152 10.2649C62.7802 10.8164 63.2253 11.4969 63.5499 12.3064C63.8748 13.1154 64.0369 14.0537 64.0369 15.1209Z" /> <path data-v-7111483a="" fillRule="evenodd" clipRule="evenodd" d="M71.1123 19.2212C71.5091 19.2212 71.8367 19.1885 72.0952 19.1221C72.3537 19.0565 72.5613 18.9667 72.7174 18.852C72.8735 18.7386 72.982 18.6038 73.0423 18.4479C73.1025 18.2922 73.1326 18.1182 73.1326 17.9263C73.1326 17.5189 72.9399 17.1797 72.5552 16.9104C72.1704 16.6403 71.5091 16.3498 70.5713 16.0375C70.1623 15.8942 69.7534 15.7289 69.3446 15.5433C68.9358 15.3578 68.569 15.1239 68.2444 14.842C67.9201 14.5603 67.6553 14.2186 67.451 13.8164C67.2464 13.4151 67.1443 12.9267 67.1443 12.3511C67.1443 11.7755 67.2525 11.2569 67.4689 10.7954C67.6855 10.3337 67.992 9.94143 68.389 9.61728C68.7857 9.29338 69.2664 9.04517 69.8316 8.87089C70.3968 8.69737 71.0339 8.60986 71.7436 8.60986C72.5853 8.60986 73.3129 8.70039 73.9263 8.87995C74.5391 9.05975 75.0443 9.25792 75.441 9.47368L74.6297 11.6857C74.2806 11.5059 73.8927 11.3469 73.4662 11.2089C73.0392 11.0713 72.5252 11.0019 71.9242 11.0019C71.2506 11.0019 70.7666 11.0955 70.472 11.2811C70.1774 11.4669 70.0298 11.7518 70.0298 12.1351C70.0298 12.3632 70.0843 12.5553 70.1925 12.7107C70.3005 12.8666 70.4541 13.0074 70.6523 13.1334C70.8508 13.2592 71.0793 13.3733 71.3381 13.4749C71.5961 13.577 71.8818 13.6817 72.1948 13.7895C72.8438 14.0297 73.409 14.2663 73.8902 14.5002C74.3709 14.7341 74.7709 15.0069 75.0897 15.3185C75.408 15.6301 75.6456 15.996 75.8022 16.4157C75.9581 16.8357 76.0365 17.3449 76.0365 17.9439C76.0365 19.107 75.6274 20.0093 74.8098 20.6506C73.9921 21.2924 72.7595 21.6133 71.1123 21.6133C70.5592 21.6133 70.0601 21.5801 69.6152 21.5142C69.1703 21.4478 68.7766 21.3671 68.4339 21.2712C68.0913 21.1754 67.7965 21.0736 67.5498 20.9657C67.3034 20.8576 67.0961 20.756 66.9276 20.6597L67.7216 18.4298C68.0939 18.634 68.5539 18.8166 69.1015 18.978C69.6483 19.1402 70.3189 19.2212 71.1123 19.2212Z" /> <path data-v-7111483a="" fillRule="evenodd" clipRule="evenodd" d="M88.4327 8.89829V11.2903H84.6629V21.3613H81.8492V11.2903H78.0792V8.89829H88.4327Z" /> <path data-v-7111483a="" fillRule="evenodd" clipRule="evenodd" d="M91.5579 21.3616H94.3718V8.89834H91.5579V21.3616Z" /> <path data-v-7111483a="" fillRule="evenodd" clipRule="evenodd" d="M106.967 21.3613C106.162 19.9347 105.29 18.5261 104.352 17.135C103.414 15.744 102.416 14.4313 101.358 13.1963V21.3613H98.58V8.89832H100.871C101.267 9.29364 101.706 9.77925 102.187 10.3549C102.668 10.9305 103.158 11.5451 103.657 12.1985C104.156 12.8518 104.652 13.5293 105.145 14.2304C105.638 14.9318 106.101 15.606 106.534 16.2535V8.89832H109.33V21.3613H106.967Z" /> <path data-v-7111483a="" fillRule="evenodd" clipRule="evenodd" d="M119.634 11.0564C118.324 11.0564 117.376 11.419 116.793 12.1443C116.21 12.8698 115.919 13.8616 115.919 15.121C115.919 15.7319 115.99 16.2869 116.135 16.7843C116.279 17.2815 116.496 17.71 116.784 18.0699C117.073 18.4297 117.433 18.7086 117.866 18.9065C118.299 19.1042 118.804 19.203 119.381 19.203C119.694 19.203 119.962 19.197 120.184 19.1852C120.406 19.1733 120.602 19.1495 120.77 19.1132V14.7793H123.584V20.9478C123.247 21.0798 122.706 21.2204 121.961 21.37C121.215 21.5196 120.295 21.5951 119.201 21.5951C118.263 21.5951 117.412 21.451 116.649 21.1635C115.885 20.8753 115.233 20.4561 114.692 19.9044C114.151 19.3531 113.733 18.6754 113.438 17.8722C113.143 17.0695 112.996 16.1521 112.996 15.121C112.996 14.0777 113.159 13.1545 113.484 12.351C113.808 11.548 114.252 10.867 114.818 10.3098C115.383 9.75224 116.047 9.32976 116.811 9.04207C117.575 8.75413 118.389 8.60978 119.255 8.60978C119.844 8.60978 120.376 8.64926 120.851 8.72697C121.326 8.80518 121.735 8.89496 122.078 8.99706C122.421 9.09865 122.703 9.20352 122.926 9.31165C123.148 9.41954 123.307 9.50378 123.404 9.56364L122.592 11.8113C122.207 11.6076 121.765 11.4311 121.266 11.281C120.767 11.1311 120.223 11.0564 119.634 11.0564Z" /> <path data-v-7111483a="" fillRule="evenodd" clipRule="evenodd" d="M127.521 21.3613V8.89832H135.963V11.2542H130.335V13.6998H135.331V16.0021H130.335V19.0055H136.378V21.3613H127.521Z" /> <path data-v-7111483a="" fillRule="evenodd" clipRule="evenodd" d="M143.596 11.1462C143.392 11.1462 143.209 11.1522 143.046 11.164C142.884 11.1764 142.731 11.1884 142.586 11.2V14.5809H143.38C144.438 14.5809 145.195 14.4496 145.652 14.1855C146.109 13.9223 146.337 13.4724 146.337 12.8366C146.337 12.225 146.106 11.791 145.643 11.5325C145.18 11.2752 144.498 11.1462 143.596 11.1462ZM143.435 8.75414C145.311 8.75414 146.748 9.08659 147.746 9.75225C148.744 10.4177 149.243 11.4517 149.243 12.8547C149.243 13.7296 149.042 14.4405 148.639 14.986C148.236 15.5312 147.656 15.9602 146.898 16.2716C147.151 16.5836 147.415 16.9402 147.692 17.3418C147.968 17.7437 148.242 18.1634 148.513 18.601C148.783 19.0386 149.045 19.494 149.297 19.9673C149.549 20.4413 149.784 20.9058 150 21.3612H146.855C146.625 20.9536 146.393 20.5401 146.158 20.1204C145.922 19.701 145.681 19.2931 145.434 18.8972C145.187 18.5014 144.941 18.1272 144.701 17.7736C144.459 17.4195 144.217 17.0989 143.976 16.8107H142.587V21.3612H139.774V9.07754C140.387 8.95834 141.021 8.87384 141.676 8.82631C142.332 8.77803 142.918 8.75414 143.435 8.75414Z" /> <path data-v-7111483a="" fillRule="evenodd" clipRule="evenodd" d="M0.000249566 14.046V0.000497794L7.08916 3.78046V10.1086L16.4735 10.1132L23.6774 14.046H0.000249566ZM18.3925 8.95058V0L25.6725 3.6859V13.1797L18.3925 8.95058ZM18.3924 26.1177V19.8441L8.93577 19.8375C8.9446 19.8793 1.6123 15.8418 1.6123 15.8418L25.6725 15.9547V30L18.3924 26.1177ZM0 26.1177L0.000252212 16.9393L7.08916 21.0683V29.8033L0 26.1177Z" /></svg>

                        <svg xmlns="http://www.w3.org/2000/svg" data-v-7111483a="" className='short_logo' width="50" height="30" viewBox="0 0 50 30" fill="white">
                            <path data-v-7111483a="" fillRule="evenodd" clipRule="evenodd" d="M0.000249566 14.046V0.000497794L7.08916 3.78046V10.1086L16.4735 10.1132L23.6774 14.046H0.000249566ZM18.3925 8.95058V0L25.6725 3.6859V13.1797L18.3925 8.95058ZM18.3924 26.1177V19.8441L8.93577 19.8375C8.9446 19.8793 1.6123 15.8418 1.6123 15.8418L25.6725 15.9547V30L18.3924 26.1177ZM0 26.1177L0.000252212 16.9393L7.08916 21.0683V29.8033L0 26.1177Z"></path>
                        </svg>
                    </NavLink>

                    <div className='ms-auto'>
                        <ul className='hidden_ul d-flex'>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">
                                <LockPersonIcon style={{fontSize:"2.5rem"}}/>
                                </NavLink>
                            </li>
                            <li className="nav-item d-flex align-items-center ">
                                <ShoppingCartIcon style={{fontSize:"2.5rem",color:"white"}} />
                            </li>
                        </ul>
                    </div>

                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-lg-0 d-flex align-items-center justify-content-center">
                            <div className="d-flex ">
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
                                            Google Workspace Email Hosting
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

                            </div>
                        </ul>
                        <ul className='my-2'>
                            <div className="widget d-flex">
                                <li className="nav-item nav_btn_link">
                                    <NavLink className=" nav-link" to="/login">
                                        <button type="btn" className="nav_btn">Login</button>
                                    </NavLink>
                                </li>
                                <li className="nav-item d-flex align-items-center ">
                                    <ShoppingCartIcon className="icons_cart" />
                                </li>
                            </div>

                        </ul>
                    </div>

                    <label>
                        <input className="toggle_btn" type="checkbox" id="toggle_btn" onClick={() => setShow(!show)} />
                        <div className="toggle navbar-toggler " id="navbar-toggler">
                            <span className="top_line common"></span>
                            <span className="mid_line common"></span>
                            <span className="end_line common"></span>
                        </div>
                    </label>
                </div>
            </nav>

            {
                show ? <Slide /> : null
            }

            {/* <!-- -------------------------End--- Navbar bar ------------------------- --> */}

        </>
    )
}

export default Navbar