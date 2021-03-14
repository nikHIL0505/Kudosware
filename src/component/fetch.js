import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import Cards from './cards.jsx';
import Filters from './filter';

const FetchInfo = () => {
   
      const [posts, setPosts] = useState([])
      const [loading, setLoading] = useState(true)
      

      useEffect(()=>{
         axios.get(`https://api.spacexdata.com/v3/launches?limit=100`)
                .then(res => {setPosts(res.data); setLoading(false)})
                .catch(err => console.log(err))
      },[])


       if(loading){
           return(
               <h1>Loading....</h1>
           )
       }
       else{
           return(
              <div className="homeScreen">
                   <div className="a">
                      <Filters handleFilterChange={(data) => {setPosts(data)} }/>
                   </div>
                   <div className="cardsList">
                     <Cards data={posts}/>
                   </div>
              </div>
           )}
                   
}
 
export default FetchInfo;