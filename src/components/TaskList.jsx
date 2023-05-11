import TaskCard from './TaskCard'
import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'
function TaskList({task, deleteTask}) 
{
  const {tasks} = useContext(TaskContext)
if (tasks.length === 0){
  return(
    <h1 className='text-white text-4xl font-bold text-center'>No hay Tareas aún</h1>
  )
}
  return (
    <div className='grid grid-cols-6 gap-2'>
        {
            tasks.map(task => (
                <TaskCard key={task.id} task={task}></TaskCard>
            ))
        }
    </div>
  )
}

export default TaskList;