
# Pair programming 2

> Please locate your breakout-room in the Excel sheet: `1-pair-programming.xls`

Exercises 1.2.

- EN
https://fullstackopen.com/en/part1/introduction_to_react#exercises-1-1-1-2

ANSWER:
I have done these and used to apply next assignment on top of previous, so I dont have code for each step

- FI
https://fullstackopen.com/osa1/reactin_alkeet#tehtavat-1-1-1-2

ANSWER:
I have done these and used to apply next assignment on top of previous, so I dont have code for each step

//This one is 1.4

const Header = (props) => (
  <h1>{props.course}</h1>
) 

const Content = (props) => (
  <>
    <Part part={props.parts[0]} />
    <Part part={props.parts[1]} />
    <Part part={props.parts[2]} />
  </>
)

const Part = (props) => (
  <p>{props.part.name} {props.part.exercises}</p>
)

const Total = (props) => {
  const total = props.parts.reduce((s, p) => s += p.exercises, 0);
  return (
    <p>Number of exercises {total}</p>
  );
}

const App = () => {
  const course = {
    name: 'Half stack application development', 
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
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}

export default App
