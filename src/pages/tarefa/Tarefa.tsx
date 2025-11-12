import { useEffect, useState } from "react";
 
function Tarefa() {
  // cria um estado
  const [completed, setCompleted] = useState(false);
  const [tarefa, setTarefa] = useState('');
 
  // cria o useEffect com função anonima
  useEffect(() =>{
    if(completed){
      setTarefa('Parabéns! Você concluiu a tarefa!');
    }else{
      setTarefa("");
    }
  }, [completed])
 
 
 
  return (
    <div>
      <h1>Componente Tarefa</h1>
      <h2>{tarefa}</h2>
      <p>Conclua a tarefa</p>
      <button onClick={() => completed ? setCompleted(false) : setCompleted(true)}>
        {completed ? "Refazer tarefa" : "Concluir tarefa"}</button>
     
    </div>
  )
}
 
export default Tarefa