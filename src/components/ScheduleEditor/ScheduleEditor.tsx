import React, { useState, useEffect } from 'react';
import TimeslotEditor from '../TimeslotEditor/TimeslotEditor';

function ScheduleEditor() {
    const [date, setDate] = useState(new Date());

    const schedule = {
        timeslots: [
            {
                id: 1,
                name: '08:00',
                items: [
                    {
                        id: 1,
                        name: 'Pill',
                        hasBeenTaken: false
                    },
                    {
                        id: 2,
                        name: 'Eye Drop',
                        hasBeenTaken: true
                    },
                ]
            },
            {
                id: 2,
                name: '12:00',
                items: [
                    {
                        id: 2,
                        name: 'Eye Drop',
                        hasBeenTaken: false
                    },
                ]
            },
            {
                id: 3,
                name: '18:00',
                items: [
                    {
                        id: 1,
                        name: 'Pill',
                        hasBeenTaken: false
                    },
                    {
                        id: 2,
                        name: 'Eye Drop',
                        hasBeenTaken: false
                    },
                ]
            },
            {
                id: 4,
                name: '23:00',
                items: [
                    {
                        id: 2,
                        name: 'Eye Drop',
                        hasBeenTaken: false
                    },
                ]
            },
        ]
    };

    useEffect(() => {
        let interval = setInterval(() => {
            console.log("tick");
            let newDate = new Date();
            if(newDate.getDate() !== date.getDate()) {
                setDate(newDate);
            }
            setDate(newDate);
        }, 30000);

        return () => {
            clearInterval(interval);
        };
    });

    const handleInsertClick = (prepend: boolean) => {
        console.log(prepend);
    };

    return (
        <div className="schedule-editor">
            <div className="tile is-ancestor is-vertical">
                <div className="tile is-parent">
                    <div className="container">
                        <button className="button big-button" onClick={() => handleInsertClick(true)}>Add Timeslot</button>
                    </div>
                </div>
                <div className="tile is-ancestor is-vertical">
                    {schedule.timeslots.map((timeslot, index) => 
                        <TimeslotEditor timeslot={timeslot} key={timeslot.id} className={index % 2 === 0 ? "has-background-white" : "has-background-light"}/>
                    )}
                </div>
                <div className="tile is-parent">
                    <div className="container">
                        <button className="button big-button" onClick={() => handleInsertClick(false)}>Add Timeslot</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScheduleEditor;