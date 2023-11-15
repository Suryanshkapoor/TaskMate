import React from 'react'

export const AddTask = ({tasklist, setTasklist, task, setTask}) => {

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(task.id){
      const date = new Date();
      const updatedTasklist = tasklist.map((todo)=>(
        todo.id === task.id ? {id : task.id, name: e.target.task.value, time: `${date.toLocaleDateString()}  ${date.toLocaleTimeString()}`}:todo
      ))
      setTasklist(updatedTasklist);
      setTask({});
      
    }else{
      const date = new Date();
      const newTask= {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleDateString()}  ${date.toLocaleTimeString()}`
      }
      setTasklist([...tasklist,newTask]);
      setTask({});
      
    }
  }

  return (
    <section className='addTask'>
      <form onSubmit={handleSubmit} >
        <input type="text" name='task' value={task.name || ''} placeholder='Add Task' autoComplete='off' onChange={(e) => setTask({...task, name: e.target.value})}/>
        <button type='submit'>{task.id ? 'update': 'Add'}</button>
      </form>
    </section>
  )
}
