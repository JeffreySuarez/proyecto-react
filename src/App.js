import './App.css';

function App() {


  const name = 'Pedro'

  const handleClick = ()=> alert('rat')


  return (
    <div className="App">
      <h1>Hola Soy {name}</h1>
      <button  onClick={handleClick}>Hacer Click</button>
      
    </div>
  );
}

export default App;
