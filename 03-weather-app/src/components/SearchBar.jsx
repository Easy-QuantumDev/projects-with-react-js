import { useState } from "react";
function SearchBar({onSearch}){
const [searchValue,setSearchValue] = useState('')
function handleSubmit(e){
e.preventDefault()
const city = searchValue.trim()
if(!city) return;
onSearch(city)


}
return(
    <form onSubmit={handleSubmit}>
    
    <input type="text" value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} />
    
    <button type="submit">search</button>

    </form>
)
}
export default SearchBar