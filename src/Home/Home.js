import React from 'react'
import Companies from '../Components/Companies';
import Hero from '../Components/Hero'
import Price from '../Components/Price'
import Services from '../Components/Services';
import Testimonial from '../Components/Testimonial';

function Home() {
  return (
    <>
      <Hero />
      <Companies />

    {/* <!-- ----------------------------Plans part ------------------------- --> */}
      <section className="plans " id="plans">
        <div className="container">
          <div className=" row my-5 ">
              <h2>Choose your Best Web Hosting Plan</h2>
          </div>
          <div className=" row plans_row">
          {
            Plans.map((val, index) => {
              return (
                <Price key={index} {...Plans[index]}
                />
              );
            })
          }
          </div>
        </div>
      </section>
    {/* <!-- ------------------------- End --------Plans part ------------------------- --> */}
<Testimonial />
<Services />
      
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