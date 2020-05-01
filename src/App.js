import React, {useState, useEffect} from 'react';
import api from "./services/api";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App(){
  const apiKey = "8a2237b6f699524875f2178690fb69d3";
  const [cidade, setCidade] = useState("");
  const [pais, setPais] = useState("");
  const [nome, setNome] = useState("");
  const [temperatura, setTemperatura] = useState(0);

  async function Busca(){
    const resposta = await api.get(`weather?q=${cidade}&units=metric&appid=${apiKey}`);
    const resultado = resposta.data;
    setNome(resultado.name);
    setTemperatura(resultado.main.temp);
    setPais("," + resultado.sys.country);
  }

  useEffect(()=>{Busca()},[cidade])

  return(
    <div className="App">
      <div className="quadro">
        <h1>Temperatura de Cidades</h1>
        <input onChange={e=>setCidade(e.target.value)}value={cidade}/>
          <h1>{nome}{pais}</h1>
          <h1>{Math.round(temperatura)}°</h1>
        </div> 
    </div>
  );
}

export default App;