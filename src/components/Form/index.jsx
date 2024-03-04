import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import Task from "../Task"

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
        <>
            <form className="border-white border-solid border-2 rounded-xl w-3/5 h-3/5" onSubmit={onSave}>
                <div className="flex justify-center m-10">
                    <Input
                        type="text"
                        placeholder="What do you have to do?"
                        value={taskInput}
                        onChange={inputChange}
                        required
                    />
                    <Button type="submit">Add Task</Button>
                </div>
                <div>
                    <div className="h-56 overflow-y-scroll">
                        {tasks.map((task, index) => (
                            <Task
                                key={index}
                                tasks={task}
                            />
                        ))}
                    </div>
                </div>
            </form>
        </>
    )
}