import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import Navbar from "../components/Navbar";

const Checkout = () => {
  const { cart } = useContext(CartContext);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Cart is empty");
      return;
    }

    console.log("Order Details:", {
      customer: form,
      cart,
      totalAmount,
    });

    alert("Order placed successfully (mock)");
  };

  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <h3 className="mb-4">Checkout</h3>

        <div className="row">
          {/* LEFT – FORM */}
          <div className="col-md-6">
            <h5>Shipping Details</h5>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="form-control mb-3"
                value={form.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-control mb-3"
                value={form.email}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="form-control mb-3"
                value={form.phone}
                onChange={handleChange}
                required
              />

              <textarea
                name="address"
                placeholder="Delivery Address"
                className="form-control mb-3"
                rows="4"
                value={form.address}
                onChange={handleChange}
                required
              ></textarea>

              <button className="btn btn-dark w-100">
                Place Order
              </button>
            </form>
          </div>

          {/* RIGHT – ORDER SUMMARY */}
          <div className="col-md-6">
            <h5>Order Summary</h5>

            {cart.map((item) => (
              <div
                key={`${item._id}-${item.size}`}
                className="d-flex justify-content-between border-bottom py-2"
              >
                <div>
                  <strong>{item.name}</strong>
                  <p className="mb-0">
                    Size: {item.size} | Qty: {item.quantity}
                  </p>
                </div>

                <div>₹{item.price * item.quantity}</div>
              </div>
            ))}

            <hr />
            <h5>Total: ₹{totalAmount}</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
