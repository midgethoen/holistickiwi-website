import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <header className="page-404 section-header image-fishing">
      <div className="content">
        <h1>
          <span className="text-sm">404 - Page Not Found </span>
          The page you are looking for is probably out fishing
        </h1>
        <Link className="btn btn-secondary"to="/"> Go To The Homepage </Link>
      </div>
    </header>



  </Layout>
)

export default NotFoundPage
