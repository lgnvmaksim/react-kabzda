import {useState} from "react";

type AccordionPropsType = {
    titleValue:string
}

export const UnControlledAccordion = (props:AccordionPropsType) => {
    const [collapsed, setCollapsed]=useState(false)
 return (
     <div>
         <UnControlledAccordionTitle title={props.titleValue} setCollapsed={setCollapsed} collapsed={collapsed}/>
         {!collapsed && <UnControlledAccordionBody/>}
     </div>
 )

}

type AccordionTitleType={
    title: string
    setCollapsed:(e:boolean)=>void
    collapsed:boolean
}

export const UnControlledAccordionTitle = (props:AccordionTitleType) => {
    return <h3 onClick={()=>{props.setCollapsed(!props.collapsed)}}>{props.title}</h3>
}

export const UnControlledAccordionBody = (props:any) => {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>2</li>

    </ul>
}