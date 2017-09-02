import React from 'react'
import { NavLink } from 'redux-first-router-link'

import Sample from '../features/sampleFeature/Sample'
import './globalStyles'

const Nav = () =>
  <div>
    <NavLink exact to='/home'>HOME</NavLink>
  </div>

const RootRoute = () => (
  <div>
    <Nav />
    <Sample />
  </div>
)

export default RootRoute
