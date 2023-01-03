import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {UnControlledAccordion} from "./UnControlledAccordion";


export default {
  title: 'KABZDA/UnControlledAccordion Stories',
  component: UnControlledAccordion,
}

const callback = action('clicked')

export const UnControlledAccordionStories = () => <UnControlledAccordion titleValue={'Menu'}/>

