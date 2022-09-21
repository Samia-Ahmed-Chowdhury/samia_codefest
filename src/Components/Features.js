import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function Features() {
  return (
    <>
       <section id="features" className="features">
        <div className="container  ">
            <div className="row">
            <p>More Features</p>
            <h2>See What's inside....</h2>
            <div className="card-div col-xl-3 col-lg-6 col-md-6 col-sm-10 col-10  m-auto ">
                    <div className="card">
                        <div className="card_img d-flex justify-content-center">
                            <img src="../images/s1.png" className=" img-fluid " alt="..." />
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">VPS Hosting</h3>
                            <ul>
                            <li><span><CheckCircleOutlineIcon /></span>
                            Up To 8GB RAM
                            </li>
                            <li><span><CheckCircleOutlineIcon /></span>
                            Up To 160GB SSD 
                            </li>
                            <li><span><CheckCircleOutlineIcon /></span>
                            8000 GB Bandwidth
                            </li>
                            <li><span><CheckCircleOutlineIcon /></span>
                            Up To 8 vCPU
                            </li>
                        </ul>
                        </div>
                        <div className='price'>
                            <h6>from</h6>
                            <h4>$0.99/year</h4>
                        </div>
                    </div>
                </div>

                <div className="card-div col-xl-3 col-lg-6 col-md-6 col-sm-10 col-10  m-auto ">
                    <div className="card card-up">
                        <div className="card_img d-flex justify-content-center">
                            <img src="../images/s2.png" className=" img-fluid " alt="..." />
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">Email Hosting</h3>
                            <ul>
                            <li><span><CheckCircleOutlineIcon /></span>
                            Up to 30GB Email 
                            </li>
                            <li><span><CheckCircleOutlineIcon /></span>
                            Antivirus check
                            </li>
                            <li><span><CheckCircleOutlineIcon /></span>
                            Mail filters
                            </li>
                            <li><span><CheckCircleOutlineIcon /></span>
                            Multi-Device Support
                            </li>
                        </ul>
                        </div>
                        <div className='price'>
                            <h6>from</h6>
                            <h4>$0.99/year</h4>
                        </div>
                    </div>
                </div>
                <div className="card-div col-xl-3 col-lg-6 col-md-6 col-sm-10 col-10  m-auto ">
                    <div className="card">
                        <div className="card_img d-flex justify-content-center">
                            <img src="../images/s3.jpg" className=" img-fluid " alt="..." />
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">Cloud Hosting</h3>
                            <ul>
                            <li><span><CheckCircleOutlineIcon /></span>
                            Up to 300 Websites
                            </li>
                            <li><span><CheckCircleOutlineIcon /></span>
                            Up To 200GB SSD 
                            </li>
                            <li><span><CheckCircleOutlineIcon /></span>
                            Up To 16 GB RAM
                            </li>
                            <li><span><CheckCircleOutlineIcon /></span>
                            Up To 8 CPU Cores
                            </li>
                        </ul>
                        </div>
                        <div className='price'>
                            <h6>from</h6>
                            <h4>$0.99/year</h4>
                        </div>
                    </div>
                </div>
                <div className="card-div col-xl-3 col-lg-6 col-md-6 col-sm-10 col-10  m-auto ">
                    <div className="card card-up">
                        <div className="card_img d-flex justify-content-center">
                            <img src="../images/s4.jpg" className=" img-fluid " alt="..." />
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">Domain Hosting</h3>
                            <ul>
                            <li><span><CheckCircleOutlineIcon /></span>
                        privacy protection
                            </li>
                            <li><span><CheckCircleOutlineIcon /></span>
                            Trusted Domain 
                            </li>
                            <li><span><CheckCircleOutlineIcon /></span>
                            Affordable renewals
                            </li>
                            <li><span><CheckCircleOutlineIcon /></span>
                            Wide Variety of TLDs
                            </li>
                        </ul>
                        </div>
                        <div className='price'>
                            <h6>from</h6>
                            <h4>$0.99/year</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Features