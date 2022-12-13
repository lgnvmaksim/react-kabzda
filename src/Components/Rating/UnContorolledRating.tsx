import './../../App.css'
import {useState} from "react";


// type RatingProps={
//     value:number
// }


export const UncontrolledRating = () => {

    const [amountStar, setAmountStar] = useState(0)


    return (
        <div>

            <Star selected={amountStar > 0} setAmountStar={()=>{setAmountStar(1)}}/>
            <Star selected={amountStar > 1} setAmountStar={()=>{setAmountStar(2)}}/>
            <Star selected={amountStar > 2} setAmountStar={()=>{setAmountStar(3)}}/>
            <Star selected={amountStar > 3} setAmountStar={()=>{setAmountStar(4)}}/>
            <Star selected={amountStar > 4} setAmountStar={()=>{setAmountStar(5)}}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    setAmountStar:()=>void
}

const Star = (props: StarPropsType) => {
    return <span onClick={()=>{props.setAmountStar()}}>{props.selected ? <b className={'star'}>★</b> : <b className={'star'} >☆</b>}</span>

}