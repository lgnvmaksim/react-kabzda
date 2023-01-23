import {useMemo, useState} from "react";
import React from "react";

export default {
    title: 'KABZDA/UseStateDemo Stories',
}

const generateData = () => {
    return 1
}

export const Example1 = () => {
    // const initValue = useMemo(generateData, [])

    const [counter, setCounter] = useState(generateData)

    // const changer = (state: number) => state+1

    return <>
        <button onClick={()=>setCounter(state=>state+1)}>+</button>
        {counter}
    </>
}