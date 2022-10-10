# Adding styles to React app

The appearance of our current application is quite modest. Let's take a look at how we can add styles to a React application. There are several different ways of doing this and we will take a look at the other methods later on. First, we will add CSS to our application the old-school way; in a single file. 

Let's add a new <i>index.css</i> file under the <i>src</i> directory and then add it to the application by importing it in the <i>index.js</i> file:

```js
import './index.css'
```

Let's add the following CSS rule to the <i>index.css</i> file:

```css
h1 {
  color: green;
}
```

**Note:** when the content of the file <i>index.css</i> changes, React might not notice that automatically, so you may need to refresh the browser to see your changes!

CSS rules comprise of <i>selectors</i> and <i>declarations</i>. The selector defines which elements the rule should be applied to. The selector above is <i>h1</i>, which will match all of the <i>h1</i> header tags in our application.

The declaration sets the _color_ property to the value <i>green</i>.

One CSS rule can contain an arbitrary number of properties. Let's modify the previous rule to make the text cursive, by defining the font style as <i>italic</i>:

```css
h1 {
  color: green;
  font-style: italic;  
}
```


There are many ways of matching elements by using [different types of CSS selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors).


If we wanted to target, each  note below with our styles, we could use the selector <i>li</i>, as  the note component is wrapped inside <i>li</i> tags:

```js
const Note = ({ note }) => {
  c
  return (
    <li>
      {note.content} 
    </li>
  )
}
```


Let's add the following rule to our style sheet:

```css
li {
  color: grey;
  padding-top: 3px;
  font-size: 15px;
}
```


Using element types for defining CSS rules is slightly problematic. If our application contained other <i>li</i> tags, the same style rule would also be applied to them.


If we want to apply our style specifically to notes, then it is better to use [class selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors).


In regular HTML, classes are defined as the value of the <i>class</i> attribute:

```html
<li class="note">some text...</li>
```


In React we have to use the [className](https://reactjs.org/docs/dom-elements.html#classname) attribute instead of the class attribute. With this in mind, let's make the following changes to our <i>Note</i> component:

```js
const Note = ({ note }) => {
  
  return (
    <li className='note'> 
      {note.content} 
    </li>
  )
}
```


Class selectors are defined with the _.classname_ syntax:

```css
.note {
  color: grey;
  padding-top: 5px;
  font-size: 15px;
}
```

If you now add other <i>li</i> elements to the application, they will not be affected by the style rule above.

## Inline styles

React also makes it possible to write styles directly in the code as so-called [inline styles](https://react-cn.github.io/react/tips/inline-styles.html).

The idea behind defining inline styles is extremely simple. Any React component or element can be provided with a set of CSS properties as a JavaScript object through the [style](https://reactjs.org/docs/dom-elements.html#style) attribute.

CSS rules are defined slightly differently in JavaScript than in normal CSS files. Let's say that we wanted to give some element the color green and italic font that's 16 pixels in size. In CSS, it would look like this:

```css
{
  color: green;
  font-style: italic;
  font-size: 16px;
}
```

But as a React inline style object it would look like this:

```js
{
  color: 'green',
  fontStyle: 'italic',
  fontSize: 16
}
```

Every CSS property is defined as a separate property of the JavaScript object. Numeric values for pixels can be simply defined as integers. One of the major differences compared to regular CSS, is that hyphenated (kebab case) CSS properties are written in camelCase.

Next, we could add a "bottom block" to our application by creating a <i>Footer</i> component and defining the following inline styles for it:

```js
const Footer = () => {
  const footerStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16
  }

  return (
    <div style={footerStyle}>
      <br />
      <em>Note app, Department of Computer Science, University of Helsinki 2022</em>
    </div>
  )
}


const App = () => {
  // ...

  return (
    <div>
      <h1>Notes</h1>
      
      // ...  
      <Footer /> 
    </div>
  )
}
```

Inline styles come with certain limitations. For instance, so-called [pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) can't be used straightforwardly.

Inline styles and some of the other ways of adding styles to React components go completely against the grain of old conventions. Traditionally, it has been considered best practice to entirely separate CSS from the content (HTML) and functionality (JavaScript). According to this older school of thought, the goal was to write CSS, HTML, and JavaScript into their separate files.


The philosophy of React is, in fact, the polar opposite of this. Since the separation of CSS, HTML, and JavaScript into separate files did not seem to scale well in larger applications, React bases the division of the application along the lines of its logical functional entities.


The structural units that make up the application's functional entities are React components. A React component defines the HTML for structuring the content, the JavaScript functions for determining functionality, and also the component's styling; all in one place. This is to create individual components that are as independent and reusable as possible.

## Ref
[fullstackopen.com](https://fullstackopen.com/en/part2/adding_styles_to_react_app)