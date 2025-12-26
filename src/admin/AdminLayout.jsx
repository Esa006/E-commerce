import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="bg-dark text-white p-3" style={{ width: "220px", minHeight: "100vh" }}>
        <h5 className="mb-4">Admin Panel</h5>

        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <Link to="/admin" className="nav-link text-white">Dashboard</Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/admin/products" className="nav-link text-white">Products</Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/orders" className="nav-link text-white">Orders</Link>
          </li>
        </ul>
      </div>

      {/* Page Content */}
      <div className="flex-grow-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
