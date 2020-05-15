import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./Schedule.css";
import ScheduleTask from './ScheduleTask';
//import ScheduleTask from './ScheduleTask'


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
  }, []);
  useEffect(() => {
    axios.get("https://i8wrj1k7nk.execute-api.eu-west-1.amazonaws.com/dev/activity/")
      .then(response => {
        console.log("success", response.data);
        setActivities(response.data);
      })
      .catch(err => {
        console.log("Error", err);
      });
  }, []);


  const addNewActivity = (id, imageUrl) => {
      console.log('Inside addNewActivity');
      axios.post("https://i8wrj1k7nk.execute-api.eu-west-1.amazonaws.com/dev/activity", {
         "activity_type_id": 1
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

  return (
    <div className="Schedule">
      <div className="container">
        <h1>ACTION TO ADD IN THE Schedule</h1>
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
                                          id={activityType.id}
                                          addActivity={addNewActivity} />
                  })
                }
              </div>
            </div>
          </div>

        </div>

        <div className="row">
          <div className="col col-12">
            
          </div>
        </div>
      

        <div className="row scheduleTask mb-2">
          <div className="col-3 col-md-3">To Do</div>
          <div className="col-3 col-md-3"></div>
          <div className="col-3 col-md-3">Completed</div>
        </div>

        <div className="row scheduleTask mb-2">
            <div className="col-3 col-md-3">
                <img className="image" src="images/homeworks.jpg" />
            </div>

            <div className="col-3 col-md-3">
                <button className="btn btn-success">DONE</button>
            </div>
            <div className="col-3 col-md-3">
                <img className="image" src="images/school.jpg" />
            </div>
        </div>



      </div>

    </div>
  )
}
export default Schedule;



