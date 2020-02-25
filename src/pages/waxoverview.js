import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Icon from "../components/Icon"

const IndexPage = () => (
  <Layout>
    <SEO />



    <header className="page-massage section-header image-waxing">
      <div className="content">
        <h1>Waxing
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

    <section className="page-massage section-info colorscheme-purple">
      <div className="content">
        <h2>Waxing</h2>
        <p>
        Text hier
        </p>
        <p>
        Text hier
        </p>
      </div>
    </section>

    <section className="page-massage section-treatmentcontainer">

      <div className="treatment">
        <div className="content">
          <div className="description">
            <h3>Hotwax</h3>
            <p>
              text here
            </p>
            <a
              className="btn btn-primary"
              href="https://www.fresha.com/providers/holistic-kiwi-agx16c7f"
              type="button"
            >
              Book Your Treatment Now
            </a>
          </div>
          <div className="tags">
            <h5>Includes</h5>
            <ul>
              <li>Double Cleanse & Exfoliation</li>
              <li>Traditional Mask</li>
              <li>Suitable Serum and mosturiser</li>
              <li>Neck/Shoulder Massage</li>
              <li>Intensive Hydration Treat (75m+)</li>
              <li>BrowTidy  (75m+)</li>
              <li>Massage Mask  (90m+)</li>
            </ul>
            <h5>Skincare Brands</h5>
            <ul>
              <li>Snowberry</li>
              <li>Living Nature</li>
              <li>Pure Peony</li>
            </ul>
            <h5>If you suffer from</h5>
            <ul>
              <li>Stress</li>
              <li>Minimal skin issues</li>
              <li>Fine Lines</li>
            </ul>

          </div>
        </div>
      </div>

      <div className="treatment">
        <div className="content">
          <div className="description">
            <h3>Stripwax</h3>
            <p>
              Let your skin feel shiny and new with our gentle diamond microdermabraion machine, followed by an intenstive hydration treat from our Manuka mask, and Ultrasound machine!
            </p>
            <a
              className="btn btn-primary"
              href="https://www.fresha.com/providers/holistic-kiwi-agx16c7f"
              type="button"
            >
              Book Your Treatment Now
            </a>
          </div>
          <div className="tags">
            <h5>Includes</h5>
            <ul>
              <li>Double Cleanse & Exfoliation</li>
              <li>Traditional Mask</li>
              <li>Suitable Serum and mosturiser</li>
              <li>Neck/Shoulder Massage</li>
              <li>Intensive Hydration Treat (75m+)</li>
              <li>BrowTidy  (75m+)</li>
              <li>Massage Mask  (90m+)</li>
            </ul>
            <h5>Skincare Brands</h5>
            <ul>
              <li>Snowberry</li>
              <li>Living Nature</li>
              <li>Pure Peony</li>
            </ul>
            <h5>If you suffer from</h5>
            <ul>
              <li>Stress</li>
              <li>Minimal skin issues</li>
              <li>Fine Lines</li>
            </ul>

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