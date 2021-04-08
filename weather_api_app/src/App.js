import React, {useEffect,useState} from "react";
import Weather from './Weather'
function App() {
  const [recipes, setRecipes] = useState({});
  const [search, setSearch] = useState('');
  const [query,setQuery] = useState('');
  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
    setSearch('')
  }
  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=e963df02d3b774b6f8f9e872d6a30cbf`)
      const data = await response.json();
      await setRecipes(data)
      // await console.log("data",data.weather[0].description)
    }
    getRecipes();
  },[query]);
  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
      <p>Checkout the City Weather</p>
        <input className="search-bar" type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {(typeof recipes.base != "undefined") ? (
      <Weather key={recipes.weather[0].id} title={recipes.name} main={recipes.weather[0].main} description={recipes.weather[0].description}/>
      ) : ('')}
    </div>    
  );
}
export default App;
