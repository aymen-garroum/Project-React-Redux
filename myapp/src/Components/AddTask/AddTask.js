import React from 'react'
import './AddTask.css'
import {useDispatch} from 'react-redux'
import {useState} from 'react'
import {add_task, filter} from '../../Data/Actions'

function AddTask(props) {

    const [task, SetTask] = useState("")
    const dispatch = useDispatch();

    const filter_data = (e) => {dispatch(filter(e.target.value))
                                props.filter_value(e.target.value)}

    return (
        <div className="task_div">
            <div className="add_div">
                <input onChange={e=> SetTask(e.target.value)} type="text" placeholder="New Task"></input>
                <button onClick={e=> dispatch(add_task(task))}>Add Task</button>
            </div>
            <select onChange={e=> filter_data(e)} placeholder="Filter" defaultValue="all">
                <option value="null">All</option>
                <option value="true">Done</option>
                <option value="false">Not done</option>
            </select>
        </div>
    )
}

export default AddTask
