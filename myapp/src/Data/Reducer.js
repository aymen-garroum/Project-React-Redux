
import {ADD_TASK, STATUS_UPDATE, TASK_UPDATE, FILTER} from './Actions'

const initialState = {data : [{id: 0, description: "Achever le projet React Redux", isDone: false},{id: 1, description: "Achever le projet React Hooks", isDone: true}], filtered_data:[]}

const reducer = (state=initialState,action) => {

    const tab = state.data

    switch (action.type) {
        

        case STATUS_UPDATE: return {...state, data: tab.map(el => {if(el.id === Number(action.id)){el.isDone = action.statut} return el})};

        case ADD_TASK: return {...state, data: [...tab, {id: state.data.length, description: action.task, isDone: false}]};

        case TASK_UPDATE: return {...state, data: tab.map(el => {if(el.id === Number(action.id)){el.description = action.task} return el})};

        case FILTER: return {...state, filtered_data:  tab.filter(el => el.isDone === JSON.parse(action.criteria))}

        default: return state
            
    }

}

export default reducer