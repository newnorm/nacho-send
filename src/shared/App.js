import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Home, About, Chat } from '../pages'
import useScript from '../hooks/useScript'

function App(props) {
  //커스텀 훅 usescript,,, 잘 동작할까?
  // next js 처럼 최상단 Document에 위치하게 하고 싶은데 이렇게 하면 되는지 ..?
  // https://qastack.kr/programming/34424845/adding-script-tag-to-react-jsx


  useScript(
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    />
  )

  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/chat" component={Chat} />
    </div>
  )
}

export default App
