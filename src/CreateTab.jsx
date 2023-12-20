import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateTab() {
  const [formValue, setFormValue] = useState({});
  const navigate = useNavigate();

  const onChangeTitle = (event) => {
    setFormValue({ ...formValue, taskTitle: event.target.value });
    console.log(formValue);
  };

  const onChangePriority = (event) => {
    setFormValue({ ...formValue, taskPriority: event.target.value });
    console.log(formValue);
  };

  const onChangeDeadline = (event) => {
    setFormValue({ ...formValue, taskDeadline: event.target.value });
    console.log(formValue);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Create Task</h1>
      <div className="container p-4" style={{ fontSize: "18px" }}>
        <div className="mt-2" id="taskDes">
          <h4>Label:</h4>
          <input
            type="text"
            id="LabelField"
            onChange={onChangeTitle}
            placeholder="TASK DESCRIPTION"
            style={{
              width: "100%",
              height: "40px",
              borderRadius: "6px",
              border: "2px solid black",
              fontSize: "17px",
              padding: "12px",
            }}
          />
        </div>
        <div className="mt-3">
          <h4>Priority</h4>
        </div>
        <div className="form-check mt-3">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="Importantandurgent"
            onChange={onChangePriority}
            value="Important and urgent"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Important and urgent
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="Importantbutnoturgent"
            onChange={onChangePriority}
            value="Important but not urgent"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Important but not urgent
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            onChange={onChangePriority}
            id="Urgentbutnotimportant"
            value="Urgent but not important"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault3">
            Urgent but not important
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            onChange={onChangePriority}
            id="Notimportantnoturgent"
            value="Not important, not urgent"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault4">
            Not important, not urgent
          </label>
        </div>
        <div className="mt-3">
          <form method="post">
            <div className="form-group">
              <label className="control-label" htmlFor="date">
                <h4>Deadline</h4>
              </label>
              <input
                className="form-control"
                id="date"
                name="date"
                onChange={onChangeDeadline}
                placeholder="MM/DD/YYY"
                type="text"
              />
            </div>
            <div className="mt-5" style={{ textAlign: "center" }}>
              <button className="btn" onKeyDown={navigate('/', {state: formValue})}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateTab;
