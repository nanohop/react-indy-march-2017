import React from 'react'
import { Route, Link } from 'react-router-dom'

const ListItemLink = ({ to, children }) => (
  <Route path={to} children={({ match }) => (
    <li role="presentation">
      <Link to={to}>{children}</Link>
    </li>
  )} />
)

export default ListItemLink
