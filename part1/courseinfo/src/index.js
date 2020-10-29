import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/header'
import Content from './components/content'
import Total from './components/total'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header courseName = {course.name} />
      <Content course = {course}/>
      <Total course = {course}/>

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))