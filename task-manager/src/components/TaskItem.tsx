import { useState } from "react";
import type { Task } from "../types/task";

interface Props {
  task: Task;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
  onEdit: (task: Task) => void;
}

export default function TaskItem({
  task,
  onDelete,
  onToggle,
  onEdit,
}: Props) {
  const [editing, setEditing] = useState(false);

  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  return (
    <div className="task">
      {editing ? (
        <>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button
            onClick={() => {
              onEdit({
                ...task,
                title,
                description,
              });

              setEditing(false);
            }}
          >
            Save
          </button>
        </>
      ) : (
        <>
          <h3>{task.title}</h3>

          <p>{task.description}</p>

          <p>{task.priority}</p>

          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
          />

          <button onClick={() => setEditing(true)}>
            Edit
          </button>

          <button onClick={() => onDelete(task.id)}>
            Delete
          </button>
        </>
      )}
    </div>
  );
}