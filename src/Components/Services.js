import React from 'react'
import PartServices from './PartServices'

function Services() {
    return (
        <>
            <section id="service" class="service my-5 pt-5" >
                <div class="container py-5 ">
                    <div class="row">
                        <div class=" col-xl-4 col-lg-4 col-md-6 col-sm-10 col-10  m-auto ">
                            <h2>Our Best Hosting Services</h2>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <PartServices {...ServicesList[0]}/>
                        <div class=" col-xl-4 col-lg-4 col-md-10 col-sm-10 col-10  m-auto d-flex justify-content-center ">
                            <img src="images/service.png" class=" img-fluid service_img " alt="..." />
                        </div>
                        <PartServices {...ServicesList[1]}/>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Services

const ServicesList = [
    {
        clsNm:"points",
        h6_1: "24/7/365 Live Support",
        p_1: "Worried you won’t get help when you need it the most? You shouldn't be. Our Customer Success team is ready to help you 24/7/365 with all topics related to  .",
        h6_2: "Top-Performing Websites",
        p_2: "Don’t let poor speed scores bring your website down. From HTTP/3 to self-healing infrastructure, full SSD servers, and unlimited bandwidth, offer your .",
        h6_3: "Migrate with Ease, for Free",
        p_3: "We won’t charge you for migrating your website to Hostinger, and we’ll take care of the process so you can focus on what ..",
    },
    {
        clsNm:"points2",
        h6_1: "Everything You Need to know",
        p_1: "Let your WordPress website shine. Get the best results with LiteSpeed-powered servers and custom-built advanced WordPress optimization tools..",
        h6_2: "We Take Security Seriously",
        p_2: "Don’t leave your website vulnerable to cyber attacks. Instead, get an in-house developed WAF with our Premium and Business web hosting plans..",
        h6_3: "No Experience Required",
        p_3: "With Hostinger,you don’t need to be a pro to get started.Thanks to our easy-to-use control panel,  best hosting  launch.",
    },
]