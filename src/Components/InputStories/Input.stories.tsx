import React, {useRef, useState} from 'react';
import {action} from "@storybook/addon-actions";


export default {
  title: 'KABZDA/Input Stories',
}

const callback = action('clicked')


export const UncontrolledInput = () => <input/>
export const TrackValueOfUncontrolledInput = () =>{
  const[value, setValue] = useState('')
  return <> <input onChange={(e)=>setValue(e.currentTarget.value)}/> - {value}</>
}

export const GetValueOfUncontrolledInputByButtonPress = () =>{
  const[value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const save = () => {
    const el = inputRef.current as HTMLInputElement
    setValue(el.value)
  }

  return <> <input ref={inputRef}/> <button onClick={save}>save</button> - actual value: {value}</>
}


export const ControlledInputWithFixedValue = () => <input value={'Hello'}/>
