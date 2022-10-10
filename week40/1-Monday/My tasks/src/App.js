import React from 'react';
import './App.css';

/* COMPONENTS */
import IdCard from './components/IdCard/IdCard';
import Greeting from './components/Greeting/Greeting';
import Random from './components/Random/Random';
import BoxColor from './components/BoxColor/BoxColor';
import Rating from './components/Rating/Rating';
import DriverCard from './components/DriverCard/DriverCard';
import CreditCard from './components/CreditCard/CreditCard';



const App = () => {
  

  return (
    <div className="App"> 
      
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{model: "Toyota Corolla Altis",licensePlate: "CO42DE"
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

      <IdCard
        lastName='Hertzen'
        firstName='Ludwig'
        gender='male'
        height={178}
        picture="https://randomuser.me/api/portraits/men/42.jpg"
      />

      
      <Greeting lang="de" nimi="Ludwig" />
      <Random min={1} max={6}/>
      <BoxColor r={255} g={0} b={0} />
      <Rating stars={0} />
      <Rating stars={1.49} />
      <Rating stars={1.5} />
      <Rating stars={3} />
      <Rating stars={4} />
      <Rating stars={5} />
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={171}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <Greeting lang="en" nimi="John" />
      <Random min={1} max={100}/>
      <BoxColor r={128} g={255} b={0} />
      <Rating stars={0} />
      <Rating stars={1.49} />
      <Rating stars={1.5} />
      <Rating stars={3} />
      <Rating stars={4} />
      <Rating stars={5} />

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
      bank="Universal"
      owner="Barn Born"
      bgColor="#ddbb55"
      color="white" 
      />
    </div>
  );
};

export default App;
