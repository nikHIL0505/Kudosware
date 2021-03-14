import React, { useEffect, useState } from 'react';
import {Zoom} from 'react-reveal';

const Cards = ({data}) =>{
  
    const [rockets, setRockets] = useState([])

    useEffect(() => {
        if(data)
        setRockets(data);
    }, [data])


    return (
          rockets.map((item, index) => 
                    <Zoom key={index}>
                                <div className = "cards">
                                    <img src={item.links.mission_patch_small} style={{width:"195px",height:"160px", backgroundColor:'#edebed'}} alt="img not found"/>
                                    <br/>
                                    <a href={item.links.wikipedia} target="_blank"><h3 style={{color:'#265c9e', marginTop:'2%'}}>{`${item.mission_name} #${item.flight_number}`}</h3></a>
                                    <h3 style={{display:"flex", flexDirection:"row"}}>Mission ids: {item.mission_id[0] ? item.mission_id[0] : " Not available"} </h3>
                                    <h3>Launch Year: {item.launch_year}</h3>
                                    <h3>Successful Launch : {item.launch_success ? 'True' : 'False' }</h3>
                                    <h3>Successful Landing: {item.rocket.first_stage.cores[0].land_success ? 'True' : 'False'}</h3>
                                </div>
                    </Zoom>
         ) 
     )

}

 
export default Cards;