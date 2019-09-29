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
          <div className="card">
            <Icon
              name={"spa-lotus"}
              color="primary"
              className="icn"
              alt="logo"
            />
            <h6>Massages</h6>
          </div>
        </Link>

        <Link to="/skincare">
          <div className="card">
            <Icon
              name={"spa-lotus"}
              color="primary"
              className="icn"
              alt="logo"
            />
            <h6>Skin Treatments</h6>
          </div>
        </Link>

        <Link to="/wax">
          <div className="card">
            <Icon
              name={"spa-lotus"}
              color="primary"
              className="icn"
              alt="logo"
            />
            <h6>Waxing</h6>
          </div>
        </Link>

        <Link to="/wax">
          <div className="card">
            <Icon
              name={"spa-lotus"}
              color="primary"
              className="icn"
              alt="logo"
            />
            <h6>I need advice</h6>
          </div>
        </Link>
      </div>
    </main>

    <div className="treatments section-lightpurple section-center">
      <h2>Treatments</h2>
      <h5>Most Popular</h5>
      <div className="card-container card-container-treatments">
      <Link to="/massages">
        <div className="card">
          <h3>Therapeutic Massages</h3>
          <h3>90 m</h3>
          <span>Improves poor circulation</span>
          <span>Injuries (Office/Sport, RSI, Neck shoulder)</span>
          <span>Muscle Tension (Severe)</span>
          <span>MuscleTension (Mild)</span>
          <span>Lymph swelling/Odema</span>
          <a className="btn btn-primary">Book Now</a>
        </div>
      </Link>
      <Link to="/massages">
        <div className="card">
          <h6 className="card-headertag">most populair</h6>
          <h3>Therapeutic Massages</h3>
          <h3>90 m</h3>
          <span>Improves poor circulation</span>
          <span>Injuries (Office/Sport, RSI, Neck shoulder)</span>
          <span>Muscle Tension (Severe)</span>
          <span>MuscleTension (Mild)</span>
          <span>Lymph swelling/Odema</span>
          <span>Burnout Symptoms</span>
          <span>Signs of stress</span>
          <span>Struggle to relax</span>
          <a className="btn btn-primary">Book Now</a>
        </div>
      </Link>
      </div>
    </div>


  </Layout>
)

export default IndexPage
