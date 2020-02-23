import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Icon from "../components/Icon"

const IndexPage = () => (
  <Layout>
    <SEO />



    <header className="page-homepage section-header">
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

      <h2>What can we help you with?</h2>
      <div className="card-container">
        <Link to="/massageoverview">

            <div className="card-image image-massage">
              <h3>Massages</h3>
            </div>
            <h4>Massages</h4>
            <p>
            The pressure is firmer, with a focus on releasing built up pain and tension while improving flexibility. Techniques include Deep Tissue, Sports Massage, Trigger Points and Myofascial Release.
            </p>
        </Link>

        <Link to="/massageoverview">

            <div className="card-image image-skincare">
              <h3>Skincare<br/>Treatments</h3>
            </div>
            <h4>Skincare Treatments</h4>
            <p>
            Never will you leave a facial treatment red, damaged and blotchy, or unsure about how to take care of your skin.</p>
            <p>Specialising in Sensitive and Ethnic skin, we ensure you not only receive the correct treatment for your skin, but advice on how to care for it at home.            </p>
        </Link>


        <Link to="/massageoverview">

            <div className="card-image image-waxing">
              <h3>Waxing</h3>
            </div>
            <h4>Waxing</h4>
            <p>
            The pressure is firmer, with a focus on releasing built up pain and tension while improving flexibility. Techniques include Deep Tissue, Sports Massage, Trigger Points and Myofascial Release.
            </p>
        </Link>


        <a className="primary" href="https://www.fresha.com/providers/holistic-kiwi-agx16c7f">

            <div className="card-image image-massage">
              <h3>Place<br/>Booking</h3>
            </div>
            <h4>Place Booking</h4>
            <p>
            The pressure is firmer, with a focus on releasing built up pain and tension while improving flexibility. Techniques include Deep Tissue, Sports Massage, Trigger Points and Myofascial Release.
            </p>
        </a>
      </div>
    </main>

    <section className="page-homepage section-image-right colorscheme-image  image-kitti">
      <div className="content">
        <h3>About us</h3>
        <p>Grohl formed Foo Fighters in 1994 after the death of Kurt Cobain, Nirvana's lead singer. Now Grohl was able to stretch his fingers and mind as he lead his new band, originally meant as an anonymous solo project, in guitar, vocals, and song writing. Many of the band's first songs were by Grohl during his Nirvana years.
        </p>
        <Link to="/about-us"> Read more </Link>
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

    <header className="page-homepage section-closer">
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
