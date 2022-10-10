// iteration 3: modulare approach
import './App.css';
import IdCard from './components/IdCard/IdCard';
import Greeting from './components/Greeting/Greeting';



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
    </>
  );
};

export default App;
