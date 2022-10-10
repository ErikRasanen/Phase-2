# Group Activity 2

> Work in group to solve these tasks. 

## LikeButton

Create a `LikeButton` component that displays a button with the initial text `"0 Likes"`. With each click, the number of Likes should increase.

As a bonus, implement the background color change on each click. You can use the following array of colors: `['purple','blue','green','yellow','orange','red']`

**Example:**

```js
<LikeButton />
```

**Expected Output:**

![](https://media.giphy.com/media/OQJkfIEkYTUdYkgNP7/giphy.gif)
``
# Answer:
 
import { useState } from 'react'
    const colors = ['purple','blue','green','yellow','orange','red']
 
    const LikeButton = () => {
    const [likes, setLikes] = useState(0)
    const [likes1, setLikes1] = useState(0)
    const [isClicked, setIsClicked] = useState(true);
    const [isClicked1, setIsClicked1] = useState(true);
    const [likesColor, setlikesColor] = useState(0);
    const [likesColor1, setlikesColor1] = useState(0);
 
    const mystyle = {
        color: "white",
        backgroundColor: colors[likesColor],
        padding: "5px",
        margin: "10px"
    };
 
    const mystyle1 = {
        color: "white",
        backgroundColor: colors[likesColor1],
        padding: "5px",
        margin: "10px"
    };
 
      const handleClick = () => {
        if (isClicked) {
            setLikes(likes + 1);
            setlikesColor(likesColor + 1)
            if (likesColor > 4) {
                setlikesColor(0)
            }
 
        }
        setIsClicked(isClicked);
      }
 
      const handleClick1 = () => {
        if (isClicked1) {
            setLikes1(likes1 + 1);
            setlikesColor1(likesColor1 + 1)
            // console.log(likesColor1)
            if (likesColor1 > 4) {
                setlikesColor1(0)
            }
 
        }
        setIsClicked1(isClicked1);
      }
 
      return(
        <div>
            <button
                onClick={handleClick}
                style={mystyle}>{likes}
                {" "}Likes
            </button>
            <button
                onClick={handleClick1}
                style={mystyle1}>{likes1}
                {" "}Likes
            </button>
        </div>
      )
    }
 
    export default LikeButton



## ClickablePicture

Create a `ClickablePicture` component that displays a picture. On each click, the picture should toggle between the two images passed through the props.

**Example:**

```js
<ClickablePicture
  img='./img/maxence.png'
  imgClicked='./img/maxence-glasses.png'
/>
```

**Expected Output:**

![](https://media.giphy.com/media/9FXwCr2LLLIlgNL2sL/giphy.gif)



## Ref

https://github.com/ironhack-labs/lab-react-training

