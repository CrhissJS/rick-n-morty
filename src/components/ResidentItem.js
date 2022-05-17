import axios from 'axios';
import {useEffect, useState} from 'react';

const ResidentItem = ({url}) => {

    const [resident, setResident] = useState({})

    useEffect(() => {
        axios
        .get(url)
        .then((res) => setResident(res.data))
    }, []);

    console.log(resident)

    return (
        <li className='resident-container'>
            <h2><span>{resident.name}</span></h2>
            <img src={resident.image} alt=''/>
            <h3>specie: <span>{resident.species}</span></h3>
            <h3>status: <span>{resident.status}</span></h3>
            <h3>origin: <span>{resident.origin?.name}</span></h3>
            <h3>episodes where appear: <span>{resident.episode?.length}</span></h3>
            
        </li>
    );
};

export default ResidentItem;