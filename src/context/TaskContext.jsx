import {createContext, useState, useEffect} from 'react'
import {task as data} from '../data/task'
export const TaskContext = createContext()
export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(task) 
  {
    setTasks([...tasks,
    {
      title: task.title,
      id: tasks.length,
      description: task.description
    }]) //con esto se le asigna mas elementos a un arreglo   
  }

  function deleteTask(taskId) 
  {
    setTasks(tasks.filter(task => task.id !== taskId))
    console.log(tasks)
    console.log(taskId)
  }
  
  useEffect(() => {setTasks(data)},[]);

  return (
    <TaskContext.Provider value = {{
      tasks: tasks,
      deleteTask: deleteTask,
      createTask: createTask
    }}>
        {props.children}
    </TaskContext.Provider>
  )
}