import './App.css';
import {NavBar} from './components/navBar/navBar';
import {ItemListContainer} from './components/ItemListContainer/itemListContainer'

function App() {
 
  const texto = 'Espacio para Items'

  return (

    //Desarrollo del navbar.

    <div className="App">
      <h1>CREACIONES MAFRA</h1>
      <NavBar/>
      <ItemListContainer greeting={texto}/>
  
      <h2>!Ofertas de las semana¡</h2>
      
    </div>
  );
}

export default App;
