import './App.css';
import AddTask from './Components/AddTask/AddTask'
import ListTask from './Components/ListTask/ListTask'
import {useSelector} from 'react-redux'
import {useState} from 'react'

function App() {

  const [filter,setFilter] = useState("null")

  const task_list = useSelector((state) =>state.data)
  const filtered_list = useSelector((state) => state.filtered_data)

  let list = []

  if(filter==="null"){list=task_list} else {list=filtered_list}

  return (
    <div className="App">
        <AddTask filter_value={setFilter}/>
        <ListTask list={list}/>
    </div>
  );
}

export default App;
