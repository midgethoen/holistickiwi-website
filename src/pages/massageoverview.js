import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Icon from "../components/Icon"

const IndexPage = () => (
  <Layout>
    <SEO title="Massages"/>



    <header className="page-massage section-header image-massage">
      <div className="content">
        <h1>Massages
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
        <h2>Massages</h2>
        <p>
          Because every body is different, so are our massages. We customise each massage you recieve, based on your needs that day!
        </p>
        <p>
          We don’t work with set routines. Instead, we mix and match different techniques and styles to give you the most effective massages around.
        </p>
        <p>
          Depending on your goal, we offer  Relaxation Massage for the mind & mild body aches, or Theraputic Massage for pain and muscle health.
        </p>
        <p>
          If you have a specific goal, we recommend you book 75 minutes for your first intake and massage.
        </p>
      </div>
    </section>

    <section className="page-massage section-treatmentcontainer">

      <div className="treatment">
        <div className="content">
          <div className="description">
            <h3>Theraputic massage</h3>
            <p>
            These are massages are firm-hard with a focus on releasing built up pain and tension while improving flexibility.
            </p>
            <p>
            The muscular-skeletal system is inter connected, so often when you have an injury or ongoing pain, other areas of the body are affected as well.
            </p>
            <p>
            Theraputic massages at Holistic Kiwi are designed to ensure all areas of pain and stress relating to your issues are addressed.
            </p>
            <a
              className="btn btn-primary"
              href="https://www.fresha.com/providers/holistic-kiwi-agx16c7f"
              type="button"
            >
              Book Now
            </a>
          </div>
          <div className="tags">
            <h5>Basic Info</h5>
            <ul>
              <li>Consultation</li>
              <li>Postural Analysis</li>
              <li>Massage</li>
            </ul>
            <h5>If you suffer from</h5>
            <ul>
              <li>Stress</li>
              <li>Burnout symptoms</li>
              <li>Fibromyalgia</li>
              <li>Lymph swelling/Odema</li>
              <li>Muscle Tension</li>
              <li>Injuries (RSI, Neck/Shoulder)</li>
              <li>Sport injury </li>

            </ul>
            <h5>Techniques used</h5>
            <ul>
              <li>Trigger point</li>
              <li>Ayurvedic Techniques</li>
              <li>Deep Tissue</li>
              <li>Myofascial Release</li>
              <li>Sports Massage</li>

            </ul>

          </div>
        </div>
      </div>

      <div className="treatment">
        <div className="content">
          <div className="description">
            <h3>Relaxation massage</h3>
            <p>
              As the name suggests, the focus of this massage is on soothing mental stress and relieving mild body tension.
            </p>
            <p>
              Similar to a traditional Swedish Massage (relaxation), pressure is gentle-firm with a focus on relaxing, sweeping massage techniques.
            </p>
            <a
              className="btn btn-primary"
              href="https://www.fresha.com/providers/holistic-kiwi-agx16c7f"
              type="button"
            >
              Book Now
            </a>
          </div>
          <div className="tags">
            <h5>Basic Info</h5>
            <ul>
              <li>Consultation</li>
              <li>Postural Analysis</li>
              <li>Massage</li>
            </ul>
            <h5>If you suffer from</h5>
            <ul>
              <li>Stress</li>
              <li>Tension</li>
              <li>Fluid (Lymph) swelling</li>
              <li>Burnout symptoms</li>
              <li>Poor circulation </li>
              <li>Lack of “Me” time</li>
            </ul>
            <h5>Techniques used</h5>
            <ul>
              <li>Swedish massage</li>
              <li>Trigger point massage</li>
              <li>Ayurvedic Techniques</li>
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
