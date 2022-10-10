// iteration 2: add style and commit changes
import './App.css';

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div className="Card-container">
      <img src={picture} alt="IdCard"></img>
      <ul>
        <li>First name: {firstName}</li>
        <li>Last name: {lastName}</li>
        <li>Gender: {gender}</li>
        <li>Height: {height}</li>
        <li>Birth: {birth}</li>
      </ul>
    </div>
  );
};

const Greeting = ({ lang, nimi }) => {
  const sayHi = () => {
    switch (lang) {
      case 'de':
        return 'Hallo';
      case 'en':
        return 'Hello';
      case 'es':
        return 'Hola';
      case 'fr':
        return 'Bonjour';
      default:
        return 'language not founded';
    }
  };

  return (
    <div className="Greeting-container">
      <p>
        {sayHi()} {nimi}
      </p>
    </div>
  );
};

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
