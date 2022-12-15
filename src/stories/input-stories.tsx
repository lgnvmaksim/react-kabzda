import React, {ChangeEvent, useRef, useState} from 'react';

export const UncontrolledInputStories = () => <input/>
export const TrackValueOfUncontrolledInputStories = () => {
    const [value, setValue] = useState('')
    return <><input onChange={(e) => setValue(e.currentTarget.value)}/> - {value} </>
}

export const GetValueOfUncontrolledInputStories = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }
    return <><input ref={inputRef}/>
        <button onClick={() => save}>save</button>- {value} </>
}


const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <input value={parentValue} onChange={onChangeHandler}/>
}

const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return <input type={"checkbox"} checked={parentValue} onChange={onChangeHandler}/>
}

const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string|undefined>(undefined)
    const onChangeHandler = (e:ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <select value={parentValue} onChange={onChangeHandler}>
        <option >none</option>
        <option value={'1'}>Minks</option>
        <option value={'2'}>Moscow</option>
        <option value={'3'}>Kiev</option>
    </select>
}
