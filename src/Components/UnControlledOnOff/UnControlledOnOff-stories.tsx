import {UnControlledOnOff} from "./UncontrolledOnOff";
import {useState} from "react";

// const callback = action('on or off clicked')
export const OnMode = () => <UnControlledOnOff onChange={x=>x}/>
export const OffMode = () => <UnControlledOnOff onChange={x=>x}/>
