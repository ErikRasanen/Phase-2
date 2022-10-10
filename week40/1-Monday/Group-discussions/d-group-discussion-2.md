# Group Activity 2

> Work in group to solve these tasks. Later compare your solution with the one in the final folder(other student's solution). 

## Random component
Create a `Random` component with 2 props:

- `min`: A number
- `max`: A number

The component should display a random integer in the range between the `min` and the `max` number.

**Example:**

```js
<Random min={1} max={6}/>
<Random min={1} max={100}/>
```

**Expected Output:**

![image](https://user-images.githubusercontent.com/5306791/52957202-718f4500-3391-11e9-9b45-d1172067e877.png)

## BoxColor component
Create a `BoxColor` component that displays a rectangle with a background color based on props. For this, you will need to add inline styles ([documentation](https://reactjs.org/docs/dom-elements.html#style)).

The component should take 3 props:

- `r`: A number between `0` and `255` representing the amount of red
- `g`: A number between `0` and `255` representing the amount of green
- `b`: A number between `0` and `255` representing the amount of blue

**Example:**

```js
<BoxColor r={255} g={0} b={0} />
<BoxColor r={128} g={255} b={0} />
```

**Expected Output:**

![image](https://user-images.githubusercontent.com/5306791/52957816-ec0c9480-3392-11e9-9e00-67094fa2b431.png)

As a bonus, you can also display the hex values of the color (e.g., `#ff0000` for red).


## Ref
- [Ironhack](https://github.com/ironhack-labs/lab-react-training)

