import React from 'react'
import '../Home/Home.css'

function Hero() {
    return (
        <>
            <section id="hero" className="hero">
                
                    <div className="container py-5 ">
                    <div className="overlay_shape">
                        <div className="row py-4">
                            <div className="col-xl-6 col-lg-8 col-md-12 col-sm-12 col-12 m-auto ">
                                <h5>Welcome To <span> Hostinger</span></h5>
                                <h1>Web Hosting as Dynamic as Your Business</h1>
                                <p>Start your journey with our Premium plan and get a personal domain, lifetime SSL, and DDoS protection for free with a yearly subscription.
                                    To power up your website, we use innovative site hosting technologies.
                                </p>
                                <div className="h-btn pt-2">
                                        <button className="hero-btn" href="#">Get Started</button>
                                        <button className="hlper-btn" href="#">Contact Us</button>
                                </div>
                            </div>
                            <div className="blank_div col-xl-6 col-lg-4 col-md-0 col-sm-0 col-0 d-flex justify-content-center m-auto ">
                                <img src="../images/rocket.svg" alt="svf" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero