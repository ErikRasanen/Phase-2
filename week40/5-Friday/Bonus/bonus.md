# Bonus

##  Dice

Create a `Dice` component that displays a picture with the random dice value (example: `'./img/dice3.png'`).

Every time the user clicks on the component, it should:

- First, display an empty picture (`'./img/dice-empty.png'`)
- 1 second later, display a new random picture (example: `'./img/dice6.png'`).


**Example:**

```js
<Dice />
```

**Expected Output before the click:**

![image](https://user-images.githubusercontent.com/5306791/52976705-c13e3280-33ca-11e9-8684-f4dbff643b79.png)

**Expected Output immediately after the click:**

![image](https://user-images.githubusercontent.com/5306791/52976790-25f98d00-33cb-11e9-864e-ec14b4ec2a31.png)

**Expected Output 1 second after the click:**

![image](https://user-images.githubusercontent.com/5306791/52976752-f64a8500-33ca-11e9-98ee-b0b17f5e85b2.png)

##  Carousel

Create a `Carousel` component that displays an image and two buttons (<kbd>Left</kbd> and <kbd>Right</kbd>), which change the picture on each click, respectively.

The component should take 1 prop:

- `images`: An array of strings. Each string should be an image URL.

**Example:**

```js
<Carousel
  images={[
    'https://randomuser.me/api/portraits/women/1.jpg',
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg'
  ]}
/>
```

**Expected Output:**

![](https://media.giphy.com/media/1n7cAJu0MWerLnnohR/giphy.gif)


## Ref

https://github.com/ironhack-labs/lab-react-training

