
# Group Activity

> Work in group to solve these tasks. 

1. What is the difference between the following statements:

```js
import {getImageUrl} from './utils.js'; ANSWER://for named export
import getImageUrl from './utils.js'; ANSWER://for default export
```

2. Is there anything wrong with the following component? Explain.

```js
const App = () => {
    return 
    (
        <ul>
            <li>Katherine Johnson: mathematician</li>
            <li>Mario Pasquel: chemist</li>
            <li>Lavon Julian: chemist</li>
        </ul>
    )
  };
```
ANSWER: Bracket ( after "return" should be on the same line for code to work


3. 
- Give an example how [reduce()]((https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)) works. 
- calculate the sum of exercises in the following array using the reduce method.

```js
const parts = [
			{
				name: "Fundamentals of React",
				exercises: 10,
			},
			{
				name: "Using props to pass data",
				exercises: 7,
			},
			{
				name: "State of a component",
				exercises: 14,
			},
		]
```
ANSWER:

const App = () => {
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ]

const sum = parts.reduce((previousValue, currentValue) => previousValue + currentValue.exercises, 0,);
console.log(sum);
  return(
    <div></div>
  )
};

export default App



4.  
- Give an example how [map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) works.
- Difference between map() and [foreach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- Why do we need key attribute when mapping? Refer to the reading material below:

---
One of the more tricky things with React is the requirement of a `key` prop when you attempt to render a list of elements.

If we want to render a list like this, then there's no problem:

```jsx
const ui = (
  <ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </ul>
)
```

But rendering an array of elements is very common:

```jsx
const list = ['One', 'Two', 'Three']

const ui = (
  <ul>
    {list.map(listItem => (
      <li>{listItem}</li>
    ))}
  </ul>
)
```

Those will generate the same HTML, but what it actually does is slightly different. Let's re-write it to see that difference:

```jsx
const list = ['One', 'Two', 'Three']
const listUI = list.map(listItem => <li>{listItem}</li>)
// notice that listUI is an array
const ui = <ul>{listUI}</ul>
```

So we're interpolating an array of renderable elements. This is totally acceptable, but it has interesting implications for when things change over time.

If you re-render that list with an added item, React doesn't really know whether you added an item in the middle, beginning, or end. And the same goes for when you remove an item (it doesn't know whether that happened in the middle, beginning, or end either).

## ref
- [Workshop](https://github.com/kentcdodds/react-fundamentals)