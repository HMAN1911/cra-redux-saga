import React from 'react'
import { Route, Switch } from 'react-router-dom'

const Home = () => (
  <div>Implement Me!</div>
)

const Dashboard = () => (
  <div>Oh good you're here.</div>
)

const RootRoute = () => (
  <div>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  </div>
)

export default RootRoute
