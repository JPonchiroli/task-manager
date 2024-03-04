import Form from "./components/Form";
import Title from "./components/Title";

export default function Home() {
  return (
    <div className="bg-slate-900">
      <div className="pt-5">
        <div className="flex flex-col justify-center items-center h-screen">
          <Title>Task Manager</Title>
          <Form />
        </div>
      </div>
    </div>
  )
}

