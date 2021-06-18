import './App.css';
import {NavBar} from './components/navBar/navBar';
import {Items} from './components/ItemListContainer/itemListContainer'

function App() {
 
  const texto = 'Espacio para Items'

  return (

    //Desarrollo del navbar.

    <div className="App">
      <h1>CREACIONES MAFRA</h1>
      <NavBar/>
      <Items text={texto}/>
  
      <h2>!Ofertas de las semana¡</h2>
      
    </div>
  );
}

export default App;
