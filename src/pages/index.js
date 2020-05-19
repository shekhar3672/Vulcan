import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <Link to="/about/">About</Link>
      <Link to="/contact/">Contacts</Link>
      <Header headerText="This is index.js Header" />
      <p>Welcome to Vulcan.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}
