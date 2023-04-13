import React, { useState } from "react";

let globalID=0;


function App(){
    const[task,settask] = useState('');
    const[todos, settodos] = useState([])

    function createtodo(e){
        e.preventDefault();
        settask('')
        settodos(oldtodos=>[...oldtodos,{todo:task , id:globalID++} ])

    }
    function deletitem(itemID){
        settodos( oldtodos => oldtodos.filter(item=>item.id !== itemID))
    }
    return (
        <div className="container">
            <h1>To-Do List</h1>
            <div className="container-input">
            <form onSubmit={createtodo}>
            <input
            value={task}
            onChange={(e)=>settask(e.target.value)}
            type="text"></input>
            <button className="btn">Click here</button>
            {todos.map((item)=>{
                return <div key={item.id}>
                    <li
                    onClick={()=>deletitem(item.id)}
                    >{item.todo}</li>
                </div>
            })}
            </form>
            </div>
        </div>
    )
}
export default App;