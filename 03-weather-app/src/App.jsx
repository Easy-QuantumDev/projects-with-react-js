
import './App.css'
import SearchBar from './components/SearchBar'
import { useState } from 'react'
function App() {
  const [city,setCity] = useState('')
  
  function handleSearch(cityName){
  setCity(cityName)    
  }

  return (
    <main className="app">
      <SearchBar onSearch={handleSearch}/>
      
      <h1>Weather App</h1>
      <p>Discover the weather in your city.</p>
      {city?<p>city : {city}</p>:<p>no city selected</p>} 

    </main>
  )
}

export default App
