import './App.css';

function App() {
    const name = "Frank"
    var nameComponent = null
    if (name === "Emma"){
      nameComponent = "Hi my name is Emma"
    } else if (name === "Megan"){
      nameComponent = "Hi my name is Megan"
    }else if (name === "Andrea"){
      nameComponent = "Hi my name is Andrea"
    }else if (name === "Autumn"){
      nameComponent = "Hi my name is Autumn"
    }else if (name === "Dan"){
      nameComponent = "Hi my name is Dan"
     } else
      nameComponent = "I am not a Johnston cousin"
    
    return (
      <div className="App">
        <header className="App-header">
          <div>{nameComponent}</div>
        </header>
      </div>
    );
    }
   

export default App
