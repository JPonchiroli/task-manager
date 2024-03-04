import Input from "../Input";

export default function Task({tasks}){
    return(
        <div className="flex border-2 border-solid border-white p-2">
            <Input type="radio" className="h-" />
            <h1 className="text-white text-xl">{tasks}</h1>
        </div>
    )
}