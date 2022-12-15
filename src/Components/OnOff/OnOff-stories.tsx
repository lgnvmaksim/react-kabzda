import {OnOff} from "./OnOff";
import {useState} from "react";

// const callback = action('on or off clicked')
export const OnMode = () => <OnOff on={true} onChange={x=>x}/>
export const OffMode = () => <OnOff on={false} onChange={x=>x}/>

export const ModeChanging = () => {
    const[value, setValue] = useState<boolean>(true)
    return <OnOff on={value} onChange={setValue}/>
}