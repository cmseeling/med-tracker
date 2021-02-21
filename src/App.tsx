import React, { useState } from 'react';
import logo from './logo.svg';
import './App.sass';
import './App.css';
import Tracker from './components/Tracker/Tracker';
import ScheduleEditor from './components/ScheduleEditor/ScheduleEditor';

function App() {
  const [view, setView] = useState("read");

  const handleEditClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setView("edit");
  }

  const handleCalendarClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setView("calendar");
  }

  const handleSaveClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setView("read");
  }

  let component = <Tracker/>;
  switch(view) {
    case "edit":
      component = <ScheduleEditor/>;
      break;
    default:
      component = <Tracker/>;
  }

  let editButton = <button className="button big-button" onClick={handleEditClick}>Edit Schedule</button>;
  if(view === "edit") {
    editButton = <button className="button big-button" onClick={handleSaveClick}>Save Schedule</button>;
  }
  else {
    editButton = <button className="button big-button" onClick={handleEditClick}>Edit Schedule</button>;
  }

  return (
    <div className="App container">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <div className="tile calendar-button">
            <div className="container">
              <button className="button big-button" onClick={handleCalendarClick}>View Calendar</button>
            </div>
          </div>
          <div className="tile editor-button">
            {editButton}
          </div>
        </div>
      </div>
      {component}
    </div>
  );
}

export default App;
