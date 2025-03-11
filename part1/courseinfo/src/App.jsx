const Header = (header) => {
  return (
    <div>
      <h1>{header.course}</h1>
    </div>
  )
}

const Part = ({part}) => {
  return (
    <div>
        <p>{part.name} {part.exercises}</p>
    </div>
  )
}

const Content = ({props}) => {
  return (
    <div>
      <Part part={props[0]}/>
      <Part part={props[1]}/>
      <Part part={props[2]}/>
    </div>
  )
}

const Total = ({props}) => {
  return (
    <div>
      <p>Number of exercises {props[0].exercises + props[1].exercises + props[2].exercises}</p>
    </div>
  )
}

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
      <Header course ={course.name} />
      <Content props={course.parts}/>
      <Total props={course.parts}/>
    </div>
  )
}

export default App