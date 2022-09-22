import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';

function Companies() {
  return (
    <>
        <section className="sponsor_section">
        <div className="container">
          <div className="row">
            <h2>You&rsquo;re in good company</h2>
            <p>Don’t just take our word for it. We’re the web host of choice for thousands of happy customers.</p>
            {/* <!-- slide SP  --> */}
            <div className="col-12 mx-auto">
            <OwlCarousel   {...options}>
                <div className="item">
                  <img src="images/sp1.png" alt="items" />
                </div>
                <div className="item">
                  <img src="images/sp2.png" alt="items" />
                </div>
                <div className="item">
                  <img src="images/sp3.png" alt="items" />
                </div>
                <div className="item">
                  <img src="images/sp4.png" alt="items" />
                </div>
                <div className="item">
                  <img src="images/sp5.png" alt="items" />
                </div>
                <div className="item">
                  <img src="images/sp6.png" alt="items" />
                </div>
                <div className="item">
                  <img src="images/sp7.png" alt="items" />
                </div>
                <div className="item">
                  <img src="images/sp4.png" alt="items" />
                </div>
                <div className="item">
                  <img src="images/sp5.png" alt="items" />
                </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
      </section>
    </>
  )
}

export default Companies


const options = {
    margin: 15,
    responsiveClass: true,
    nav: false,
    loop:true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 1000,
    responsive: {
      0: {
        items:2
      },
      390: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 7
      }
    },
  };
  