import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Icon from "../components/Icon"

const IndexPage = () => (
  <Layout>
    <SEO />

    <header className="header header-homepage">
      <div className="headercontent">
        <h3>Holistic Kiwi - Skin & Massage</h3>
        <h1>Rediscover your confidence</h1>
        <button
          className="btn btn-primary"
          href="https://reactjs.org"
          type="button"
        >
          Book Now
        </button>
      </div>
    </header>

    <div className="clients">
      <Icon
        name={"spa-lotus"}
        color="primary"
        className="icn"
        alt="logo"
      />
      <p>client logo</p>
      <p>client logo</p>
      <p>client logo</p>
    </div>

    <main className="main-homepage section-purple section-center">
      <h2>What are you looking for?</h2>
      <div className="card-container card-container-homepage">
        <Link to="/massages">

            <Icon
              name={"spa-lotus"}
              color="primary"
              className="icn"
              alt="logo"
            />
            <h6>Massages</h6>

        </Link>

        <Link to="/skincare">

            <Icon
              name={"spa-lotus"}
              color="primary"
              className="icn"
              alt="logo"
            />
            <h6>Skin Treatments</h6>

        </Link>

        <Link to="/wax">

            <Icon
              name={"spa-lotus"}
              color="primary"
              className="icn"
              alt="logo"
            />
            <h6>Waxing</h6>

        </Link>

        <Link to="/wax">

            <Icon
              name={"spa-lotus"}
              color="primary"
              className="icn"
              alt="logo"
            />
            <h6>I need advice</h6>

        </Link>
      </div>
    </main>

    <div className="certifications">
      <p>international massage certification 1</p>
      <p>international massage certification 2</p>
    </div>

    <div className="section-lightpurple section-center">
      <h2>Holistic Kiwi</h2>
      <p>
        Welcome to your home for Sensitive Skin Treatments, and Massage Therapy in the centre of Delft.
      </p>
      <p>
        Holistic = Systems/People and their properties are viewed as wholes, not just as a collection of parts.
      </p>
      <p>
        Kiwi = Kiwiana, anything or anyone originating from New Zealand.
      </p>
        Why Holistic Kiwi?

        ✓     Natural and effective treatments for sensitive and ethnic skins.
        ✓     Advice that compliments your treatment plan.
        ✓     100% natural, New Zealand products that embrace science.
        ✓     Massages catered to you individually.
        ✓     Qualified advice for posture, work related injuries and ongoing pain/stress issues.
        ✓     Internationally qualified therapists.

      <p>
      </p>
      <p>
      </p>
    </div>
  </Layout>
)

export default IndexPage
