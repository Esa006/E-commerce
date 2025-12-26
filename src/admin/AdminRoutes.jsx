import { Route } from "react-router-dom";

import AdminLayout from "./AdminLayout";
import AdminDashboard from "./AdminDashboard";
import AdminProducts from "./AdminProducts";
import AdminOrders from "./AdminOrders";

const adminRoutes = (
  <Route path="/admin" element={<AdminLayout />}>
    <Route index element={<AdminDashboard />} />
    <Route path="products" element={<AdminProducts />} />
    <Route path="orders" element={<AdminOrders />} />
  </Route>
);

export default adminRoutes;
