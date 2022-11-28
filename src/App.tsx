import React from 'react';
import './App.css';
import {Accordion} from "./Components/Accrordion/Accordion";
import {Rating} from "./Components/Rating/Rating";
import {UnControlledOnOff} from "./Components/OnOff/OnOff";
import {UnControlledAccordion} from "./Components/UnControlledAccrordion/UnControlledAccordion";


function App() {
    return (
        <div className="App">
            <UnControlledOnOff/>
        <UnControlledAccordion titleValue={'one'}/>
        <UnControlledAccordion titleValue={'two'}/>

        </div>
    );
}

type PageTitle={
    title:string
}

const PageTitle = (props: PageTitle) => {
    return <h1>{props.title}</h1>
}

export default App;
