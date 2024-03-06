import { FormEvent, useState, useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";
import { Taskinterface } from "../App";
import { RingLoader } from "react-spinners";


function ActiveTask({
  active,
  tasks,
  handleSubmit,
  toggleActive,
  deleteTask,
  loading,
}: {
  active: Taskinterface[];
  tasks: Taskinterface[];
  handleSubmit: (e: FormEvent<HTMLFormElement>, value: string) => void;
  toggleActive: (id: string, completed: boolean) => void;
  deleteTask: (id: string) => void;
  loading: boolean;

}) {
  const [newTask, setNewTask] = useState("");
  const [activeTask] = useState(true);
  const [showSpinner, setShowSpinner] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSpinner(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="container-fluid text-center">
      <div className="row mt-5">
        <div className="col-md-12">
          <h1 className="display-5 text-warning">Active Task</h1>
          {loading || showSpinner ? (
            <RingLoader color="#ff0000" loading={true} size={150} />
          ) : null}

        </div>
        <form
          className="row mt-5 offset-md-2"
          onSubmit={(e) => {
            handleSubmit(e, newTask);
            setNewTask("");
          }}
        >
          <label className="row gy-1 gx-2 form-label fs-5 text text-primary">
            Enter Your Task
          </label>
          <input
            type="text"
            placeholder="Type Your Tasks Here..."
            className="form-control w-100"
            value={newTask}
            onChange={(task) => setNewTask(task.target.value)}
          />
          <div className="text-center mt-2">
            <button className="text-light btn btn-warning">Add Task</button>
          </div>
        </form>
      </div>
      <div className="Container-fluid mt-4">
        <h1 className="fs-4 text fw-light text-warning">Your Tasks</h1>
        {activeTask && active.length > 0 ? (
          active.map((e) => (
            <div
              key={e.id}
              className="d-flex justify-content-between bg-white p-1 px-3 rounded-sm"
            >
              <div className="d-flex gap-3 align-items-center">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={e.completed}
                  onChange={() => toggleActive(e.id, !e.completed)}
                />
                <label className="form-check-label me-3">{e.name}</label>
              </div>
              <button
                onClick={() => deleteTask(e.id)}
                className="d-flex align-items-center btn-sm btn btn-danger bg-gradient text-white rounded"
              >
                <MdDeleteForever size={18} className="me-1" />
                Delete
              </button>
            </div>
          ))
        ) : (
          <div className="fs-5 text fw-semibold text-danger mt-4">
            No Active Tasks
          </div>
        )}
      </div>
    </div>
  );
}

export default ActiveTask;
