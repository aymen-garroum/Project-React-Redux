import React from 'react'
import './Task.css'
import {update_status, update_task} from "../../Data/Actions"
import {useDispatch} from 'react-redux'

function Task(props) {

    const task_el = props.task 

    const dispatch = useDispatch();

    return (
        <div className="task_element">
            <input className="input_task" value={task_el.description} onChange={e=> dispatch(update_task(task_el.id, e.target.value))} type="text"></input>
            <div className="div_checkbox"><input onChange={e => dispatch(update_status(task_el.id, !task_el.isDone))} checked={task_el.isDone} type="checkbox"></input><label htmlFor="task">Done</label></div> 
        </div>
    )
}

export default Task
