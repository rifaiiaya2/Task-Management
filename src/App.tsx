import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, FormEvent } from "react";
import { v4 as uuidv4 } from "uuid";
import CompletedTask from "./components/CompleteTask";
import ActiveTask from "./components/ActiveTask";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
export interface Taskinterface {
  id: string;
  name: string;
  completed: boolean;
  //toggleActive: (id: string, completed: boolean) => void;
}
export interface _TaskList {
  complete?: Taskinterface[];
  active?: Taskinterface[];
}

function App() {
  const [tasks, setTasks] = useState<Taskinterface[]>([]);
  const [loading] = useState<boolean>(false);
  const handleSubmit = (e: FormEvent<HTMLFormElement>, value: string) => {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      name: value,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };
  const toggleActive = (id: string, completed: boolean) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          task.completed = completed;
        }
        return task;
      })
    );
  };
  const deleteTask = (id: string) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };
  const active = tasks.filter((task) => task.completed === false);
  const complete = tasks.filter((task) => task.completed === true);

  return (
    <BrowserRouter>
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-2 gap-4">
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route
              path="/active"
              element={
                <ActiveTask
                  tasks={tasks}
                  handleSubmit={handleSubmit}
                  toggleActive={toggleActive}
                  deleteTask={deleteTask}
                  active={active}
                  loading={loading}

                />
              }
            ></Route>
            <Route
              path="/complete"
              element={
                <CompletedTask
                  toggleComplete={toggleActive}
                  complete={complete}
                  deleteTask={deleteTask}
                  loading={loading}

                />
              }
            ></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
