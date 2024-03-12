import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import DropDown from "../DropDown";

export default function Form({ registeredTask }) {
  const [taskInput, setTaskInput] = useState("");
  const [importanceLevel, setImportanceLevel] = useState();
  const importanceLevels = [
    "Choose the Importance Level",
    "Urgent",
    "Important",
    "Not Urgent",
  ];

  const inputChange = (event) => {
    setTaskInput(event.target.value);
  };

  const onSave = (event) => {
    event.preventDefault();
    if (taskInput.trim() !== "") {
      registeredTask({ taskInput, importanceLevel });
      setTaskInput("");
    }
  };

  return (
    <>
      <form
        className="border-white border-solid border-2 rounded-xl w-2/4"
        onSubmit={onSave}
      >
        <div className="flex justify-center m-10">
          <Input
            type="text"
            placeholder="What do you have to do?"
            value={taskInput}
            onChange={inputChange}
            required
          />
          <DropDown
            value={importanceLevel}
            onModify={(value) => setImportanceLevel(value)}
            importanceLevels={importanceLevels}
          />
          <Button type="submit">Add Task</Button>
        </div>
      </form>
    </>
  );
}
