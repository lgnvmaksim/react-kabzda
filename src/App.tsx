import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Accordion} from "./Components/Accrordion/Accordion";
import {Rating} from "./Components/Rating/Rating";
import {OnOff} from "./Components/OnOff/OnOff";

function App() {
    return (
        <div className="App">
            {/*<PageTitle title={'Stuuuuuudy'}/>*/}
            <Accordion titleValue={'Menu'}/>
            <Accordion titleValue={'I am a accrodion'}/>
            <Rating/>
            <OnOff/>
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
