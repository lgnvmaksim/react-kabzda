
type itemType={
    title:string
    value:any
}

type AccordionPropsType = {
    titleValue:string
    collapsed:boolean
    onChange:()=>void
    items: itemType[]
    onClick:(value:any)=>void
}

export const Accordion = (props:AccordionPropsType) => {
 return (
     <div>
         <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
         {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick} />}
     </div>
 )

}

type AccordionTitleType={
    title: string
    onChange:()=>void
}

export const AccordionTitle = (props:AccordionTitleType) => {
    return <h3 onClick={(e)=>{props.onChange()}}>{props.title}</h3>
}

type AccordionBodyPropsType = {
    items: itemType[]
    onClick:(value:any)=>void
}


export const AccordionBody = (props:AccordionBodyPropsType) => {
    return <ul>
        {props.items.map((el, index)=><li onClick={()=>{props.onClick(el.value)}} key={index}>{el.title}</li>)}
    </ul>
}