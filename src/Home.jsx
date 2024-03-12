import { useState } from "react";
import Form from "./components/Form";
import Title from "./components/Title";
import Task from "./components/Task";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  const newTaskAdded = (task) => {
    setTasks([...tasks, task]);
  };

  console.log(tasks);

  return (
    <div className="bg-slate-900 h-screen">
      <div className="pt-5">
        <div className="flex flex-col justify-center items-center">
          <Title>Add Tasks</Title>
          <Form registeredTask={(task) => newTaskAdded(task)} />
        </div>
        <div className="flex flex-col justify-center items-center mt-5">
          <Title>Your Tasks</Title>
          {tasks.map((task) => (
            <Task task={task} />
          ))}
        </div>
      </div>
    </div>
  );
}
