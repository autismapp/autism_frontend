import React, {useState} from 'react';
import Activity from './Activity';
//import ScheduleTask from './ScheduleTask'


function Schedule(){
  
  
  const [activities, setTasks] = useState([

        { 
          id: 1,
          text: 'breakfast', 
          src: './images/breakfast.jpg',  
        },
    
        { 
          id: 2,
          text: 'brush the hair', 
          src: './images/brush_hair.jpg',  
        },
        { 
          id: 3,
          text: 'Get up', 
          src: './images/get_up.jpg',  
        },
    
      ])

      

    return (
        <div className="Schedule">
          
            <h1>ACTION TO ADD IN THE Schedule</h1>
            <h2>Press an action to add in the Shedule</h2>
          

              <main>
                  {activities.map((activity) =>{

                    return <Activity
                            key = {activity.id}
                            text={activity.text}
                            src ={activity.src}
                    
                    />
                  })}
              </main>

        </div>
    ) 
    }
    export default Schedule;



    