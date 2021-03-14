import React from 'react';
import Navbar from './Navbar/navbar';
import FetchInfo from './component/fetch.js'


function HomePage(){
   return (
       <div>
         <Navbar/>
         <FetchInfo/> 
       </div>
   )   
}
export default HomePage;