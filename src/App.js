/*
import logo from './logo.svg';
import './App.css';
*/
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import './components/ItemListContainer/ItemListContainer.css';
import { NavBar } from "./components/NavBar/NavBar";


function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Bienvenidos a MALBA vinoteca"/>
    </>
  );

}

/* 
//Primer ejemplo clase 01
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default App;
