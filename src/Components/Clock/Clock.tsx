import {useEffect, useState} from "react";
import internal from "stream";

type PropsType={

}
const get2DigitsString = (num:number) => num < 10 ? '0' + num: num

export const Clock: React.FC<PropsType> = (props)=>{
    const[date, setDate]=useState(new Date())

    useEffect(()=>{
      const internalID = setInterval(()=>{
            setDate(new Date())
        }, 1000)
        return ()=>{
            clearInterval(internalID)
        }
    }, [])


    return <div>
        <span>{get2DigitsString(date.getHours())}</span>
        :
        <span>{get2DigitsString(date.getMinutes())}</span>
        :
        <span>{get2DigitsString(date.getSeconds())}</span>
    </div>
}