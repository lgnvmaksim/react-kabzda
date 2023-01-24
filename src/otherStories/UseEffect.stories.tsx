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
} //Примеры работы с зависимостями useEffect

export const Example2 = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    useEffect(()=>{
        setInterval(()=>{
           setCounter((state) => state+1)
        }, 1000)
    }, [])



    return <>
        Hello, counter: {counter}, fake: {fake}
        {/*<button onClick={()=>setFake(fake+1)}>fake</button>*/}
        {/*<button onClick={()=>setCounter(counter+1)}>counter</button>*/}
    </>
}

