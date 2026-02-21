import DashboardLayout from "../layout/DashboardLayout";
import { useAuth } from "../hooks/useAuth";
import { useCart } from "../hooks/useCart";

export default function Dashboard() {
  const { user } = useAuth();
  const { cart } = useCart();

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">
        Welcome back, {user?.name} 👋
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-gray-500 text-sm">
            Items in Cart
          </h2>
          <p className="text-3xl font-bold mt-2 text-blue-600">
            {totalItems}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-gray-500 text-sm">
            Account Email
          </h2>
          <p className="text-lg font-medium mt-2">
            {user?.email}
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}