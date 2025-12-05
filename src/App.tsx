import './App.css'
import {WeekView} from "./WeekView.tsx";
import {useCallback, useState} from "react";
import {MonthView} from "./MonthView.tsx";

type View = 'week' | 'month' | 'day';

type NextProps = {
    view: View,
    onNext: (next: View) => void,
}

function Next({view, onNext}: NextProps) {

    const next = useCallback((view: View) => {
        let f_next: View;
        if (view === 'week') {
            f_next = 'month'
        } else if (view === 'month') {
            f_next = 'day'
        } else {
            f_next = 'week'
        }
        onNext(f_next)
    }, [onNext])

    return <button onClick={() => next(view)}>{view}</button>
}

function App() {

    const [view, setView] = useState<View>("week");

    if (view === 'week') {
        return (
            <>
                <Next view={view} onNext={setView}/>
                <WeekView/>
            </>

        );
    }

    if (view === 'month') {
        return (
            <>
                <Next view={view} onNext={setView}/>
                <MonthView/>
            </>

        );
    }

    if (view === 'day') {
        return (
            <>
                <Next view={view} onNext={setView}/>
                <span>day</span>
            </>

        );
    }


}

export default App
