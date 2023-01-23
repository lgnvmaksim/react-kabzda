import {useEffect, useState} from "react";
import React from "react";

export default {
    title: 'KABZDA/UseEffectDemo Stories',
}


export const  SimpleExample = () => {
    const [counter, setCounter] = useState(1)

    useEffect(()=>{
        console.log('useEffect')
        document.title=counter.toString()
    }, ) // - срабатывает каждый раз при рендере компоненты

    useEffect(()=>{
        console.log('useEffect')
        document.title=counter.toString()
    }, [counter]) //-срабатывает при первом рендере и при изменении counter

    useEffect(()=>{
        console.log('useEffect')
        document.title=counter.toString()
    }, []) //-срабатывает только при первом рендере

    return <>
        Hello, {counter}
        <button onClick={()=>setCounter(counter+1)}>+</button>
    </>
}