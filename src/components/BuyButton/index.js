import React from 'react'
import classnames from 'classnames'
import './index.scss'

export default function BuyButton({ href, children, classes }) {
  return (
    <div className={classnames('buy-button-container', classes)}>
      <a href={href} className="buy-button">
        {children}
      </a>
    </div>
  )
}
