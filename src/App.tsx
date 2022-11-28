import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Accordion} from "./Components/Accrordion/Accordion";
import {Rating} from "./Components/Rating/Rating";

function App() {
    return (
        <div className="App">
            <PageTitle title={'Stuuuuuuuuudy'}/>
            <Accordion titleValue={'Menu'} collapsed={false}/>
            <Accordion titleValue={'I am a accrodion'} collapsed={false}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
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
