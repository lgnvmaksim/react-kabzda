import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./Components/Rating/Rating";
import {UnControlledOnOff} from "./Components/OnOff/OnOff";
import {UnControlledAccordion} from "./Components/UnControlledAccrordion/UnControlledAccordion";
import {UnControlledRating} from "./Components/UnControlledRating/UnControlledRating";
import {Accordion} from "./Components/Accrordion/Accordion";


function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    return (
        <div className="App">
            <UnControlledOnOff/>
            <Accordion titleValue={'Menu'} collapsed={false}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
        </div>
    );
}

type PageTitle = {
    title: string
}

const PageTitle = (props: PageTitle) => {
    return <h1>{props.title}</h1>
}

export default App;
