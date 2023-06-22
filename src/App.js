import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edited <code>src/App.js</code> and save to reload and another
          .
        </p>
        <div> Added new block </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section class="advice container" id="yummi">
      <div class="advice__details">
        <h3 class="advice__details__title">
          <span>Порада –</span>від Yummy
        </h3>
        <p class="advice__details__description">
          З'ївши чергову шоколадку, ви не просто набираєте трохи додаткових калорій, але покращуєте тим самим роботу мозку, настрій і стаєте трішки добрішим. Вирішивши поласувати шоколадкою, віддавайте перевагу саме чорному шоколаду з високим вмістом какао-бобів. У цьому вигляді шоколаду менше жиру і цукру, ніж в молочному шоколаді, але зате магнію, кальцію, заліза, білка, антиоксидантів і вітамінів предостатньо.
        </p>
        <h4 class="advice__details__">Солодощі, які радить їсти Ямі:</h4>
        <ul class="advice__details__list">
          <li>Чорний шоколад</li>
          <li>Зефір</li>
          <li>Пастила</li>
          <li>Мармелад</li>
          <li>Мед</li>
          <li>Халва</li>
          <li>Цукати</li>
        </ul>
      </div>
      <img class="advice__image" src="/puppy-2.png" alt="puppy"/>
    </section>
    </div>
  );
}

export default App;
