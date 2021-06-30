import './App.css';
import {NavBar} from './components/navBar/navBar';
import {ItemListContainer} from './components/ItemListContainer/itemListContainer'
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'
import {  BrowserRouter as Router,  Switch,  Route} from "react-router-dom";


export const App= () => {

  return(
    <Router>
    <main>
      <h1>CREACIONES MAFRA</h1>
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <ItemListContainer />
        </Route>
        <Route exact path="/category/:id">
          <ItemListContainer />
        </Route>
        <Route exact path="/item/:id">
        <ItemDetailContainer />
        </Route>
      </Switch>
      <h2>!Ofertas de las semana¡</h2>
    </main>
    </Router>

  )
  
}



// function App() {
 
//   const texto = 'Espacio para Items'

//   return (

//     //Desarrollo del navbar.

//     <div className="App">
//       <h1>CREACIONES MAFRA</h1>
//       <NavBar/>
//       <ItemListContainer greeting={texto}/>

//       <ItemDetailContainer/>
  
//       <h2>!Ofertas de las semana¡</h2>
      
//     </div>
//   );
// }

// export default App;
