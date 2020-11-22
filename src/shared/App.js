import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Home, About, Chat } from '../pages'

function App(props) {
  return (
    <>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/chat" component={Chat} />
      </div>
    </>
  )
}

export default App
