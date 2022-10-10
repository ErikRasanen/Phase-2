// Iteration 1: basic functionality, no CSS
const IdCard = (props) => {
  return (
    <div>
      <img src={props.picture} alt="IdCard"></img>
      <ul>
        <li>First name: {props.firstName}</li>
        <li>Last name: {props.lastName}</li>
        <li>Gender: {props.gender}</li>
        <li>Height: {props.height}</li>
        <li>Birth: {props.birth}</li>
      </ul>
    </div>
  );
};

const Greeting = (props) => {
  const sayHi = () => {
    switch (props.lang) {
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
    <div>
      <p>
        {sayHi()} {props.nimi}
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
