import React from 'react'
import Companies from '../Components/Companies';
import Hero from '../Components/Hero'
import Price from '../Components/Price'
import Services from '../Components/Services';
import Testimonial from '../Components/Testimonial';
import Footer from '../Components/Footer';
import Features from '../Components/Features'
import Faq from '../Components/Faq';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import Offer from '../Components/Offer';

function Home() {
  return (
    <>
      <Hero />
      <Companies />

      {/* <!-- ----------------------------Plans part ------------------------- --> */}
      <section className="plans  " id="plans">
        <div className="container">
          <div className=" row my-5 ">
            <h2>Choose your Best Web Hosting Plan</h2>
          </div>
          <div className=" row plans_row">
            {
              Plans.map((val, index) => {
                return (
                  <Price key={index} {...val}
                  />
                );
              })
            }
          </div>
        </div>
      </section>
      {/* <!-- ------------------------- End --------Plans part ------------------------- --> */}

      <Services />

      {/* -------------more Features--------------- */}
      <section id="features" className="features">
        <div className="container  ">
          <div className="row">
            <p>More Features</p>
            <h2>See What's inside....</h2>

            {
              FeaturesData.map((val, index) => {
                return (
                  <Features key={index} {...val}
                  />
                );
              })
            }
          </div>
        </div>
      </section>
      {/* -------------End---more Features--------------- */}
      <Testimonial />
      {/* ---------faQ-------------- */}
      <section className="faq my-5" id="faq">
        <div className="container py-5 ">
          <div className="row py-5">

            <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-10 col-10 d-flex justify-content-end m-auto ">
              <img src="../images/faq.svg" className=" img-fluid faq_img " alt="img" />
            </div>
            <div className="content col-xl-8 col-lg-8 col-md-10 col-sm-10 col-10  m-auto ">
              <h2>Shared Web Hosting FAQs</h2>
              <h4>Find answers to frequently asked questions about web hosting services</h4>
              <OwlCarousel   {...options}>
                {
                  Ques.map((val, index) => {
                    return (
                      <Faq key={index} {...val}
                      />
                    );
                  })
                }
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
      {/* ---------end------faQ-------------- */}
      <Offer />
      <Footer />

    </>
  )
}

export default Home

const Plans = [
  {
    h3: 'Single Shared',
    price_span: '$1.99',
    img: '../images/p2.svg',
    li_1: '1 Website',
    li_2: '50 GB SSD Storage',
    li_3: '~10 000 Visits Monthly',
    li_4: '1 Email Account',
    li_5: '100 GB Bandwidth',
    li_6: '2 Databases',
  },
  {
    clsNm: "top_card",
    h3: 'MOST POPULAR',
    price_span: '$2.99',
    img: '../images/p1.svg',
    li_1: '100 Websites',
    li_2: '100 GB SSD Storage',
    li_3: '~25 000 Visits Monthly',
    li_4: 'Free Email',
    li_5: 'Unlimited Bandwidth',
    li_6: 'Unlimited Databases',
  },
  {
    h3: 'Business Shared ',
    price_span: '$199',
    img: '../images/p3.svg',
    li_1: '100 Websites',
    li_2: '200 GB SSD Storage',
    li_3: '~100 000 Visits Monthly',
    li_4: 'Free Email',
    li_5: 'Unlimited Bandwidth',
    li_6: 'Unlimited Databases',
  }
]

const FeaturesData = [
  {
    clsNm: 'card',
    img: "../images/s3.jpg",
    h3: 'Cloud Hosting',
    li_1: 'Up to 300 Websites',
    li_2: 'Up To 200GB SSD',
    li_3: 'Up To 16 GB RAM',
    li_4: ' Up To 8 CPU Cores',
    h4: '$0.69/year'
  },
  {
    clsNm: 'card card-up',
    img: "../images/s1.png",
    h3: 'VPS Hosting',
    li_1: 'Up To 8GB RAM',
    li_2: 'Up To 160GB SSD',
    li_3: '8000 GB Bandwidth',
    li_4: 'Up To 8 vCPU',
    h4: '$0.99/year'
  },
  {
    clsNm: 'card',
    img: "../images/s4.jpg",
    h3: 'Domain Hosting',
    li_1: 'Privacy protection',
    li_2: 'Trusted Domain',
    li_3: 'Affordable renewals',
    li_4: 'Wide Variety of TLDs',
    h4: '$0.69/year'
  },
  {
    clsNm: 'card card-up',
    img: "../images/s2.png",
    h3: 'Email Hosting',
    li_1: 'Up to 30GB Email',
    li_2: 'Antivirus check',
    li_3: 'Mail filters',
    li_4: 'Multi-Device Support',
    h4: '$0.79/year'
  }
]

const Ques = [
  {
    h6_1: 'What is web hosting?',
    p_1: 'Web hosting is a service that makes your website available on the internet. When you get a hosting plan, you rent space on a physical server to store all the website’s data and files...',
    h6_2: 'How does website hosting work?',
    p_2: 'Your website is a collection of files and (in most cases) databases that are shown to your visitors as they browse your site. Hostinger, like most web hosts, allocates storage space...',
    h6_3: 'Why do I need web hosting?',
    p_3: 'Here at Hostinger, we call our support team the Customer Success team. Hostinger’s Customer Success team is top-rated within the industry – we respond quickly and thoroughly and ...'
  },
  {
    h6_1: 'What kind of support will I get?',
    p_1: 'Here at Hostinger, we call our support team the Customer Success team. Hostinger’s Customer Success team is top-rated within the industry.we respond quickly and thoroughly and ...',
    h6_2: 'Can I buy hosting without a domain name?',
    p_2: 'Yes, you can. If you want to, you can purchase domain names from other domain registrars and point them to Hostinger. If you want to keep your domain name and website hosting ...',
    h6_3: 'Does your hosting come with a control panel?',
    p_3: 'hPanel helps you manage your hosting account, monitor resource usage, create email addresses, and install content management systems like WordPress. Note that this is different ...'
  },
  {
    h6_1: 'Do I need web hosting with WordPress?',
    p_1: 'Upgrading your web hosting service to another hosting plan is easy with Hostinger. We pride ourselves on having no downtime during the upgrade, so your website will be up and...',
    h6_2: 'Do I need web hosting with WordPress?',
    p_2: 'Yes, you can. If you want to, you can purchase domain names from other domain registrars and point them to Hostinger. If you want to keep your domain name and website hosting ...',
    h6_3: 'Do you offer a script auto-installer?',
    p_3: 'hPanel helps you manage your hosting account, monitor resource usage, create email addresses, and install content management systems like WordPress. Note that this is different ...'
  }

]

const options = {
  margin: 15,
  responsiveClass: true,
  nav: true,
  loop: true,
  dots: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  },
};