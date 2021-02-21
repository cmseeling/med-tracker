import { Medication } from "../../interfaces/medication";
import { Timeslot } from "../../interfaces/timeslot";

export interface TimeslotProps {
    timeslot: Timeslot;
    className?: string;
}

function TimeslotRow(props: TimeslotProps) {
    const timeslot = props.timeslot;

    const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event);
        console.log(event.target.name);
    }

    return (
        <div className={`tile is-parent ${props.className}`}>
            <div className="tile timeslot is-1">{timeslot.name}</div>
            <div className="tile is-parent is-vertical is-11">
                {timeslot.items.map((item: Medication) => 
                    <div className="tile medication" key={item.id}>
                        <label className="checkbox">
                            <input type="checkbox" checked={item.hasBeenTaken} name={`${item.id}`} onChange={handleCheckbox}></input>
                            {item.displayName ? item.displayName : item.name}
                        </label>
                    </div>
                )}
            </div>
        </div>
    );
}

export default TimeslotRow;