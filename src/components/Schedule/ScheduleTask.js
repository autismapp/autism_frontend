import React from 'react';
//import "./schedule_task.css";



function ScheduleTask(props) {
    const handleAddClick = () => {
        console.log('CLICK HANDLED');
        props.addActivity(props.id);
    };

    return (
        <a className="dropdown-item" href="#">
            <img src={"https://autism-app-images.s3-eu-west-1.amazonaws.com/" + props.imageUrl} height="85px" width="85px" onClick={handleAddClick} />
        </a>
    )

}


export default ScheduleTask;




