import React from "react"
import Icon from '../components/Icon'

import Layout from "../components/layout"
// import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
  <header className="header header-contextpage">
    <div className="headercontent">
      <Icon name={"spa-lotus"} className="icn" alt="logo" />

      <h1>about us</h1>

      <a
      className="btn btn-primary"
      href="https://www.fresha.com/providers/holistic-kiwi-agx16c7f"
      type="button"
      >
        Book Now
      </a>

    </div>
  </header>

    <article className="section bgc-kitti text-right">
      <div className="section-content">
        <div>
        <h3>Kitti Bradley</h3>
          <p>
            Holistic Kiwi was started by Kitti Bradley because she was unable to find a skin and massage salon that met the standards that she was used to in New Zealand.
          </p>
          <p>
            Due to her personal struggle with sensitive skin she understands the importance of quality products and service.
          </p>
          <p>
            With international qualifications in Beauty Therapy, Spa Therapy and Body & Nutrition (CIBTAC, CIDESCO, NZQA), Kitti is truly passionate about helping clients combat their issues.
          </p>
        </div>
      </div>
    </article>

    <article className="section bgc-mary text-left">
      <div className="section-content">
        <div>
          <h3>Mary Darbyshire</h3>
          <p>
            Holistic Kiwi was started by Kitti Bradley because she was unable to find a skin and massage salon that met the standards that she was used to in New Zealand.
          </p>
          <p>
            Due to her personal struggle with sensitive skin she understands the importance of quality products and service.
          </p>
          <p>
            With international qualifications in Beauty Therapy, Spa Therapy and Body & Nutrition (CIBTAC, CIDESCO, NZQA), Kitti is truly passionate about helping clients combat their issues.
          </p>
        </div>
      </div>
    </article>

    <article className="section bgc-jason text-right">
      <div className="section-content">
        <div>
          <h3>Jason Teunissen</h3>
          <p>
            Kiwi born, to Dutch parents, Jason moved to the Netherlands when he was 13. He is fluent in both Dutch and English.
          </p>
          <p>
            By trade an App Design & Usability Consultant, Jason is our guy when it comes to Branding, Marketing and Usability for our clients.
          </p>
          <p>
            Jason brings Holistic Kiwi into the 21st century, ensuring clients online experience is smooth, easy and logical, not just pretty.
          </p>
        </div>
      </div>
    </article>

    <header className="header header-contextpage catch">
      <div className="headercontent">
        <Icon name={"spa-lotus"} className="icn" alt="logo" />

        <h3>Experience why Holistic Kiwi has the best reviews</h3>

        <a
        className="btn btn-primary"
        href="https://www.fresha.com/providers/holistic-kiwi-agx16c7f"
        type="button"
        >
          Book Now
        </a>

      </div>
    </header>








  </Layout>
)

export default NotFoundPage
