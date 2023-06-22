
/*
import { useEffect, useState } from "react";
import  {tasks as date}  from "./task";
*/
import TaskCard from './TaskCard';
import {TaskContext} from '../context/TaskContext';
import { useContext } from 'react';

function TaskList(props) {
  //tambien se puede estructurar function TaskList({tasks})
  /*funciona solo se modifca para que App contenga la lista
  const [tasks, setTasks] = useState([]);//esta leyende task

  useEffect(() => { //esta asignando un task
    setTasks(date)
  },[])
*/
const {tasks} = useContext(TaskContext)


 if (tasks.length === 0){
 return <h1 className='text-white text-4xl font-bold text-center'>No hay tarea</h1>
 }
  return (
    <div className='grid grid-cols-4 gap-2'> {/*grid grid-cols-4 agrega 4 columnas, gap-2 espacio entre los recuadros*/}
      {tasks.map((task) => ( //si se estructura la funcion se puede eliminar props
        /*
        <div key={task.id}>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
        </div>
         para mejorar los componente lo vamos a separar
        */
       <TaskCard key={task.id} task={task} />//se recorre la tarea y se la envia por props a Taskcard
      ))}
    </div>
  );
}

export default TaskList;
{/*TaskList contiene un arreglo de tareas, TaskForm no puede acceder a este arreglo, el App tampoco, la unica forma de que TaskForm pueda acceder a la lista de tareas
 TaskList hay que subirlo un nive es decir que el que va a tener el arreglo es App, luego de App pasamos el arreglo a TaskForm y TaskList */}
