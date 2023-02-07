import {ClockViewPropsType} from "./Clock";

export const get2DigitsString = (num: number) => num < 10 ? '0' + num : num

export const DigitalClockView = ({date}: ClockViewPropsType) => {
    return <>
        <span>{get2DigitsString(date.getHours())}</span>
        :
        <span>{get2DigitsString(date.getMinutes())}</span>
        :
        <span>{get2DigitsString(date.getSeconds())}</span>
    </>
}