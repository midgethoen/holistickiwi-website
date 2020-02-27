import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Icon from "../components/Icon"

const IndexPage = () => (
  <Layout>
    <SEO />



    <header className="page-homepage section-header image-homepage">
      <div className="content">
        <h1>Rediscover<br/> your confidence
        </h1>
        <a
          className="btn btn-primary"
          href="https://www.fresha.com/providers/holistic-kiwi-agx16c7f"
          type="button"
        >
          Book Your Treatment Now
        </a>
      </div>
    </header>


    <main className="page-homepage section-cardselection colorscheme-purple">

      <h2>How can we help you?</h2>
      <div className="card-container">
        <Link to="/massageoverview">

            <div className="card-image image-massage">
              <h3>Massages</h3>
            </div>
            <h4>Massages</h4>
            <p>
            Get a massage from a fully qualified therapist and feel the difference! We customise our massages to ensure we address your concerns.
            </p>

        </Link>

        <Link to="/skintreatmentoverview">
            <div className="card-image image-skincare">
              <h3>Skin<br/>Treatments</h3>
            </div>
            <h4>Skin Treatments</h4>
            <p>
            We specialise in Sensitive and Ethnic promblematic skin.  For Acne fighters; we are covered by most health insurances.
            </p>

        </Link>


        <Link to="/waxoverview">

            <div className="card-image image-waxing">
              <h3>Waxing</h3>
            </div>
            <h4>Waxing</h4>

            <p>
            At Holistic Kiwi, we minimise the chance of ingrown hairs with our professional hygiene, techniques and care for the skin.
            </p>
        </Link>


        <a className="primary" href="https://www.fresha.com/providers/holistic-kiwi-agx16c7f">

            <div className="card-image image-booking">
              <h3>Place<br/>Booking</h3>
            </div>
            <h4>Place Booking</h4>
            <p>
            Use our intuative booking system to find an appointment time that suites you.
            </p>
        </a>
      </div>
    </main>

    <section className="page-homepage section-image-right colorscheme-image  image-kitti">
      <div className="content">
        <h3>About us</h3>
        <p>
        Holistic Kiwi was started in 2016 with the goal of creating a safe space to help those with ongoing skin issues such as Rosacea, Acne, Dermatitis/Eczema & Psoriasis.
        </p>
        <p>
        We provide high quality Massage Therapy for ongoing aches and pains. This includes reducing symptoms of Frozen Shoulders and Fibromyalgia as well as office and sports injuries!
        </p>
        <Link className="btn btn-secondary"to="/about-us"> Read more </Link>
        <div className="stat-row">
          <div className="stat">
            <h3>ANBOS |CIBTAC | CIDESCO | NZQA | ITEC</h3>
            <p>International Qualifications</p>
          </div>
        </div>
        <div className="stat-row">
          <div className="stat">
            <h3>5/5</h3>
            <p>Verified Fresha Rating</p>
          </div>
          <div className="stat">
            <h3>4.8/5</h3>
            <p>Treatwell Rating</p>
          </div>
          <div className="stat">
            <h3>4.5/5</h3>
            <p>Google Rating</p>
          </div>
          <div className="stat">
            <h3>884</h3>
            <p>Treatments performed last year</p>
          </div>
        </div>
      </div>
    </section>

    <header className="page-homepage section-closer image-closer">
      <div className="content">
        <h1>Your sensitive skin specialist
        </h1>
        <a
          className="btn btn-primary"
          href="https://www.fresha.com/providers/holistic-kiwi-agx16c7f"
          type="button"
        >
          Book Your Treatment Now
        </a>
      </div>
    </header>






  </Layout>
)

export default IndexPage
