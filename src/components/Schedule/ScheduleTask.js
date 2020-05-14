import React from 'react';
//import "./schedule_task.css";



function ScheduleTask(props) {



    const handleClick = () => {
        console.log("buttom pressed")
    }


    return (
        <div className="row scheduleTask mb-2">
            <div className="col-3 col-md-3">
                <img className="image" onClick={handleClick} src={props.src} />
            </div>

            <div className="col-3 col-md-3">
                {props.completed === 0 && <button className="btn btn-success" >Mark as complete</button>}
            </div>
            <div className="col-3 col-md-3">
                <button className="btn btn-danger" onClick={handleClick}>Delete</button>
            </div>


        </div>


    )

}


export default ScheduleTask;




