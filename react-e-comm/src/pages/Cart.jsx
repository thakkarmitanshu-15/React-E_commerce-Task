import { useCart } from "../hooks/useCart";
import DashboardLayout from "../layout/DashboardLayout";

export default function Cart() {
  const { cart, removeItem, updateQty } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="bg-white p-10 rounded-2xl shadow-md text-center">
          <p className="text-gray-500 text-lg">
            Your cart is empty 🛒
          </p>
        </div>
      ) : (
        <div className="space-y-5">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row md:justify-between md:items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              {/* Product Info */}
              <div className="mb-4 md:mb-0">
                <h3 className="font-semibold text-lg">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  ${item.price} per item
                </p>
              </div>

              {/* Quantity & Remove */}
              <div className="flex items-center gap-4">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQty(item.id, Number(e.target.value))
                  }
                  className="border rounded-lg w-20 text-center py-1 focus:ring-2 focus:ring-blue-500 outline-none"
                />

                <button
                  onClick={() => removeItem(item.id)}
                  className="bg-red-100 text-red-600 px-4 py-1.5 rounded-lg hover:bg-red-200 transition"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Total Section */}
          <div className="bg-white p-6 rounded-2xl shadow-md flex justify-between items-center mt-6">
            <h2 className="text-xl font-semibold">
              Total Amount
            </h2>
            <span className="text-2xl font-bold text-blue-600">
              ${total.toFixed(2)}
            </span>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}