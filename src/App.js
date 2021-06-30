import './App.css';
import {NavBar} from './components/navBar/navBar';
import {ItemListContainer} from './components/ItemListContainer/itemListContainer'
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'
function App() {
 
  const texto = 'Espacio para Items'

  return (

    //Desarrollo del navbar.

    <div className="App">
      <h1>CREACIONES MAFRA</h1>
      <NavBar/>
      <ItemListContainer greeting={texto}/>

      <ItemDetailContainer/>
  
      <h2>!Ofertas de las semana¡</h2>
      
    </div>
  );
}

export default App;
