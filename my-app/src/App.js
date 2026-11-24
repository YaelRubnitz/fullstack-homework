import './App.css';
import { useState } from 'react';
import Header from './Header';
import FilterBar from './FilterBar';
import MembersList from './MembersList';
import Notice from './Notice';
import TasksPanel from './TasksPanel';
import Footer from './Footer';

const INITIAL_MEMBERS = [
  { id: 1, name: 'Dana Levi', role: 'Leader', isActive: true },
  { id: 2, name: 'Noa Cohen', role: 'Member', isActive: true },
  { id: 3, name: 'Yael Mizrahi', role: 'Guest', isActive: false },
];

const INITIAL_TASKS = [
  { id: 101, title: 'Prepare React slides', done: true, assignedTo: 1 },
  { id: 102, title: 'Review pull requests', done: false, assignedTo: 1 },
  { id: 103, title: 'Set up club Discord', done: false, assignedTo: 2 },
];

function App() {
  const [members] = useState(INITIAL_MEMBERS);
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [selectedMemberId, setSelectedMemberId] = useState(null);
  const [showOnlyActive, setShowOnlyActive] = useState(false);
  const [layout, setLayout] = useState('list');

  const visibleMembers = showOnlyActive
    ? members.filter((member) => member.isActive)
    : members;

  const selectedMember = members.find(
    (member) => member.id === selectedMemberId
  );

  const memberTasks = tasks.filter(
    (task) => task.assignedTo === selectedMemberId
  );

  function handleSelectMember(id) {
    setSelectedMemberId(id);
  }

  function handleToggleActive() {
    setShowOnlyActive((prev) => !prev);
  }

  function handleChangeLayout(newLayout) {
    setLayout(newLayout);
  }

  function handleToggleTask(taskId) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task
      )
    );
  }

  return (
    <div className="app">
      <Header title="Campus Club Dashboard" />

      <FilterBar
        showOnlyActive={showOnlyActive}
        onToggleActive={handleToggleActive}
        layout={layout}
        onChangeLayout={handleChangeLayout}
      />

      {!selectedMember && (
        <Notice
          type="info"
          message="Select a member to view their tasks."
        />
      )}

      {selectedMember && !selectedMember.isActive && (
        <Notice
          type="warning"
          message={`${selectedMember.name} is currently inactive.`}
        />
      )}

      <MembersList
        members={visibleMembers}
        layout={layout}
        selectedMemberId={selectedMemberId}
        onSelectMember={handleSelectMember}
      />

      <TasksPanel
        selectedMember={selectedMember}
        tasks={memberTasks}
        onToggleTask={handleToggleTask}
      />

      <Footer text="© 2025 Campus Coding Club" />
    </div>
  );
}

export default App;