import React from 'react';
import './App.css';
import {UnControlledAccordion} from "./Components/Accrordion/UnControlledAccordion";
import {UncontrolledRating} from "./Components/Rating/UnContorolledRating";
import {UnControlledOnOff} from "./Components/OnOff/UnControlledOnOff";

function App() {


    return (
        <div className="App">
            <UnControlledAccordion titleValue={'Menu'}/>
            <UnControlledAccordion titleValue={'I am a accrodion'}/>
            <UncontrolledRating/> Сделать контролируемый акордион и он офф
            <UnControlledOnOff/>
        </div>
    );
}

export default App;
