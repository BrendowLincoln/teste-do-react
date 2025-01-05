import { useState } from "react";

function AddTask(props) {
    const [title, setTile] = useState("");
    const [description, setDescription] = useState("");

    function addTask(title, description) {
        props.onAddTaskSubmit(title, description);
        setTile("");
        setDescription("");
    }

    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">

            <input 
                className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" 
                type="text" 
                placeholder="Digite o titulo da tarefa"
                value={title}
                onChange={(ev) => setTile(ev.target.value)}
            />
            <input 
                className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
                type="text"
                placeholder="Descrição da tarefa"
                value={description}
                onChange={(ev) => setDescription(ev.target.value)}
            />
            <button className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium" onClick={() => addTask(title, description)}>Adicionar</button>
        </div>
    );
}

export default AddTask