## What is this?

basically a Create React App starting point with redux, redux-saga and react-router@4.

## Why

I got tired of replicating essentially the same steps needed to incorporate redux into a CRA project.

## How to use

Clone/fork it down, run `yarn` in the project root. Done!

## What about tests?

I just removed the sample test that CRA gives you. Nothing has changed. I should probably throw in some tests for the `rootReducer` and `rootSaga` files at some point.

## Issues

* Routing is handled by react router 4, but that does not play well with redux and the global state. Two schools of thought -
  1. React Router is the source of truth for url, and Redux is source of truth for the rest of the app
  2. Redux store should be the single source of truth, including the url
* From a practical standpoint, this means we dont get control over routing using the store

I am considering moving to `redux-first-router`
