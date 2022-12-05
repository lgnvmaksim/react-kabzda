import {Accordion} from "./Accordion";
import {useState} from "react";


export const CollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={true} onChange={()=>{}}/>
export const UsersUnCollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={false} onChange={()=>{}}/>

export const ModeChanging = () => {
    const[value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={'Users'} collapsed={value} onChange={()=>{setValue(!value)}}/>
}

