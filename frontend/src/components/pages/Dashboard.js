import React, { useState } from "react";
import Sidebar from "../generic/Sidebar";
import Topbar from "../generic/Topbar";
import Tasks from "./TasksPage";
import ProcessingPage from "./ProcessingPage";
import DonePage from "./DonePage";
const Dashboard = ({
  user,
  taskData,
  processData,
  doneData,
  setData,
  totalIssue,
}) => {
  const [isTasksPage, setIsTasksPage] = useState(false);
  const [isProcessingPage, setIsProcessingPage] = useState(false);
  const [isDonePage, setIsDonePage] = useState(false);

  const totalTask = (taskData.length * 100) / totalIssue;
  return (
    <React.Fragment>
      <div id="wrapper">
        <Sidebar user={user} />
        <div id="content-wrapper" classNameName="d-flex flex-column">
          <div id="content">
            <Topbar userName={user?.name} setData={setData} />
            <div className="container-fluid">
              <h1>{`Hello ${user?.rule}!`}</h1>
              <div className="row">
                <div className="col-xl-3 col-md-6 mb-4">
                  <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                            Pending Requests
                          </div>
                          <div className="h5 mb-0 font-weight-bold text-gray-800">
                            $40,000
                          </div>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-calendar fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-md-6 mb-4">
                  <a
                    onClick={() => {
                      setIsTasksPage(true);
                      setIsProcessingPage(false);
                      setIsDonePage(false);
                    }}
                  >
                    <div className="card border-left-info shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                              Tasks
                            </div>
                            <div className="row no-gutters align-items-center">
                              <div className="col-auto">
                                <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                                  {taskData.length}
                                </div>
                              </div>
                              <div className="col">
                                <div className="progress progress-sm mr-2">
                                  <div
                                    className="progress-bar bg-info"
                                    role="progressbar"
                                    style={{ width: `${totalTask}%` }}
                                    aria-valuenow="50"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="col-xl-3 col-md-6 mb-4">
                  <a
                    onClick={() => {
                      setIsProcessingPage(true);
                      setIsTasksPage(false);
                      setIsDonePage(false);
                    }}
                  >
                    <div className="card border-left-warning shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                              Processing
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                              {processData.length}
                            </div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-comments fa-2x text-gray-300"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="col-xl-3 col-md-6 mb-4">
                  <a
                    onClick={() => {
                      setIsProcessingPage(false);
                      setIsTasksPage(false);
                      setIsDonePage(true);
                    }}
                  >
                    <div className="card border-left-success shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                              Done
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                              {doneData.length}
                            </div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="row">
                {isTasksPage && (
                  <Tasks
                    user={user}
                    taskData={taskData}
                    setData={setData}
                    setIsTasksPage={setIsTasksPage}
                  />
                )}
                {isProcessingPage && (
                  <ProcessingPage
                    user={user}
                    processData={processData}
                    setData={setData}
                    setIsProcessingPage={setIsProcessingPage}
                  />
                )}
                {isDonePage && (
                  <DonePage
                    user={user}
                    doneData={doneData}
                    setData={setData}
                    setIsDonePage={setIsDonePage}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
