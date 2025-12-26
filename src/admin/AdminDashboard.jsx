const AdminDashboard = () => {
  return (
    <>
      <h3>Dashboard</h3>
      <p>Welcome to Admin Panel</p>

      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card p-3">
            <h6>Total Products</h6>
            <strong>52</strong>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3">
            <h6>Total Orders</h6>
            <strong>12</strong>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
