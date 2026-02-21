import { useCart } from "../hooks/useCart";

export default function ProductCard({ product }) {
  const { addToCart, cart } = useCart();
  const alreadyInCart = cart.find((item) => item.id === product.id);

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col">
      <div className="h-48 bg-gray-50 flex items-center justify-center p-4">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="max-h-full object-contain"
        />
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-semibold text-sm line-clamp-2">
          {product.title}
        </h3>

        <p className="text-gray-400 text-xs mt-1">
          {product.brand}
        </p>

        <p className="text-blue-600 font-bold text-lg mt-2">
          ${product.price}
        </p>

        <button
          onClick={() => addToCart(product)}
          className={`mt-auto py-2 rounded-lg text-white transition 
            ${
              alreadyInCart
                ? "bg-green-600"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
        >
          {alreadyInCart ? "Added ✓" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}