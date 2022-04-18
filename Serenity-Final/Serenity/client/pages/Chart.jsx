import React from "react";
// import { useState } from 'react';
import MeditationTimeChart from "../components/MeditationTimeChart.jsx";
import MoodChart from "../components/MoodChart.jsx";

const Chart = () => {
  // const [user, setUser] = useState([
  //     {username : 'Garrett',
  //     mood : 'happy'}
  // ]);

  // const userName =  user.username;
  // const handleSetUser = ()=> {

  //     fetch('http://localhost:3000/api/users'+id)
  //     .then(response=>response.json())
  //     .then(value => setUser(value));
  // }

  const sendMood = (mood) => {
    // e.preventDefault();

    const newRecord = {
      userid: 1,
      mood: mood,
    };

    fetch(`http://localhost:3000/api/records/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecord),
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };



  return (
    <>
      <div className="container-fluid text-center mt-3">
        <h1 style={{ color: '#fff' }}> Welcome , Garrett!</h1>

        {/* Card to hold the Meditation time chart */}

        <div className="d-flex justify-content-center align-items-center row">
          <div className="d-flex flex-row justify-content-start m-3 ">
            <div className="card col-6 ">
              <h5 className="card-header">Meditation Time</h5>
              <div className="card-body">
                <h5 className="card-title">Last 7 days</h5>
                <h5 className="card-title"></h5>
                <p className="card-text">
                  <MeditationTimeChart />
                </p>
              </div>
            </div>

            {/* Section for displaying dialy meditation time */}

            <div
              className="col-6 m-3 p-2  d-flex justify-content-center align-items-center"
              style={{ width: 500, height: 300 }}
            >
              <h4 style={{ color: '#fff' }}> Your Meditation Time For today</h4>
            </div>
          </div>

          {/* Card for the list checking user's feeling */}

          <div className="d-flex flex-row justify-content-center align-items-center m-3">
            <div
              className="col-6 m-3 p-2 d-flex justify-content-center align-items-center"
              style={{ width: 500, height: 300 }}
            >
              <div className="card border-0">
                <div className="card-body">
                  <h5 className="card-title">How are you feeling today?</h5>
                  <p className="card-text"></p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <button
                      className="btn btn-outline-secondary btn-lg border-0"
                      onClick={() => sendMood(1)}
                    >
                      Anxious
                    </button>
                  </li>
                  <li className="list-group-item">
                    <button
                      className="btn btn-outline-secondary btn-lg border-0"
                      onClick={() => sendMood(2)}
                    >
                      Sad
                    </button>
                  </li>
                  <li className="list-group-item">
                    <button
                      className="btn btn-outline-secondary btn-lg border-0"
                      onClick={() => sendMood(3)}
                    >
                      Good
                    </button>
                  </li>
                  <li className="list-group-item">
                    <button
                      className="btn btn-outline-secondary btn-lg border-0"
                      onClick={() => sendMood(4)}
                    >
                      Happy
                    </button>
                  </li>
                  <li className="list-group-item">
                    <button
                      className="btn btn-outline-secondary btn-lg border-0"
                      onClick={() => sendMood(5)}
                    >
                      Motivated
                    </button>
                  </li>
                </ul>
              </div>

              {/* Card to hold the doughnut chart  */}
            </div>
            <div className="card col-6">
              <h5 className="card-header">Garrettt's Mood</h5>
              <div className="card-body">
                <h5 className="card-title">April</h5>
                <p className="card-text">
                  <MoodChart />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chart;
