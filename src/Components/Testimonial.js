import React from 'react'

function Testimonial() {
  let activeImageId = 1;
  let nextImageId = 1;

  // setInterval(function () {
  //   nextImageId = nextImageId + 1;
  //   if (nextImageId < 5) {
  //     document.getElementById("testimonial" + activeImageId).classList.replace("visible", "hidden");
  //     document.getElementById("testimonial" + nextImageId).classList.replace("hidden", "visible");
  //     activeImageId = nextImageId;

  //   } else {
  //     document.getElementById("testimonial" + activeImageId).classList.replace("visible", "hidden");
  //     document.getElementById("testimonial" + nextImageId).classList.replace("hidden", "visible");
  //     activeImageId = 5;
  //     nextImageId = 0;

  //   }
  // }, 10000);


  return (
    <>
      <section className="Testimonial_section mt-5">
        <div className="container-fluid">
          <div className="row">
            <div className=" col-xl-6 col-lg-7 col-md-9 col-sm-12 col-12  m-auto ">
              <h2>We bring Solutions to make life easier for our customer</h2>
            </div>
          </div>
          {/* <!-- slide SP  --> */}
          <div className="row">
            <div className="parent_div col-xl-7 col-lg-9 col-md-9 col-sm-10 col-10  m-auto ">
              <div className='div_circle1'>
                <img src="images/img1.png" className="img-fluid" alt='img' />
              </div>
              <div className='div_circle2'>
                <img src="images/img2.png" className="img-fluid" alt='img' />
              </div>
              <div className='div_circle3'>
                <img src="images/img3.png" className="img-fluid" alt='img' />
              </div>
              <div className='div_circle4'>
                <img src="images/img4.png" className="img-fluid" alt='img' />
              </div>
              {/* ------------main circle--------- */}
              <div id="testimonial1" className="img-fluid   visible">
              <div className='div_circle_main'>
                <img src="images/img5.png" className="img-fluid" alt='img' />
              </div>
              <div className='div_rect'>
                <h4>Samia</h4>
                <h5>Excellent service at exceptionall...</h5>
                <p>Excellent service at exceptionally affordable prices. Excellent service at...</p>
              </div>

              </div>
              <div id="testimonial2" className="img-fluid hidden">
              <div className='div_circle_main'>
                <img src="images/t1.png" className="img-fluid" alt='img' />
              </div>
              <div className='div_rect'>
                <h4>Sam</h4>
                <h5>Hostinger is Great.</h5>
                <p>I think I'm doing ok with Hostinger. I am building new web pages. It is...</p>
              </div>

              </div>
              <div id="testimonial3" className="img-fluid hidden">
              <div className='div_circle_main'>
                <img src="images/t2.png" className="img-fluid" alt='img' />
              </div>
              <div className='div_rect'>
                <h4>Abhi</h4>
                <h5>A Perfect Hosting Site..</h5>
                <p>Perfect Hosting Site, user-friendly domain, and hosting service...</p>
              </div>

              </div>
              <div id="testimonial4" className="img-fluid hidden">
              <div className='div_circle_main'>
                <img src="images/t3.png" className="img-fluid" alt='img' />
              </div>
              <div className='div_rect'>
                <h4>ahmed</h4>
                <h5>World's Best Hosting Pro...</h5>
                <p>According to my experience with Hostinger, It's not a headache to ...</p>
              </div>

              </div>
              <div id="testimonial5" className="img-fluid hidden">
              <div className='div_circle_main'>
                <img src="images/t4.png" className="img-fluid" alt='img' />
              </div>
              <div className='div_rect'>
                <h4>chow</h4>
                <h5>Hostinger is Awesome</h5>
                <p>Hostinger is one of the best hosting companies I've had the opportunity.</p>
              </div>

              </div>
              {/* ------------main circle--------- */}

              <div className='div_circle6'>
                <img src="images/img6.png" className="img-fluid" alt='img' />
              </div>
              <div className='div_circle7'>
                <img src="images/img7.png" className="img-fluid" alt='img' />
              </div>
              <div className='div_circle8'>
                <img src="images/img8.png" className="img-fluid" alt='img' />
              </div>
              
              

              
            </div>
          </div>


        </div>
      </section>
    </>
  )
}

export default Testimonial

