import React from 'react';
import "./Activity.css";

//const [activityadd, setActivity] = useState("");

function Activity (props){


    const Addclick = ()=>{
        
        props.addNewTaskFunc(props.src)
    }
    
    return(
        
        <div className="prueba">
            
             
             <div className="col-12 col-md-4 ">
                    <img className="image" onClick={Addclick} src={props.src} />
             </div>
             <div className="col-12 col-md-4 ">
                   
             </div>
             
 
        </div>
    ) 
   
}


export default Activity;



