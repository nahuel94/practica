import { useContext, useState } from "react";
import {TaskContext} from '../context/TaskContext'

export default function TaskForm() { //TaskForm recibe en el props como funcion createTask

  const [title, setTitle] = useState('')//estado para guardar el valor del input
  const [description, setDescription] = useState('') //estado para guardar la descripcion del texto

  const {createTask} = useContext(TaskContext) //del objeto solo necesito el createTask
  

  const handleSubmit = (e) => {//maneja el submit del formulario, recibe un objeto event e y utiliza metodo preventDefault para cancelar el comportamiento de actualizar el formulario
    e.preventDefault()
    /*
    const newTask = { //Se esta creando un nuvo objeto tarea 
      title
    }
    createTask(newTask) //llama a la funcion createTask y le envia el props newTask
    console.log(newTask);
  
 createTask(title)//llama la funcion createTask solo envia un string y hay que enviar un objeto
 */
createTask({
  title,
  description
});
 console.log(title, description);
 setTitle('') //recetea el estado pero no el titulo mostrado en la pantalla
 setDescription('') //resetea el estado de description pero no el textarea que se muestra
  };

  return (
    
    <div className="max-w-md mx-auto"> {/*max-w-md ancho predeterminado */}
        <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4"> {/*onSubmit evento de formlario*/}
        <h1 className="text-2xl font-bold text-white m">Crea tu tarea</h1>
        <input placeholder='Escribe tu tarea'
        className="bg-slate-300 p-3 w-full mb-2"
        onChange={(e) => setTitle(e.target.value)}
        value={title} autoFocus/> { /*funcion recibe un objeto event(e)*/}
        <textarea placeholder="escribe la descripcion de la tarea"
        className="bg-slate-300 p-3 w-full mb-2"
        onChange={(e) => setDescription(e.target.value)}
        value={description}></textarea> {/*value tambien refleja lo qeu se va llenando tambien recetea*/}  
        <button className="bg-red-600 p-2 rounded hover:bg-red-500 ">Guardar</button>
      </form>
    </div>
    
  )
}
{/*En el componente TaskForm no existe el arreglo de tarea, solo existe en TaskList */}