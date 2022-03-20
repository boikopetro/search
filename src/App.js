import './App.css';
import {useMemo, useState} from "react";

function App() {
  const data = ["вс2249аа", "ав12345ав", "аа456аа"];
  const [searchQuery, setSearchQuery] = useState("");

  const search = useMemo(() => data.filter(n => n.trim().toUpperCase().includes(searchQuery.trim().toUpperCase()))
      , [searchQuery,data])
  console.log(search)
  return (
      <div className="App">
        <h1>Пошук</h1>
        <div>
          <input
              className="input"
              placeholder="введіть номер"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}/>
        </div>
        <div>
          {searchQuery && search.map(n =>
              <div>
                <p key={n.i} style={{color: (n === searchQuery) ? "red" : "black"}}>{n}</p>
                <div>{(n === searchQuery) ? <p className="danger">Розшук!!!</p> : ""}</div>
              </div>)}
        </div>
      </div>
  );
}

export default App;
