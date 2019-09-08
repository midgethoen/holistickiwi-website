import React from "react"

import Layout from "../components/layout"

export default (props) =>
    <Layout>
        <pre>{JSON.stringify(props.pageContext, null, 2)}</pre>
    </Layout>