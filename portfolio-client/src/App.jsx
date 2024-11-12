// eslint-disable-next-line no-unused-vars
import React from 'react'
// import { useState } from 'react'
import './App.css'
import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import Feed from './components/feed/Feed'
import Widgets from './components/widgets/Widgets'

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  )
}

export default App

