import React from 'react';
import "./Activity.css";



function Activity (props){


    const handleClick = ()=>{
        console.log("buttom pressed")
    }
    
    
    return(
        
        <div className="prueba">

             
             <div className="col-12 col-md-4 ">
                    <img className="image" onClick={handleClick} src={props.src} />
             </div>
             <div className="col-12 col-md-4 ">
                    
             </div>
             
 
        </div>
    ) 
   
}


export default Activity;



