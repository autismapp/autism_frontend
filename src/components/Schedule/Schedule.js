import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./Schedule.css";
import ScheduleTask from './ScheduleTask';
import Activity from './Activity';


function Schedule() {
  const [activityTypes, setActivityTypes] = useState([]);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get("https://i8wrj1k7nk.execute-api.eu-west-1.amazonaws.com/dev/activity-type")
      .then(response => {
        console.log("success", response.data);
        setActivityTypes(response.data);
      })
      .catch(err => {
        console.log("Error", err);
      });

    axios.get("https://i8wrj1k7nk.execute-api.eu-west-1.amazonaws.com/dev/activity/")
      .then(response => {
        console.log("success", response.data);
        setActivities(response.data);
      })
      .catch(err => {
        console.log("Error", err);
      });
  }, []);


  const addNewActivity = (id) => {
    axios.post("https://i8wrj1k7nk.execute-api.eu-west-1.amazonaws.com/dev/activity", {
      "activity_type_id": id
    })
      .then(response => {
        console.log('Got response from Axios');
        const newActivity = response.data;

        const newActivities = [...activities, newActivity];
        setActivities(newActivities);

        console.log(newActivities);
      })
      .catch(err => {
        console.log("Error creating tasks", err);
      });
  };

  const markTaskCompleted = (id) => {
    axios.put(`https://i8wrj1k7nk.execute-api.eu-west-1.amazonaws.com/dev/activity/${id}`, { completed: 1 }).then(response => {
      const updatedActivities = activities.map((activity) => {
        if (activity.activity_id === id) {
          activity.completed = 1;
        }
        return activity;
      });

      setActivities(updatedActivities);
    });
  };

  const deleteTask = (id) => {
    axios.delete(`https://i8wrj1k7nk.execute-api.eu-west-1.amazonaws.com/dev/activity/${id}`).then(response => {
      const filteredActivities = activities.filter((activity) => {
        if (activity.activity_id === id) {
          return false;
        } else {
          return true;
        }
      });

      setActivities(filteredActivities);
    });
  };

  return (
    <div className="Schedule">
      <div className="container">
        <h1>My Schedule</h1>
        <div className="row">
          <div className="col col-6">
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Activity Types
            </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {
                  activityTypes.map((activityType) => {
                    return <ScheduleTask imageUrl={activityType.image_url}
                      id={activityType.activity_type_id}
                      addActivity={addNewActivity} />
                  })
                }
              </div>
            </div>
          </div>
        </div>


        <div className="row scheduleTask mb-2">
          <div className="col-3 col-md-3">To Do</div>
          <div className="col-3 col-md-3">Done</div>
          <div className="col-3 col-md-3">Delete</div>
          <div className="col-3 col-md-3">Completed</div>
        </div>

        {activities.map((activity) => {
          return <Activity
            deleteTaskFunc={deleteTask}
            updateTaskFunc={markTaskCompleted}
            key={activity.activity_id}
            id={activity.activity_id}
            src={activity.image_url}
            completed={activity.completed}
          />
        })}

      </div>
    </div>
  )
}
export default Schedule;



