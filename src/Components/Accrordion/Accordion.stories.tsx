import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionPropsType} from "./Accordion";


export default {
    title: 'KABZDA/Accordion Stories',
    component: Accordion,
}

const callback = action('clicked')
const onClickCallback = action('Click was clicked')


export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={true} onChange={callback} items={[]}
                                                  onClick={onClickCallback}/>
export const UsersUnCollapsedMode = () => <Accordion titleValue={'Users'} collapsed={false} onChange={callback}
                                                     onClick={onClickCallback}
                                                     items={[
                                                         {title: 'Max', value: 1
                                                         },
                                                         {title: 'Veronika', value: 2
                                                         },
                                                         {title: 'Sofia', value: 3}
                                                     ]}/>


export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={'Users'} collapsed={value} onChange={() => setValue(!value)}
                      onClick={onClickCallback}
                      items={[
                          {title: 'Max', value: 1
                          },
                          {title: 'Veronika', value: 2
                          },
                          {title: 'Sofia', value: 3}
                      ]}/>
}