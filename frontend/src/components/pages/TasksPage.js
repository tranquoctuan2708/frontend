import axios from "axios";
import React from "react";

const Tasks = ({ user, taskData, setData, setIsTasksPage }) => {
  const onUpdateStatus = async () => {
    try {
      const { data } = await axios.patch("");
      setData((prev) => ({ ...prev, taskData: data }));
    } catch (e) {
      console.log("---------------e", e);
    }
  };
  return (
    <React.Fragment>
      <div class="col-xl-12 col-md-6 mb-12">
        <div class="card shadow mb-12">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Tasks</h6>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table
                class="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>id</th>
                    <th>Author</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Date Created</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {taskData.map((val, key) => {
                    return (
                      <tr key={key}>
                        <td>{val.id}</td>
                        <td>{val.user_name}</td>
                        <td>{val.description}</td>
                        <td>{val.status}</td>
                        <td>{val.date_created}</td>
                        <td style={{ textAlign: "center" }}>
                          <button
                            type="button"
                            class="btn btn-success"
                            onClick={() => {
                              val.status = "processing";
                              console.log("--------------------", val);
                              setIsTasksPage(false);
                            }}
                          >
                            Accept
                          </button>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <button
                            type="button"
                            class="btn btn-danger"
                            onClick={() => {
                              console.log("--------------------", val);
                              setIsTasksPage(false);
                            }}
                          >
                            Reject
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Tasks;
