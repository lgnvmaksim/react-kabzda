import {useState} from "react";
import React from "react";

export default {
    title: 'KABZDA/ReactMemoDemo Stories',
}

const NewMessagesCounter = (props:{count:number}) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: {users:string[] }) => {
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret)


export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Max', 'Veronika', 'Sofia'])
    const addUser = () => {
setUsers([...users, 'Sveta' + new Date().getTime()])
    }
    return <>
        <button onClick={()=>setCounter(counter+1)}>+</button>
        <button onClick={addUser}>add user</button>
    <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}