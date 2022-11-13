import React, {useState} from 'react';
import './App.css';
import {UnControlledAccordion} from "./Components/Accrordion/UnControlledAccordion";
import {UncontrolledRating} from "./Components/Rating/UnContorolledRating";
import {UnControlledOnOff} from "./Components/UnControlledOnOff/UnControlledOnOff";
import {Accordion} from "./Components/Accrordion/Accordion";
import {OnOff} from "./Components/OnOff/OnOff";

function App() {

    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [switchOn, setSwitchOn] = useState<boolean>(false)


    return (
        <div className="App">
            <OnOff on={switchOn}
            onChange={setSwitchOn}/>

            <Accordion
            titleValue={'Menu'}
            collapsed={accordionCollapsed}
            onChange={()=> {setAccordionCollapsed(!accordionCollapsed)}}
            />
            <UnControlledOnOff/>
        </div>
    );
}

export default App;
