import { Key } from "lucide-react";
import SearchBar from "./SearchBar";

const key="weather-recents"; //whenever we save recent cities,we store them under weatehr-recents
export function getRecentSearches(){
    const searches=JSON.parse(localStorage.getItem(Key))||[]; //converting string into original data type form
return searches;
}
export function saveRecentSearches(city){
     const trimmedCity = city.trim();
    if (!trimmedCity) {
        return getRecentSearches();
    }
    const searches=getRecentSearches();
    const updatedSearches=searches.filter(
        (item)=>item.toLowerCase()!==city.toLowerCase()
    );
    updatedSearches.unshift(city);
    const finalSearches=updatedSearches.slice(0,4);
    localStorage.setItem(Key,JSON.stringify(finalSearches));
    return finalSearches;
}