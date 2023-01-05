import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {UnControlledOnOff} from "./UncontrolledOnOff";


export default {
  title: 'KABZDA/UnControlledOnOff Stories',
  component: UnControlledOnOff,
}

const callback = action('clicked')

export const OnMode = () => <UnControlledOnOff onChange={callback} defaultValue={true}/>
export const OffMode = () => <UnControlledOnOff onChange={callback} defaultValue={false}/>

