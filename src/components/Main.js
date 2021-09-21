import React ,{useState} from 'react'
import styles from './SearchBar.module.css'; 

import { HiSearch } from "react-icons/hi";

const SearchBar = () => {
    
    return (
        <>
const [name,setName]= useState("")
<div class="container">
  <div> <input type="text" placeholder="search..." 
  onchange="{event =>{setName(event.target.value)} }">
  </div>
  data.filter( val =>{
  if(name==""){
  return val}
  else if(val.firstName.toLowerCase().includes(name.toLowerCase())) {
  }
  }).map((val, kkey =>{
  return (
    <div className="user" key={key}>
  <p>{val.firstName}</p>
  </div>
  )})

</div>
        </>
    )
}

export default SearchBar
