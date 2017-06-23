import React from 'react'
import { Route, Switch } from 'react-router-dom'

<<<<<<< HEAD
const Login = () => (
=======
const Home = () => (
>>>>>>> remove glamorous, LoggedInRoute
  <div>Implement Me!</div>
)

const Dashboard = () => (
  <div>Oh good you're here.</div>
)

const RootRoute = () => (
  <div>
    <Switch>
<<<<<<< HEAD
      <Route path="/" component={Login} />
=======
      <Route path="/" component={Home} />
      <Route path="/dashboard" component={Dashboard} />
>>>>>>> remove glamorous, LoggedInRoute
    </Switch>
  </div>
)

export default RootRoute
