import React from 'react'
import Task from '../Task/Task'
import './ListTask.css'

function ListTask(props) {

    return (<div className="task_list">
        {props.list.map(el =><Task key={el.id} task={el}/>)}
    </div>
    )
}

export default ListTask
