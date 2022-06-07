import { useState, useEffect } from "react";


const GetTask = () => {

    
    const [task, setTask] = useState([]);
    const [title, setTitle] = useState('');
    // localStorage.clear();
    if(typeof window !== 'undefined') {
        var localTask = JSON.parse(localStorage.getItem('task'))
    }
    useEffect(()=>{
        if( localTask) setTask(localTask)
    },[])


    const taskHandler = (e)=>{
        e.preventDefault();
        //set the date of task
        const current = new Date();
        const dateNow = `${current.getHours()}:${current.getMinutes()}  ${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
        
        const listing = {title, dateNow, id:Math.random()*2};    
        task.push(listing);
        localStorage.setItem('task',JSON.stringify(task));
        setTitle('');
    }
    const deleteHandler =(e) =>{
        e.preventDefault();
        console.log(Number (e.target.id));
        const newTask = task.filter(tasks => tasks.id !== Number(e.target.id))
        console.log(newTask);
        setTask(newTask)
        localStorage.setItem('task',JSON.stringify(newTask));

    }

    return (  

            <div className="containerBackGround">
                <h1 className="headerText">To-Do List</h1>
            <form onSubmit={taskHandler}>
                <input type="text" 
                maxLength="30"
                placeholder="Task" required
                value={title}
                onChange={(e)=>setTitle(e.target.value)} />
                <button>enter task</button>
            </form> 

                 {task.map((tasks)=>(
                     <div className="taskList" key={tasks.id}>
                         <div className="taskListText">
                         <h2>{tasks.title}</h2>
                         <p>created at {tasks.dateNow}</p>
                         </div>
                         <div className="taskListImg">
                         <img src="/trash-solid.svg" alt="trashCan" onClick={deleteHandler} id={tasks.id} />
                         </div>
                    </div>
            ))}
            </div>
            
    );
}
 
export default GetTask;