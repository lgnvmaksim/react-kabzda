
type AccordionPropsType = {
    titleValue:string
    collapsed:boolean
    onChange:()=>void
}

export const Accordion = (props:AccordionPropsType) => {
 return (
     <div>
         <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
         {!props.collapsed && <AccordionBody/>}
     </div>
 )

}

type AccordionTitleType={
    title: string
    onChange:()=>void
}

export const AccordionTitle = (props:AccordionTitleType) => {
    return <h3 onClick={props.onChange}>{props.title}</h3>
}

export const AccordionBody = (props:any) => {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>2</li>

    </ul>
}