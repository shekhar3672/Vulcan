import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <Link to="/Vulcan/">Home</Link>
      <Header headerText="This is about.js Header" />
      <p>Such wow. Very React.</p>
    </div>
  )
}
