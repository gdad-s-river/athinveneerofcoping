import React from 'react'
import { Link } from 'gatsby'

import './index.scss'

const Header = ({ siteTitle }) => (
  <div className="header-container">
    <div className="header-wrapper">
      <h1 style={{ margin: 0, fontSize: '1.8rem' }}>
        <Link to="/" className="header-link">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
