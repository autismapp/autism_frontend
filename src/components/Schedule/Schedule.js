import React, { useState } from 'react';
import Activity from './Activity';
import ScheduleTask from './ScheduleTask';
//import ScheduleTask from './ScheduleTask'


function Schedule() {


  const [activities, setTasks] = useState([

    {
      id: 1,
      text: 'homeworks',
      src: './images/homeworks.jpg',
    },

    {
      id: 2,
      text: 'play outside',
      src: './images/play_outside.jpg',
    },
    {
      id: 3,
      text: 'shower',
      src: './images/shower.jpg',
    },

  ])




  function handleAddActivity() {
    activities.map((activity) => {
      console.log(activity)
      console.log(activity.src)
      return activity;

    });
  }



  const [ScheduleTasks, setTasks1] = useState([
    {
      id: 1,
      text: "breakfast",
      src: './images/breakfast.jpg',
      Completed: 0
    },
    {
      id: 2,
      text: "bush the hair",
      src: './images/brush_hair.jpg',
      Completed: 1
    },
    {
      id: 3,
      text: "Get up",
      src: './images/get_up.jpg',
      Completed: 0
    }
  ])



  /* {activities.map((activity) =>{
  
                      return <Activity
                      key = {activity.id}
                      text={activity.text}
                       src ={activity.src}
  
                        />
                        })}*/

  return (


    <div className="Schedule">

      <h1>ACTION TO ADD IN THE Schedule</h1>
      <div className="container">
        <div className="row">
          <div className="col col-6">
            Add an Activity to the Schedule
                  </div>
          <div className="col col-6">
            <button type="button" className="btn btn-primary" onClick={handleAddActivity}>Add activity</button>
          </div>
        </div>

        <div className="row">
          <div className="col col-12">


            Photos of the activities, when you press the button Add activity 
            you can see here the pictures, of the activities that you can choose to add in your Schedule



          </div>

        </div>
      <h1>Schedule</h1>

        {ScheduleTasks.map((task)=>{

            return <ScheduleTask
            key = {task.id}
            text = {task.text}
            src = {task.src}
            completed = {task.Completed}
          />
        })}
      
      
      </div>

    </div>
  )
}
export default Schedule;



