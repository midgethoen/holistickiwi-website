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
  </Layout>
)

export default IndexPage
