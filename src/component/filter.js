import React, {useState} from 'react';
import axios from 'axios';
import {Button} from 'antd';

const Filters = (props) => {
       
    const arr = [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020]
    
    const [launch, setLaunch] = useState(true)
    const [land, setLand] = useState(true)
    const [loading, setLoading] = useState(false)

    const fetchByYear = (item) => {
        axios.get(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=${launch}&land_success=${land}&launch_year=${item}`)
        .then(res => {
            props.handleFilterChange(res.data)
            console.log(res.data)
            setLoading(false)
        })
        .catch(err => console.log(err))
    }
    
    const fetchByLaunching = (stats) =>{
        axios.get(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=${stats}`)
        .then(res => { 
            props.handleFilterChange(res.data)
            setLoading(false)
        })
        .catch(err => console.log(err))

        console.log(launch);
    }

    const fetchByLanding = (stats) =>{
        axios.get(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=${stats}`)
        .then(res => { 
             props.handleFilterChange(res.data)
             setLoading(false)
        })
        .catch(err => console.log(err))

    }
    
    return ( 
          <div className="blockCards">
             <h2><b>Filters</b></h2>
               <div className="b">
                    <div>
                        <h3>Successful Launch</h3>
                        <hr/>
                            <Button style={{backgroundColor: 'rgb(165, 252, 165)'}} onClick={() => {setLaunch(true); fetchByLaunching(true); setLoading(true)} }>True</Button>
                            <Button  style={{backgroundColor: 'rgb(165, 252, 165)', marginLeft:'16%'}} onClick={() => {setLaunch(false); fetchByLaunching(false); setLoading(true)}}>False</Button>
                    </div>
                    <br/>
                    <div>
                        <h3>Successful Landing</h3>
                        <hr/>
                            <Button style={{backgroundColor: 'rgb(165, 252, 165)'}} onClick={() => { setLand(true); fetchByLanding(true); setLoading(true)}}>True</Button>
                            <Button  style={{backgroundColor: 'rgb(165, 252, 165)', marginLeft:'16%'}} onClick={() => { setLand(false); fetchByLanding(false); setLoading(true)}}>False</Button>
                    </div>
                    <div>
                        <h3>Launch Year</h3>
                        <hr/>
                        <div className="buttonList">
                            {arr.map((item, index)=><Button key={index} style={{backgroundColor: 'rgb(165, 252, 165)', marginBottom:'4%'}} onClick={() => {fetchByYear(item); setLoading(true)}}>{item}</Button>)}
                        </div>
                    </div>
               </div>
        </div>
     
       )
}

export default Filters