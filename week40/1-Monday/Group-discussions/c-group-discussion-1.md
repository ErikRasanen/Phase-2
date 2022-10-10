# Group Activity 1

> Work in group to solve these tasks. Later compare your solution with the one in the final folder(student's solution). 

## IdCard component
Create and render an `IdCard` component with 6 props:

- `lastName`: A string
- `firstName`: A string
- `gender`: A string, `'male'` or `'female'`
- `height`: A number
- `birth`: A date
- `picture`: A string

**Example:**

```js
<IdCard
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth={new Date("1992-07-14")}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>

<IdCard
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth={new Date("1988-05-11")}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>
```

**Expected Output:**

![image](https://user-images.githubusercontent.com/5306791/52976030-22b0d200-33c8-11e9-91fe-e3ce0fa14078.png)

## Greetings component

Create a `Greetings` component with 2 props:

- `lang`: A string that can have values: `"de"`, `"en"`, `"es"` or `"fr"`
- `name`: A text

The component should display a greeting text in the chosen language.

**Example:**

```js
<Greetings lang="de" nimi="Ludwig" />
<Greetings lang="fr"  nimi="François" />
```

**Expected Output:**

![image](https://user-images.githubusercontent.com/5306791/52957158-57edfd80-3391-11e9-8726-93c1a3389016.png)

## Ref
- [Ironhack](https://github.com/ironhack-labs/lab-react-training)



