import {createContext, useState, useEffect} from 'react'
import {tasks as date} from '../date/task';

export const TaskContext = createContext() //createContext es una funcion que retorna un objeto, el TaskContext hay que interpretarlo como el nombre del contexto

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]); //esta leyende task. que es el pops drilling

  function createTask(task){ 
    setTasks([...tasks,{ 
      title: task.title,
      id: tasks.length,
      description: task.description
    }])
    console.log(tasks.length)
    console.log(tasks.id)
   }
  
   function deleteTask(taskId){ //funcion que elimina la tarea
   
    console.log(tasks)
    console.log(taskId)
    
    console.log(tasks.filter(task => task.id !== taskId))
    setTasks(tasks.filter(task => task.id !== taskId))
   }

   useEffect(() => {
    //esta asignando un task, mediante setTasks
    setTasks(date);
  }, []);

  return (
    <TaskContext.Provider value={{
      tasks,
      createTask,
      deleteTask
    }}>
      {props.children}
    </TaskContext.Provider>
  )
}


