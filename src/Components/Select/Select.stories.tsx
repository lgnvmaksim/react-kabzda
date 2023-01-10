import React, {useState} from 'react';
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";


export default {
    title: 'KABZDA/Select Stories',
    component: Select,
}

export const WithValue = () => {
    const [value, setValue] = useState(2)
    return <>
        <Select value={value} onChange={setValue} items={[
            {id: 1, title: 'Max'},
            {id: 2, title: 'Veronika'},
            {id: 3, title: 'Sofia'}
        ]}/>
    </>
}

    export const WithoutValue = () =>{
        const [value, setValue]=useState(null)
        return(
            <>
        <Select onChange={setValue} value={value} items={[
                {title: 'Max', id: 1},
        {title: 'Veronika', id: 2},
        {title: 'Sofia', id: 3}
    ]}/>

    </>
        )

    }



