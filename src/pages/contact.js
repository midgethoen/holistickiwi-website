import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Icon from "../components/Icon"

const IndexPage = () => (
  <Layout>
    <SEO title="Contact"/>



    <header className="page-massage section-header image-contact">
      <div className="content">
        <h1>Contact
        </h1>
        <a
          className="btn btn-primary"
          href="https://www.fresha.com/providers/holistic-kiwi-agx16c7f"
          type="button"
        >
          Book Now
        </a>
      </div>
    </header>


    <section className="page-massage section-contact colorscheme-purple">
      <div className="map">
        map
      </div>
      <div className="content">
        <h4>Address</h4>
        <p>
          Kruisstraat 39-41<br/>
          2611 ML, Delft<br/>
          The Netherlands
        </p>
        <a className="btn btn-secondary" href="https://goo.gl/maps/fNDF7CKc3fgVGCS57"> Open in Google Maps</a>

        <h4>Contact info</h4>
        <p>
          +31 (0)6 – 192 83 321<br/>
          contact@holistickiwi.com
        </p>

        <h4>Treatment Times</h4>
          <table>
              <tr> <td>Monday</td><td>12:00</td><td>-</td><td>20:00</td> </tr>
              <tr> <td>Tuesday</td><td>10:00</td><td>-</td><td>18:00</td> </tr>
              <tr> <td>Wednesday</td><td>9:00</td><td>-</td><td>21:00</td> </tr>
              <tr> <td>Thursday</td><td>9:00</td><td>-</td><td>21:00</td> </tr>
              <tr> <td>Friday</td><td>9:00</td><td>-</td><td>21:00</td> </tr>
              <tr> <td>Saturday</td><td>9:30</td><td>-</td><td>17:00</td> </tr>
              <tr> <td>Sunday</td><td colspan="3">closed</td> </tr>
          </table>

          <h4>Walk-in Consultation</h4>
            <table>
                <tr> <td>Saturday</td><td>11:00</td><td>-</td><td>16:00</td> </tr>
            </table>
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
