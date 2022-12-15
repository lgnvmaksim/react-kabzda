import {Accordion} from "./Accordion";
import {useState} from "react";


export const CollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={true} onChange={() => {
}} items={[]} onClick={() => {
}}/>
export const UsersUnCollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={false} onChange={() => {
}} onClick={() => {
}} items={[
    {title: 'Max', value: 1},
    {title: 'Veronika', value: 2},
    {title: 'Sofiya', value: 3}]}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={'Users'} collapsed={value} onChange={() => {
        setValue(!value)
    }} onClick={() => {
    }} items={[
        {title: 'Max', value: 1},
        {title: 'Veronika', value: 2},
        {title: 'Sofiya', value: 3}]}/>
}

