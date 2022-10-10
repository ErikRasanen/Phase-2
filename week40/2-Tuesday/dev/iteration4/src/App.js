// iteration 4: add BoxColor and Random
import './App.css';
import IdCard from './components/IdCard/IdCard';
import Greeting from './components/Greeting/Greeting';
import BoxColor from './components/BoxColor/BoxColor';
import Random from './components/Random/Random';

const App = () => {
  return (
    <>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth="1992-07-14"
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth="1988-05-11"
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <hr />
      <Greeting lang="de" nimi="Ludwig" />
      <Greeting lang="fr" nimi="François" />

      <hr />
      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <hr />
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
    </>
  );
};

export default App;
