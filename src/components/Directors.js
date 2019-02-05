import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      
      <h1>Directors Page</h1>
      {directors.map( (director) => {
        return (<div className='director'>
         <h3>Name: {director.name}</h3>
         <div> 
         Movies:
        
          <ul> 
           
            {director.movies.map((movie) => {

            return <li> {movie} </li>
            })
    
            }
           </ul>
         </div>
        
        </div>
        )
      })
      } 
    </div>
  );
}

export default Directors
