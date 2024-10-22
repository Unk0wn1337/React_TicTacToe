
import { useContext } from 'react';
import './App.css';
import Jatekter from './components/Jatekter';
import { KattContext, KattProvider } from './context/KattContext';

function App() {
 
  /*Itt akarjuk használni a listát, useContext hook  segítségével*/
  const {lista} = useContext(KattContext) 
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>TicTacToe</h1>
      </header>
      <article>
      
    
        <Jatekter lista={lista}/>
      

      </article>
      <footer>
        <h1>Simon Kende</h1>
      </footer>
    </div>
  );
}

export default App;
