import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./Components/Rating/Rating";
import {UnControlledAccordion} from "./Components/UnControlledAccrordion/UnControlledAccordion";
import {Accordion} from "./Components/Accrordion/Accordion";

import {UnControlledOnOff} from "./Components/UnControlledOnOff/UncontrolledOnOff";


function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className="App">
            {/*<OnOff*/}
            {/*on={switchOn}*/}
            {/*onChange={(on)=>{setSwitchOn((on))}}*/}
            {/*/>*/}
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UnControlledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            <UnControlledAccordion titleValue={'blabla'}/>
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
