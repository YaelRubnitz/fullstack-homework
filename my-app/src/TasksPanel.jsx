function TasksPanel({ selectedMember, tasks, onToggleTask }) {
  if (!selectedMember) {
    return (
      <div className="tasks-panel">
        <p>Select a member...</p>
      </div>
    );
  }

  return (
    <div className="tasks-panel">
      <h2>Tasks for {selectedMember.name}</h2>
      {tasks.length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <label>
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => onToggleTask(task.id)}
                />
                <span style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
                  {task.title}
                </span>
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TasksPanel;