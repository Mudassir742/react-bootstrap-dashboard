import * as Icon from "react-feather";

import DashboardChart from "./DashboardChart/DashboardChart";
import DashboardTable from "./DashboardTable/DashboardTable";

const Dashboard = () => {
  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Dashboard</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Share
            </button>
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Export
            </button>
          </div>
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary dropdown-toggle d-flex align-items-center"
          >
            <Icon.Calendar size={16} style={{marginRight:'.2rem'}}/>
            <span>This week</span>
          </button>
        </div>
      </div>
      <DashboardChart />
      <DashboardTable />
    </main>
  );
};

export default Dashboard;
