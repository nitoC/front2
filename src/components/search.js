import React, { useState } from 'react';
import searchIcon from '../assets/images/Search.png';
import axios from 'axios';
import SearchItems from './searchItems';

const Search = ({handledata})=> {
  const [search, setsearch] = useState('')
  const [display, setdisplay] = useState(false)
 const [typing, settyping] = useState(false)
 const auth = process.env.REACT_APP_AUTH
 const accesskey = process.env.REACT_APP_ACCESSKEY
 const url =`https://api.themoviedb.org/3/search/movie?api_key=${accesskey}&query=${search}`;
 const options = {
   method: "GET",
   headers: {
     accept: "application/json",
     Authorization:auth
   },
 };
 let result;
 let final;
  const handleSearch = (e)=>{
    let sFetch;
     setsearch(e.target.value)
     setdisplay(true)
     if(e.target.value ===''){
      console.log('helloow')
     }
     if(!typing&&e.target.value!==''&&e.target.value!==null){
       sFetch = setTimeout(() => {
        
        fetchdata()
        settyping(true)
      }, 2000);
     }else{
      clearTimeout(sFetch)
      setdisplay(false)
      settyping(false)
     }
  }
  async function fetchdata() {
    try{
      result = await axios.get(url, options);
      final = await result.data;
      console.log(result.data);
      console.log(search)
      setsearch(final.results);
      handledata(final.results)
      
    }catch(err){
      console.log(err)
    }
  }
    return ( 
        <>
        <form className="search-bar">
            <input onChange={handleSearch} className='search-input' type='text' placeholder='What do you want watch?'/>
          <button  className='search-icon-wrapper'>
            <img src={searchIcon} alt='search icon'/>
          </button>
        </form>
        <SearchItems movie = {search} display={display} handledisplay={(data)=> setdisplay(data)}/>
        </>
     );
}

export default Search;