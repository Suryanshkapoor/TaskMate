import React from 'react'

export const ShowTask = ({tasklist, setTasklist, task, setTask}) => {

  const editTask = (id) =>{
    const selectedTask = tasklist.find((todo)=>todo.id===id)
    setTask (selectedTask); 
  }

  const deleteTask = (id) =>{
    const updatedList = tasklist.filter(task => task.id!==id)
    setTasklist(updatedList);
  }

  return (
    <section className='showTask'>
      <div className="head">
        <div>
          <span className="title">Todo List</span>
          <span className="count">{tasklist.length}</span>
        </div>
        <button className='clearAll' onClick = {()=>setTasklist([])}>Clear All</button>
      </div>
      <ul>
        {tasklist.map((task)=>(
          <li key={task.id}>
            <p>
              <span className='name'>{task.name}</span>
              <span className='time'>{task.time}</span>
            </p>
            <i onClick={() => editTask(task.id)} className="fa-regular fa-pen-to-square"></i>
            <i onClick={() => deleteTask(task.id)} className="fa-solid fa-trash"></i>
          </li>
        ))}
      </ul>
    </section>
  )
}
