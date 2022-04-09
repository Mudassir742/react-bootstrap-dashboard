import * as Icon from "react-feather";
import "bootstrap/dist/css/bootstrap.min.css";


const Sidebar = () => {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a
              className="nav-link active d-flex align-items-start"
              aria-current="page"
              href="/"
            >
              <Icon.Home size={16} />
              <span style={{ display: "block", marginLeft: ".5rem" }}>
                Dashboard
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex align-items-start" href="/">
              <Icon.File size={16} />
              <span style={{ display: "block", marginLeft: ".5rem" }}>
                Orders
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex align-items-start" href="/">
              <Icon.ShoppingCart size={16} />
              <span style={{ display: "block", marginLeft: ".5rem" }}>
                Products
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex align-items-start" href="/">
              <Icon.Users size={16} />
              <span style={{ display: "block", marginLeft: ".5rem" }}>
                Customers
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex align-items-start" href="/">
              <Icon.BarChart2 size={16} />
              <span style={{ display: "block", marginLeft: ".5rem" }}>
                Reports
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex align-items-start" href="/">
              <Icon.Layers size={16} />
              <span style={{ display: "block", marginLeft: ".5rem" }}>
                Integrations
              </span>
            </a>
          </li>
        </ul>

        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Saved reports</span>
          <a className="link-secondary" href="/" aria-label="Add a new report">
            <Icon.PlusCircle size={16} />
          </a>
        </h6>
        <ul className="nav flex-column mb-2">
          <li className="nav-item">
            <a className="nav-link d-flex align-items-start" href="/">
              <Icon.FileText size={16} />
              <span style={{ display: "block", marginLeft: ".5rem" }}>
                Current month
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex align-items-start" href="/">
              <Icon.FileText size={16} />
              <span style={{ display: "block", marginLeft: ".5rem" }}>
                Last quarter
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex align-items-start" href="/">
              <Icon.FileText size={16} />
              <span style={{ display: "block", marginLeft: ".5rem" }}>
                Social engagement
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex align-items-start" href="/">
              <Icon.FileText size={16} />
              <span style={{ display: "block", marginLeft: ".5rem" }}>
                Year-end sale
              </span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
