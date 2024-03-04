import { useState } from "react";
import Button from "../Button";
import Input from "../Input";

export default function Form() {
    const [tasks, setTasks] = useState([])
    const [taskInput, setTaskInput] = useState("")

    const onSave = (event) => {
        event.preventDefault()
        setTasks(...tasks, taskInput)
        setTaskInput("")
        console.log(tasks)
    }
    
    return (
        <form className="border-white border-solid border-2 rounded-xl w-3/5 h-3/5" onSubmit={onSave}>
            <div className="flex justify-center m-10">
                <Input 
                    type="text" 
                    placeholder="What do you have to do?"
                    value={taskInput}
                    onModify={(value) => setTaskInput(value)}
                />
                <Button>Add Task</Button>
            </div>
        </form>
    )
}