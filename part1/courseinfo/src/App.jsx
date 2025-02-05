const Header = (props) => {
  console.log(props)
  return (<h1>{props.course}</h1>)
}

const Content = (props) => {
  console.log(props)
  return(
      <div>
        <Part parts={props.parts}/>
      </div>
  )
}

const Total = (props) => {
  console.log('Total: ' , props)
  return(
      <div>
        <p>Total of exercises: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
      </div>
  )
}

const Part = (props) => {
  console.log('Part: ' , props)
  return(
      <div>
        <p>{props.parts[0].name} {props.parts[0].exercises}</p>
        <p>{props.parts[1].name} {props.parts[1].exercises}</p>
        <p>{props.parts[2].name} {props.parts[2].exercises}</p>
      </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
      {
        name: 'Fundamentals of React, exercises: ',
        exercises: 10
      },
      {
        name: 'Using props to pass data, exercises: ',
        exercises: 7
      },
      {
        name: 'State of a component, exercises: ',
        exercises: 14
      }
    ]

  return (
    <div>
        <Header course={course} />
        <Content parts={parts} />
        <Total parts = {parts} />
    </div>
  )
}

export default App
