
# Pair programming 2

> Please locate your breakout-room in the Excel sheet: `1-pair-programming.xls`

## Component: `DriverCard`

Create a `DriverCard` component that displays a rectangle with content based on the received props. 

The component should take 4 props:

- `name`: A string
- `rating`: A number between `0` and `5`.  The value can be a floating point number.
- `img`: A string
- `car`: An object with properties `model` and `licensePlate`.

**Example**

```js
<DriverCard
  name="Travis Kalanick"
  rating={4.2}
  img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
  car={{
    model: "Toyota Corolla Altis",
    licensePlate: "CO42DE"
  }}
/>

<DriverCard
  name="Dara Khosrowshahi"
  rating={4.9}
  img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
  car={{
    model: "Audi A3",
    licensePlate: "BE33ER"
  }}
/>
```

**Expected Output:**

![image](https://user-images.githubusercontent.com/5306791/52972847-66054380-33bc-11e9-92e0-8e48d1ab0212.png)

## (EXTRA - Optional) CreditCard component

Create a `CreditCard` component that displays a rectangle with the information coming from the props. 

The component should take 8 props:

- `type`: A string that can be `"Visa"` or `"Master Card"`
- `number`: A string that is the number of the credit card. For security reasons, you should only display the 4 last digits 😉
- `expirationMonth`: A number that represents the month, between 1 and 12
- `expirationYear`: A number that represents the year
- `bank`: A string that represents the name of the bank
- `owner`: A string that represents the name of the owner
- `bgColor`: A string for the background color of the card
- `color`: A string for the text color of the card

Take your time to make the component look as close to the *expected output* as possible. You'll probably want to use flexbox.

**Example:**

```js
<CreditCard
  type="Visa"
  number="0123456789018845"
  expirationMonth={3}
  expirationYear={2021}
  bank="BNP"
  owner="Maxence Bouret"
  bgColor="#11aa99"
  color="white" 
/>
    
<CreditCard
  type="Master Card"
  number="0123456789010995"
  expirationMonth={3}
  expirationYear={2021}
  bank="N26"
  owner="Maxence Bouret"
  bgColor="#eeeeee"
  color="#222222"
/>
    
<CreditCard
  type="Visa"
  number="0123456789016984"
  expirationMonth={12}
  expirationYear={2019}
  bank="Name of the Bank"
  owner="Firstname Lastname"
  bgColor="#ddbb55"
  color="white" 
/>
```

**Expected Output:**

![image](https://user-images.githubusercontent.com/5306791/52975678-ac5fa000-33c6-11e9-8cbf-7d13a8a0f625.png)


## Ref
- [Ironhack](https://github.com/ironhack-labs/lab-react-training)

