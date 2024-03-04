import { useState } from "react";
import Button from "../Button";
import Input from "../Input";

export default function Form() {
    const [tasks, setTasks] = useState([])
    const [taskInput, setTaskInput] = useState("")

    const inputChange = (event) => {
        setTaskInput(event.target.value)
    }

    const onSave = (event) => {
        event.preventDefault()
        if (taskInput.trim() !== "") {
            setTasks([...tasks, taskInput])
            setTaskInput("")
            console.log(tasks)
        }
    }

    return (
        <form className="border-white border-solid border-2 rounded-xl w-3/5 h-3/5" onSubmit={onSave}>
            <div className="flex justify-center m-10">
                <Input
                    type="text"
                    placeholder="What do you have to do?"
                    value={taskInput}
                    onChange={inputChange}
                />
                <Button type="submit">Add Task</Button>
            </div>
        </form>
    )
}