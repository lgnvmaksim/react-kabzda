import React from 'react';
import './App.css';
import {Rating} from "./Components/Rating/Rating";
import {UnControlledOnOff} from "./Components/OnOff/OnOff";
import {UnControlledAccordion} from "./Components/UnControlledAccrordion/UnControlledAccordion";
import {UnControlledRating} from "./Components/UnControlledRating/UnControlledRating";


function App() {
    return (
        <div className="App">
            <UnControlledOnOff/>
            <UnControlledAccordion titleValue={'Menu'}/>
            <UnControlledRating/>
            <Rating value={3}/>
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
