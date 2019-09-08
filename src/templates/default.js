import React from "react"

import Layout from "../components/layout"

export default ({children, ...props}) =>
    <Layout>
        <pre>{JSON.stringify(props.pageContext, null, 2)}</pre>
        {children}
    </Layout>