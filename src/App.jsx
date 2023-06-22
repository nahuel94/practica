import TaskList from "./componentes/TaskList";
import TaskForm from "./componentes/TaskForm";

function App() {
 

 
/*
  function createTask(task){//recibe por parametros task
    setTasks([...tasks, task]) //...tasks crea una copia de tasks
  }
*/
/*
 function createTask(TasksList){ //espera solo un string debe recibir un objeto
 */

  return (
    <main className="bg-zinc-900 h-scr h-screen"> {/*h-screen hace que el backgraund ocupe toda la pantalla */}
      <div className="container mx-auto">
      <TaskForm />
      <TaskList /> {/*Envia tasks a TasksList por props*/}
      </div>
    </main>
  );
}
export default App;
{
  /* Arbol de componente ui componetes tree */
}
