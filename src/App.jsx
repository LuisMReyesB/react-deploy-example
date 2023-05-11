//04:18:49
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
//rfce para crear la funcion App de manera rapida
function App(){
  return (
    <main className='bg-slate-700 h-screen'>
      <div className='container mx-auto p-10'>
      <TaskForm></TaskForm>
      <TaskList></TaskList>
      </div>
    </main>
  )
    {/*ul>li*4>a{Enlace $} Para acortar la creación de etiquedas*/}
}
export default App
