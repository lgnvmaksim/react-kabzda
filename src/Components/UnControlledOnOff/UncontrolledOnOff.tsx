import React, {MouseEvent} from 'react';
import {useState} from "react";

type PropsType = {
    onChange:(on:boolean)=>void
}

export const UnControlledOnOff = (props:PropsType) => {

    const [on, setOn] = useState(false)

    const onClickOnHandler = (e: MouseEvent<HTMLDivElement>) => {
        setOn(true)
        props.onChange(true)
    }

    const onClickOffHandler = (e: MouseEvent<HTMLDivElement>) => {
        setOn(false)
        props.onChange(false)
    }

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red'
    }

    return (
        <div>
            <div style={onStyle} onClick={onClickOnHandler}>On</div>
            <div style={offStyle} onClick={onClickOffHandler}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}