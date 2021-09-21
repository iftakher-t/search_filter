import React ,{useState} from 'react'
import styles from './SearchBar.module.css'; 
import data from './fakeData.json'

const SearchBar = () => {
    const [searchTag, setsearcgTag] = useState("")
    return (
        <>
            <div className={styles.container}>
                
                    <input type="text" placeholder="search..." 
                    onChange = {event =>{setsearcgTag(event.target.value)} } />

                { data.filter( el =>{
                    if( searchTag === ""){ 
                        return el
                    }else if( el.name.toLowerCase().includes( searchTag.toLowerCase())){
                        return el
                        } 
                        }).map((val, key) =>{
                            return(
                        <div className={styles.user} key={key} >
                            <p>{val.name} </p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default SearchBar
