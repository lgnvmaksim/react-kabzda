import {useState} from "react";

type AccordionPropsType = {
    titleValue:string
}

export const Accordion = (props:AccordionPropsType) => {
    const [collapsed, setCollapsed]=useState(false)
 return (
     <div>
         <AccordionTitle title={props.titleValue} setCollapsed={setCollapsed} collapsed={collapsed}/>
         {!collapsed && <AccordionBody/>}
     </div>
 )

}

type AccordionTitleType={
    title: string
    setCollapsed:(e:boolean)=>void
    collapsed:boolean
}

export const AccordionTitle = (props:AccordionTitleType) => {
    return <h3 onClick={()=>{props.setCollapsed(!props.collapsed)}}>{props.title}</h3>
}

export const AccordionBody = (props:any) => {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>2</li>

    </ul>
}