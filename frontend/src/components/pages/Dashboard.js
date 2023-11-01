import React from "react";
import Sidebar from "../generic/Sidebar";
import Topbar from "../generic/Topbar";

const Dashboard = ({ user, setUser }) => {
  return (
    <React.Fragment>
      <div id="wrapper">
        <Sidebar user={user} />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar userName={user?.user.name} setUser={setUser} />
            <div class="container-fluid">
              <h1>{`Hello ${user?.user.rule}!`}</h1>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
