import React, {useState} from 'react';
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";


export default {
  title: 'KABZDA/OnOff Stories',
  component: OnOff,
}

const callback = action('clicked')

export const onMode = () => <OnOff on={true} onChange={callback}/>
export const offMode = () => <OnOff on={false} onChange={callback}/>

export const ModeChanging = () => {
  const[value, setValue]= useState<boolean>(true)
  return <OnOff on={value} onChange={setValue}/>
}