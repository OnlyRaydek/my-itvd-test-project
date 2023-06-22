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
      <section class="intro container">
      <div>
        <h1 class="intro__title"><span>YUMMY</span><br/>PUG</h1>
        <p class="intro__text">
          Всім привіт, я Ямі і я мопс, який дуже сильно полюбляє солодощі. Сьогодні я розкажу вам, чому саме солодощі і чому вони так важливі в нашому житті.
          <br/>
          Доречі, моє імʼя з англійської мови перекладається як “Смачний”.
        </p>
        <button class="intro__button">
          Мої улюбленні солодощі
        </button>
      </div>
      <img  class="intro__image" src="/puppy-1.png" alt="puppy"/>
    </section>
      <section class="sweets" id="sweets">
        <h2 class="sweets__title container">
          <span>мої улюбленні</span> солодощі
        </h2>
        <div class="sweets__items container">
          <div class="sweets__item">
            <img class="sweets__item__image" src="/sweet-1.png" alt="sweet" />
            <h3 class="sweets__item__title">Червоний мак</h3>
            <p class="sweets__item__description">Пралене з додаванням карамельної крихти, пасти ядер горіхів фундука та мигдалюпокрите шоколадною глазурʼю</p>
          </div>
          <div class="sweets__item">
            <img class="sweets__item__image" src="/sweet-2.png" alt="sweet" />
            <h3 class="sweets__item__title">Сливки-ленивки</h3>
            <p class="sweets__item__description">Світлі вафельні листи, поєднані молочно-вершковою начинкою та покриті глазур’ю.</p>
          </div>
          <div class="sweets__item">
            <img class="sweets__item__image" src="/sweet-3.png" alt="sweet" />
            <h3 class="sweets__item__title">Ліщина</h3>
            <p class="sweets__item__description">Праліне з додаванням подрібненої та тертої ліщини та мигдалю, покрите шоколадною глазур’ю.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
