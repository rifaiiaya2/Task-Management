import { useState, useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";
import { Taskinterface } from "../App";
import { RingLoader } from "react-spinners";

function CompleteTask({
  complete,
  toggleComplete,
  deleteTask,
  loading,
}: {
  complete: Taskinterface[];
  toggleComplete: (id: string, completed: boolean) => void;
  deleteTask: (id: string) => void;
  loading: boolean;

}) {
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
          <h1 className="display-5 text-warning">Completed Tasks</h1>
          {loading || showSpinner ? (
            <RingLoader color="#ff0000" loading={true} size={150} />
          ) : null}
        </div>
        <div className="Container-fluid mt-4">
          <h1 className="fs-4 text fw-light text-warning">Your Tasks</h1>

          {complete.length > 0 ? (
            complete.map((task) => (
              <div
                key={task.id}
                className="d-flex justify-content-between bg-white p-1 px-3 rounded-sm"
              >
                <div className="d-flex gap-3 align-items-center">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={task.completed}
                    onChange={() => toggleComplete(task.id, !task.completed)}
                  />
                  <label className="form-check-label me-3">{task.name}</label>
                </div>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="d-flex align-items-center btn-sm btn btn-danger bg-gradient text-white rounded"
                >
                  <MdDeleteForever size={18} className="me-1" />
                  Delete
                </button>
              </div>
            ))
          ) : (
            <div className="fs-5 text fw-semibold text-danger mt-4">
              No Completed Tasks!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CompleteTask;
