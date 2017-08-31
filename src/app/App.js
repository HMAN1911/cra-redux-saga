import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Sample from '../features/sampleFeature/Sample'
import './globalStyles'

const Home = () => (
  <div>Implement Me!</div>
)

const Dashboard = () => (
  <div>Oh good you're here.</div>
)

const RootRoute = () => (
  <div>
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/sample" component={Sample} />
      <Route path="/" component={Home} />
    </Switch>
  </div>
)

export default RootRoute
