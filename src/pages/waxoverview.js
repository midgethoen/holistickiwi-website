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
        Lycon is an all natural, latex free wax that makes for a smooth and (almost) painless hair removal experience!
        </p>
        <p>
        Hairs are removed by the root (minimizing that annoying feeling of stuble) and skin is left nourished and undamaged. We use antibacterial Manuka products to help soothe and heal the skin before and after wax treatment.
        </p>
        <p>
        It is made in Australia, not New Zealand, but we can't hold that agaisnt it! There is nothing on the market that can complete with Lycon's gentle yet effective hair removal.
        </p>
        <p>
        Our highly trained therapists use techniques that make waxing close to painless, and help you with any ongoing issues with ingrown hairs.
        </p>
      </div>
    </section>

    <section className="page-massage section-treatmentcontainer">

      <div className="treatment">
        <div className="content">
          <div className="description">
            <h3>Hot Wax</h3>
            <p>
              Used for the more sensitive areas of the body, hot wax is heated warmer than traditional strip wax, allowing it to relax the hair follicle and remove stubborn hair with ease!
            </p>
            <p>
            At Holistic Kiwi, we take special measures for hygiene and skin protection to ensure your intimate area's stay healthy and beautiful.
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
            <h5>Used For</h5>
            <ul>
              <li>Brazilian</li>
              <li>G-String</li>
              <li>Bikini</li>
              <li>Armpits</li>
              <li>Facial Area</li>
            </ul>
            <h5>Skincare Brands</h5>
            <ul>
              <li>Lycon</li>

            </ul>
            <h5>If you suffer from</h5>
            <ul>
              <li>Sensitive Skin</li>
              <li>Ingrown Hairs</li>
              <li>Hard to Remove Hair</li>
            </ul>

          </div>
        </div>
      </div>

      <div className="treatment">
        <div className="content">
          <div className="description">
            <h3>Strip Wax</h3>
            <p>
              The more common of the waxing treatments, strip wax is used on larger area's with finer hair growth.
            </p>
            <p>
              It is heated at a lower temperature, and is now days usually applied by a heated canister with a rolling head. It is then removed by fine strips of material or paper.
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
            <h5>Includes</h5>
            <ul>
              <li>Arms</li>
              <li>Legs</li>
              <li>Chest</li>
              <li>Tummy</li>
              <li>Back</li>

            </ul>
            <h5>Skincare Brands</h5>
            <ul>
              <li>Lycon</li>
            </ul>
            <h5>If you suffer from</h5>
            <ul>
              <li>Large areas of hair growth</li>
              <li>Minimal skin issues</li>
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
