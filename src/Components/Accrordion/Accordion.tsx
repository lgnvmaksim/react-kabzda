
type AccordionPropsType = {
    titleValue:string
    collapsed:boolean
}

export const Accordion = (props:AccordionPropsType) => {
 return (
     <div>
         <AccordionTitle title={props.titleValue}/>
         {!props.collapsed && <AccordionBody/>}
     </div>
 )

}

type AccordionTitleType={
    title: string
}

export const AccordionTitle = (props:AccordionTitleType) => {
    return <h3>{props.title}</h3>
}

export const AccordionBody = (props:any) => {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>2</li>

    </ul>
}