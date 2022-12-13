import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./Components/Rating/Rating";
import {UnControlledAccordion} from "./Components/UnControlledAccrordion/UnControlledAccordion";
import {UnControlledRating} from "./Components/UnControlledRating/UnControlledRating";
import {Accordion} from "./Components/Accrordion/Accordion";
import {OnOff} from "./Components/OnOff/OnOff";
import {UnControlledOnOff} from "./Components/UnControlledOnOff/UnControlledOnOff";



function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className="App">

            <Accordion titleValue={'Menu'}
                       collapsed={accordionCollapsed}
                       onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UnControlledOnOff/>
            <UnControlledAccordion titleValue={'blabla'}/>
        </div>
    )
}

type PageTitle = {
    title: string
}

const PageTitle = (props: PageTitle) => {
    return <h1>{props.title}</h1>
}

export default App;
