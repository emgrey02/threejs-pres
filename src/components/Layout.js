import * as React from "react"
import "../styles/style.css"

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <title>{pageTitle}</title>
      <main>{children}</main>
    </>
  )
}

export default Layout
