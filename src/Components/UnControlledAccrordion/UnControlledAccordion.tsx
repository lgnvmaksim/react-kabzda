import {useReducer} from "react";
import {reducer, TOGGLE_CONST} from "./reducer";

type AccordionPropsType = {
    titleValue:string
    // collapsed:boolean
}


export const UnControlledAccordion = (props:AccordionPropsType) => {
    // const [collapsed, setCollapsed]= useState(false)
    const [state, dispatchCollapsed]= useReducer(reducer, {collapsed:false})
 return (
     <div>
         <AccordionTitle title={props.titleValue} onClick={()=>{dispatchCollapsed({type: TOGGLE_CONST})}}/>
         {!state.collapsed && <AccordionBody/>}
     </div>
 )

}

type AccordionTitleType={
    title: string
    onClick:()=>void
}

export const AccordionTitle = (props:AccordionTitleType) => {
    return <h3 onClick={()=>{props.onClick()}}>{props.title}</h3>
}

export const AccordionBody = (props:any) => {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>2</li>
    </ul>
}