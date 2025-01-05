import { ChevronRightIcon, DeleteIcon, Trash2Icon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks(props) {

    const navigate = useNavigate();

    function onSeeDetailsClick(task) {
        const query = new URLSearchParams();
        query.set("title", task.title);
        query.set("description", task.description);
        navigate(`/task?${query.toString()}`)
    }

    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md">
        {props.tasks.map(task => (
            <li key={task.id} className="flex gap-2">
                <button
                    className={`bg-slate-400 w-full p-2 rounded-md text-white ${task.isCompleted && 'line-through'}`}
                    onClick={() => props.onTaskClick(task.id)}
                >
                    {task.title}
                    
                </button>
                <button
                    className="bg-slate-400 p-2 rounded-md text-white"
                    onClick={() => onSeeDetailsClick(task)}
                >
                    <ChevronRightIcon />
                </button>
                <button
                    className="bg-slate-400 p-2 rounded-md text-white"
                    onClick={() => props.onDeleteTaskClick(task.id)}
                >
                    <TrashIcon />
                </button>
            </li>
        ))}
        </ul>
    )
}

export default Tasks;