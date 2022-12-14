import './Greeting.css';

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
        {sayHi()} { nimi }
      </p>
    </div>
  );
};

export default Greeting;
