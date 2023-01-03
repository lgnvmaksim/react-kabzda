import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";


export default {
  title: 'KABZDA/Accordion Stories',
  component: Accordion,
}

const callback = action('clicked')

export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={true} onChange={callback}/>
export const UsersUnCollapsedMode = () => <Accordion titleValue={'Users'} collapsed={false} onChange={callback}/>


export const ModeChanging = () => {
  const[value, setValue]= useState<boolean>(true)
  return <Accordion titleValue={'Users'} collapsed={value} onChange={()=>setValue(!value)}/>
}