import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ul>
      <li>
        <Link to="/massages">Massages</Link>
      </li>
      <li>
        <Link to="/skincare">Skin</Link>
      </li>
      <li>
        <Link to="/wax">Wax</Link>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
