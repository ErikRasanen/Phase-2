
# Pair programming 1

> Please locate your breakout-room in the Excel sheet: `1-pair-programming.xls`

## Rating component
Create a `Rating` component that displays 5 stars. Depending on the value received, some stars should be empty (☆), and some should be filled (★).

The component should take 1 prop:

- `stars`: A number between `0` and `5`. The value can be a floating-point number. If the number received is `3.9`, the component should display 4 stars.

**Example:**

```js
<Rating stars={0} />
<Rating stars={1.49} />
<Rating stars={1.5} />
<Rating stars={3} />
<Rating stars={4} />
<Rating stars={5} />
```

**Expected Output:**

![image](https://user-images.githubusercontent.com/5306791/52972787-39512c00-33bc-11e9-93d8-428d835442fd.png)



## Ref
- [Ironhack](https://github.com/ironhack-labs/lab-react-training)

