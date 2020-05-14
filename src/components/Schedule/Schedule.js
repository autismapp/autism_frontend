import React, { useState } from 'react';
import Activity from './Activity';
import ScheduleTask from './ScheduleTask';
//import { act } from '@testing-library/react';
//import ScheduleTask from './ScheduleTask'


function Schedule() {


  
  const [activities] = useState([

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

  const [showResults, setShowResults] = useState(false)

  const handleAddActivity = () => setShowResults(true)


  const [ScheduleTasks, setTasks] = useState([
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


  const markTaskCompleted = (id) =>{
    
    const completedTask = ScheduleTasks.map((task)=>{
      if(task.id ===id ){
        task.Completed = true;
      }
      return task;
    })

    setTasks(completedTask)
  }


  const deleteTask = (id) =>{

    const filteredTasks = ScheduleTasks.filter((task)=>{
      if(task.id === id){
        return false;
      }else{
        return true;
      }
    })
      // update the state with the new array
    setTasks(filteredTasks)
  }

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

          
            { showResults ? 
              activities.map((act)=>{
                return <Activity 
                key = {act.id}
                id = {act.id}
                src = {act.src}
                />
                
              }) : null }

          </div>
        </div>

      <h1>Schedule</h1>

        {ScheduleTasks.map((task)=>{

            return <ScheduleTask

            deleteTaskFunc={deleteTask}
            updateTaskFunc={markTaskCompleted}
            key = {task.id}
            id ={task.id}
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



