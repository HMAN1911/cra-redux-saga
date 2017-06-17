import React from 'react'
import { Route, Switch } from 'react-router-dom'

const Login = () => (
  <div>Implement Me!</div>
)

const Dashboard = () => (
  <div>Oh good you're here.</div>
)

const RootRoute = () => (
  <div>
    <Switch>
      <Route path="/" component={Login} />
    </Switch>
  </div>
)

export default RootRoute
