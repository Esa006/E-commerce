import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <h3>Your Cart</h3>

        {cart.length === 0 && <p>Cart is empty</p>}

        {cart.map((item) => (
          <div
            key={`${item._id}-${item.size}`}
            className="d-flex justify-content-between border-bottom py-3"
          >
            <div>
              <h6>{item.name}</h6>
              <p>
                Size: {item.size} | Qty: {item.quantity}
              </p>
            </div>

            <div>
              <p>₹{item.price * item.quantity}</p>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => removeFromCart(item._id, item.size)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        

{cart.length > 0 && (
  <div className="text-end mt-4">
    <Link to="/checkout" className="btn btn-dark">
      Proceed to Checkout
    </Link>
  </div>
)}

      </div>
    </>
  );
};

export default Cart;
