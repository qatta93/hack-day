import { Link } from "react-router-dom";
import './App.css';

const App = () => {
  return (
    <main className='main'>
      <section className='welcome'>
        <h1 className='welcome__title'>Don't know where to go?</h1>
        <h2 className='welcome__description'>Let the app surprise you!</h2>
        <Link to="holidays" className='welcome__button'>LET'S GO!</Link>
      </section>
    </main>
  );
}

export default App;
