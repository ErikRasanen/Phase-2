
# Group Activity

> Work in group to solve the three tasks below. 

## Exercise 1 

- What is the expected output of the following snippet? 
- Explain how [filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) works.

```js
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);
```

## Exercise 2

Run the following code. What happens when you click the button. Explain why `alert()` displays `0` not `15`.

```js
import { useState } from "react";

const App = () => {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 15);
          alert(number);
        }}
      >
        +15
      </button>
    </>
  );
};

export default App;
```

## Exercise 3

Refer to the `App.js`. Discuss how to add, update and remove objects from arrays in React [Ref 2 below]


## ref
1. [mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
2. [objects state in React](https://bobbyhadz.com/blog/react-update-state-array-of-objects)