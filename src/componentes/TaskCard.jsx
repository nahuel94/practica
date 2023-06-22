import { useContext } from 'react';
import {TaskContext} from '../context/TaskContext';

export default function TaskCard({task}) { //que es estructurar un props

  const {deleteTask} = useContext(TaskContext)
  

  function mostrarTarea() {
    alert(task.id)
    /*Para eliminar un elemento de react tengo que gerar un nuevo elemento, sin el elemento que no quiero */
  }
  return (
  
    <div key={task.id} className='bg-gray-800 text-white p-4 rounded-md'> {/*bg-gray-800 agrega un backgraund, p-4 agrega un pading, rounded-md agrega un borde en la esquina */}
          <h1 className='text-xl font-bold capitalize'>{task.title}</h1>{/*text-xl texto exra large */}
          <p className='text-gray-500 text-sm'>{task.description}</p>
          <button className='bg-red-500 px-2 py-1 rounded-md mt-2 hover:bg-red-400' onClick={() => deleteTask(task.id)}>Elimanr Tarea</button>
          {/* <h1>{task.title}</h1>
          <p>{task.description}</p>
          <button onClick={deleteTask}>Elimanr Tarea</button>/*el deleteTask me muestra todo el evento y solo necesito el id */}   
          </div>
  
 
)
}
