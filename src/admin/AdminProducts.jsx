import { products } from "../assets/assets";

const AdminProducts = () => {
  return (
    <>
      <h3>Products</h3>

      <table className="table mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p._id}>
              <td>{p.name}</td>
              <td>{p.category}</td>
              <td>₹{p.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AdminProducts;
