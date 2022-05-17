import axios from 'axios';
import {useEffect, useState} from 'react'
import ResidentItem from './ResidentItem';


const Location = () =>{

    const [location, setLocation] = useState({})

    const [id, setId] = useState("")

    useEffect(()=>{

        const random = Math.floor(Math.random() * 126) + 1;
        axios
        .get(`https://rickandmortyapi.com/api/location/${random}`)
        .then((res) => setLocation(res.data));

    },[])

    const searchId = () => {
        console.log(id)
        if( id <= 126){
            axios
            .get(`https://rickandmortyapi.com/api/location/${id}`)
            .then((res) => setLocation(res.data))    
        }else{
            alert("We only have 126 locations to show")
        }

    }

    console.log(location);




    return(
        <div>
            <header></header>
            <h2><span>Find a Location</span></h2>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button onClick={searchId}>Search</button>
            
            <div className='container-principal'>
                <h1 className='location-title'>{location.name}</h1>
                <div className='title-container'>
                    <h3>type: <span>{location.type}</span> </h3>
                    <h3>dimesion: <span>{location.dimension}</span></h3>
                    <h3>population: <span>{location.residents?.length}</span></h3>
                </div>
            </div>
            
            <h2 className="title2">Residents from {location.name}</h2>
            <div className='container-residents'>
                <ul className='ul-list'>
                {location.residents?.map ((resident) =>(
                    <ResidentItem url={resident} key={resident}/>
                ))}
                </ul>
            </div>
        </div>
    )

}

export default Location;