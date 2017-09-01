import React from 'react'
import Link, { NavLink } from 'redux-first-router-link'

import Sample from '../features/sampleFeature/Sample'
import './globalStyles'

const Home = () => (
  <div>Implement Me!</div>
)

const Dashboard = () => (
  <div>Oh good you're here.</div>
)

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
