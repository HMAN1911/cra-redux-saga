import React from 'react'
import { Route, Switch } from 'react-router-dom'

import LoggedInRoute from '../common/components/LoggedInRoute'

const Login = () => (
  <div>Implement Me!</div>
)

const Dashboard = () => (
  <div>Oh good you're here.</div>
)

const RootRoute = () => (
  <div>
    <Switch>
      <LoggedInRoute path="/dashboard" component={Dashboard} />
      <Route path="/login" component={Login} />
    </Switch>
  </div>
)

export default RootRoute
