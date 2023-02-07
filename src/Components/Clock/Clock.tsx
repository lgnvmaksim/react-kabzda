import {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";


type PropsType = {
    mode?: 'digital' | 'analog'
}

export type ClockViewPropsType = {
    date: Date
}




export const Clock = (props: PropsType) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const internalID = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(internalID)
        }
    }, [])

    let view
    switch (props.mode) {
        case 'analog':
            view = <AnalogClockView date={date}/>
            break;
        case 'digital':
        default:
            view = <DigitalClockView date={date}/>
    }


    return <div>
        {view}
    </div>
}



