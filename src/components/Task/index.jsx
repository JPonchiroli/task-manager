export default function Task({ task }) {
  return (
    <>
      <div className="flex justify-around border-2 border-solid border-white m-2 w-2/4 rounded-md p-5">
        <p className="text-white text-xl">{task.taskInput}</p>
        <p className="text-white text-xl">{task.importanceLevel}</p>
      </div>
    </>
  );
}
