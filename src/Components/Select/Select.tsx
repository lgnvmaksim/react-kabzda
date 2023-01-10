import React, {useState, KeyboardEvent, useEffect} from 'react';
import s from './Select.module.css'
import {logger} from "@storybook/node-logger";

type ItemType = {
    title: string
    id: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select = (props: SelectPropsType) => {
    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(f => f.id === props.value)
    const hoveredItem = props.items.find(f => f.id === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const toggleItems = () => setActive(!active)
    const onItemClick = (id: any) => {
        props.onChange(id);
        toggleItems()
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].id === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.id)
                        return;
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].id)
            }

        }

        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }

    return (
        <>
            <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={s.main} onClick={toggleItems}>
                    {selectedItem && selectedItem.title}
                </span>
                {
                    active &&
                    <div className={s.items}>
                        {props.items.map(el =>
                            <div
                                key={el.id}
                                className={`${s.item} ${hoveredItem === el ? s.selected : ''}`}
                                onClick={() => onItemClick(el.id)}
                                onMouseEnter={() => {
                                    setHoveredElementValue(el.id)
                                }}>
                                {el.title}
                            </div>
                        )}
                    </div>
                }
            </div>
        </>
    );
};