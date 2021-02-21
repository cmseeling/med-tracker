import { Medication } from "../../interfaces/medication";
import { Timeslot } from "../../interfaces/timeslot";

export interface TimeslotEditorProps {
    timeslot: Timeslot;
    className?: string;
}

function TimeslotEditor(props: TimeslotEditorProps) {
    const timeslot = props.timeslot;

    const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event);
        console.log(event.target.name);
    }

    const handleMoveClick = (timeSlotId: number, direction: string) => {
        console.log(`${timeSlotId} ${direction}`);
    }

    return (
        <div className={`tile is-parent ${props.className}`}>
            <div className="tile is-parent is-vertical is-2">
                <div className="container">
                    <button className="button" onClick={()=>handleMoveClick(timeslot.id, 'up')}>Move Up</button>
                </div>
                <div className="container">
                    <button className="button" onClick={()=>handleMoveClick(timeslot.id, 'up')}>Move Up</button>
                </div>
            </div>
            <div className="tile timeslot is-1">{timeslot.name}</div>
            <div className="tile is-parent is-vertical is-9">
                {timeslot.items.map((item: Medication) => 
                    <div className="tile medication" key={item.id}>
                        {item.displayName ? item.displayName : item.name} <a href="#">Edit</a>
                    </div>
                )}
                <div>
                    <a href="#">Add</a>
                </div>
            </div>
        </div>
    );
}

export default TimeslotEditor;