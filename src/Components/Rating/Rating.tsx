import './../../App.css'
import {useState} from "react";


// type RatingProps={
//     value:number
// }



export const Rating = () => {

    const [amountStar, setAmountStar] = useState(0)
    const onClickHandler = (num:number) => {
        setAmountStar(num)
    }
    return(
        <div>
            <button  onClick={()=>{onClickHandler(0)}}>Очистить</button>
            <Star selected={amountStar > 0}/><button  onClick={()=>{onClickHandler(1)}}>1</button>
            <Star selected={amountStar > 1}/><button  onClick={()=>{onClickHandler(2)}}>2</button>
            <Star selected={amountStar > 2}/><button  onClick={()=>{onClickHandler(3)}}>3</button>
            <Star selected={amountStar > 3}/><button  onClick={()=>{onClickHandler(4)}}>4</button>
            <Star selected={amountStar > 4}/><button  onClick={()=>{onClickHandler(5)}}>5</button>
        </div>
    )
}

type StarPropsType={
    selected:boolean
}

const Star = (props:StarPropsType) => {

    if (props.selected){
        return <span className={'star'}><b>❉</b> </span>
    }else{
        return <span className={'star'}>❋ </span>
    }
}