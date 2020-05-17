import React from 'react';



function Activity (props){

    
    const handleClickCompleted = ()=>{
        props.updateTaskFunc(props.id)

    }

    const handleClickDelete = ()=>{
        props.deleteTaskFunc(props.id);
    }
    


    
    return(
        <div className="row scheduleTask mb-2">
            
            <div className="col-3 col-md-3">
                {props.completed===0 && <img className="image" src={"https://autism-app-images.s3-eu-west-1.amazonaws.com/" + props.src} />}
            </div>
            <div className="col-3 col-md-3">
                {props.completed === 0 &&<button className="btn btn-success" onClick={handleClickCompleted} >Done</button>}
            </div>
            <div className="col-3 col-md-3">
                <button className="btn btn-danger" onClick={handleClickDelete}>Delete</button>
            </div>
            <div className="col-3 col-md-3">
                {props.completed===1 && <img className="image" src={"https://autism-app-images.s3-eu-west-1.amazonaws.com/" + props.src} />}
            </div>
        </div>


    ) 
   
}


export default Activity;




