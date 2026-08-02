import {Search} from "lucide-react";
import { useState } from "react";
function SearchBar({city,setCity,fetchWeather,recentSearches, handleRecentClick}){
    const [showRecent,setShowRecent]=useState(false);
    const handleSearch =()=>{
     if(city.trim()){
        fetchWeather(city.trim());
        setShowRecent(false);
     }
    };
    return(
         <div className="search-bar">
           <input
            type="text"
             placeholder="Search"
              value={city} 
              onKeyDown={(e)=>{
                if(e.key=="Enter"){
                    handleSearch();
                }
              }}
              onFocus={()=>setShowRecent(true)}
              onChange={(e)=>setCity(e.target.value)} 
              /> 
              {
                showRecent && recentSearches.length>0 &&(
                    <div className="recent-dropdown">
                        {
                            recentSearches.map((item,index)=>(
                                <div key={index}
                                className="recent-item"
                                onClick={()=>handleRecentClick(item)}>
                                    {item}
                                    </div>
                            ))
                        }
                        </div>
                )
              }

        <button 
        onClick={handleSearch}>
            <Search color="#333" size={20} />
            </button>

         </div>
    );
}
  
export default SearchBar;
