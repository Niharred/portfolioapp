import { useState } from "react";

function Todoform()
{
    const [input,setInput] = useState('')

    const handlesubmit =(e)=>{
        e.preventDefault();
    }

    return(
        <form className="todo-form" onSubmit={handlesubmit}>

            <input type="text" placeholder ="Add a todo" value={input} name="text" className="todo-input"> 

            </input>
            <button className="todo-button">
                Add todo
            </button>
        </form>
    );

}

export default Todoform;