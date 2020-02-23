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
              name={"body-care-eye-mask"}
              color="primary"
              className="icn"
              alt="logo"
            />
            <h6>Skin Treatments</h6>

        </Link>

        <Link to="/wax">

            <Icon
              name={"flying-insect-honey"}
              color="primary"
              className="icn"
              alt="logo"
            />
            <h6>Waxing</h6>

        </Link>





        <a className="primary" href="https://www.fresha.com/providers/holistic-kiwi-agx16c7f">
          <Icon
            name={"check-2"}
            color="white"
            className="icn"
            alt="logo"
          />
          <h6>Place booking</h6>
        </a>
      </div>
    </main>

    <div className="clients section-dark section-icnbar">
      <a href="#">
        <Icon
          name={"tudelftlogo"}
          color="white"
          className="icn"
          alt="logo"
        />
      </a>
      <a href="#">
        <Icon
          name={"tudelftlogo"}
          color="white"
          className="icn"
          alt="logo"
        />
      </a>
      <a href="#">
        <Icon
          name={"tudelftlogo"}
          color="white"
          className="icn"
          alt="logo"
        />
      </a>
      <a href="#">
        <Icon
          name={"tudelftlogo"}
          color="white"
          className="icn"
          alt="logo"
        />
      </a>
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

    <div className="certifications section-dark section-icnbar">
      <a href="#">
        <Icon
          name={"tudelftlogo"}
          color="white"
          className="icn"
          alt="logo"
        />
      </a>
      <a href="#">
        <Icon
          name={"tudelftlogo"}
          color="white"
          className="icn"
          alt="logo"
        />
      </a>
    </div>
  </Layout>
)

export default IndexPage
