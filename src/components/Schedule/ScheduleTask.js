import React from 'react';
//import "./schedule_task.css";



function ScheduleTask (props){

    
    const handleClickCompleted = ()=>{
        props.updateTaskFunc(props.id)

    }

    const handleClickDelete = ()=>{
        props.deleteTaskFunc(props.id);
    }
    


    
    return(
        <div className="row scheduleTask mb-2">
            
            <div className="col-3 col-md-3">
                {props.completed===0 && <img className="image" src={props.src} />}
            </div>
            <div className="col-3 col-md-3">
                {props.completed === 0 &&<button className="btn btn-success" onClick={handleClickCompleted} >Mark as complete</button>}
            </div>
            <div className="col-3 col-md-3">
                <button className="btn btn-danger" onClick={handleClickDelete}>Delete</button>
            </div>
            <div className="col-3 col-md-3">
                {props.completed===1 && <img className="image" src={props.src} />}
            </div>
        </div>


    ) 
   
}


export default ScheduleTask;




