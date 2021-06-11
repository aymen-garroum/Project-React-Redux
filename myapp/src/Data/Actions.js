//ACTION TYPE DECLARATIONS

export const ADD_TASK = "ADD_TASK"
                    
export const STATUS_UPDATE = "STATUS_UPDATE"

export const TASK_UPDATE = "TASK_UPDATE"

export const FILTER = "FILTER"

//ACTION DECLARATIONS

export const update_task = (id,task) => {
    return{
    type: TASK_UPDATE,
    id,
    task}
}

export const add_task = (task) => {
    return{
    type: ADD_TASK,
    task};
}

export const update_status = (id, statut) => {
    return{
    type: STATUS_UPDATE,
    id,
    statut};
}

export const filter = (criteria) => {
    return{
    type: FILTER,
    criteria};
}




