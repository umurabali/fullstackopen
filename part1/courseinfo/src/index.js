import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/header'
import Content from './components/content'
import Total from './components/total'

const App = () => {
  const course = 'Half Stack application development'

  return (
    <div>
      <Header course = {course} />
      <Content />
      <Total />

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))