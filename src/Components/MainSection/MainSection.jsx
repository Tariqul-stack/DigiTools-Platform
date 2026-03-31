import React, { useState } from "react";
import { Check, Trash2 } from "lucide-react";
import { productsData } from "../../Data/productsData";

const MainSection = ({ cartItems, setCartItems }) => {
  const [activeTab, setActiveTab] = useState("products");
  const [addedIds, setAddedIds] = useState([]);

  const handleAddToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);

    if (exists) return;

    setCartItems([...cartItems, product]);
    setAddedIds((prev) => [...prev, product.id]);
  };

  const handleRemoveFromCart = (id) => {
    const remainingItems = cartItems.filter((item) => item.id !== id);
    setCartItems(remainingItems);

    setAddedIds((prev) => prev.filter((itemId) => itemId !== id));
  };

  const handleCheckout = () => {
    setCartItems([]);
    setAddedIds([]);
  };

  const getTagStyle = (tagType) => {
    if (tagType === "best-seller") {
      return "bg-[#FFF3DC] text-[#E38B00]";
    }
    if (tagType === "popular") {
      return "bg-[#EEE9FF] text-[#7C4DFF]";
    }
    if (tagType === "new") {
      return "bg-[#E7F9EE] text-[#20B15A]";
    }
    return "bg-gray-100 text-gray-600";
  };

  return (
    <section className="px-6 md:px-10 lg:px-16 py-20 bg-[#F8F8FB]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#111827]">
            Premium Digital Tools
          </h2>
          <p className="mt-4 text-[#6B7280] text-lg leading-8">
            Choose from our curated collection of premium digital products
            designed to boost your productivity and creativity.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="flex items-center bg-white rounded-full p-1 shadow-sm border border-gray-200">
            <button
              onClick={() => setActiveTab("products")}
              className={`px-8 py-3 rounded-full font-semibold transition ${
                activeTab === "products"
                  ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-md"
                  : "text-[#111827]"
              }`}
            >
              Products
            </button>

            <button
              onClick={() => setActiveTab("cart")}
              className={`px-8 py-3 rounded-full font-semibold transition ${
                activeTab === "cart"
                  ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-md"
                  : "text-[#111827]"
              }`}
            >
              Cart ({cartItems.length})
            </button>
          </div>
        </div>

        {activeTab === "products" && (
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {productsData.map((product) => (
              <div
                key={product.id}
                className="rounded-3xl border border-gray-200 bg-white p-6"
              >
                <div className="flex items-start justify-between">
                  <div className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center bg-white">
                    <img
                      src={product.icon}
                      alt={product.name}
                      className="w-7 h-7 object-contain"
                    />
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getTagStyle(
                      product.tagType,
                    )}`}
                  >
                    {product.tag}
                  </span>
                </div>

                <div className="mt-6">
                  <h3 className="text-[34px] leading-tight font-bold text-[#1F2937] md:text-[22px]">
                    {product.name}
                  </h3>

                  <p className="mt-4 text-[#6B7280] leading-7 text-base">
                    {product.description}
                  </p>

                  <div className="mt-5 flex items-end gap-1">
                    <span className="text-4xl font-bold text-[#111827]">
                      ${product.price}
                    </span>
                    <span className="text-[#6B7280] text-xl">
                      /{product.period}
                    </span>
                  </div>

                  <div className="mt-6 space-y-3">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Check size={18} className="text-[#22C55E]" />
                        <span className="text-[#6B7280] text-lg">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => handleAddToCart(product)}
                    className={`mt-8 w-full py-4 rounded-full font-semibold transition ${
                      addedIds.includes(product.id)
                        ? "bg-green-500 text-white"
                        : "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
                    }`}
                  >
                    {addedIds.includes(product.id)
                      ? "Added to Cart ✓"
                      : "Buy Now"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "cart" && (
          <div className="mt-14 max-w-4xl mx-auto">
            {cartItems.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-gray-300 bg-white py-20 px-6 text-center">
                <h3 className="text-3xl font-bold text-[#111827]">
                  Your cart is empty
                </h3>
                <p className="mt-3 text-[#6B7280] text-lg">
                  Click on a product to add it to your cart.
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-3xl border border-gray-200 bg-white p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center bg-white">
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="w-7 h-7 object-contain"
                        />
                      </div>

                      <div>
                        <h4 className="text-2xl font-bold text-[#111827]">
                          {item.name}
                        </h4>
                        <p className="text-[#6B7280] text-lg">${item.price}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleRemoveFromCart(item.id)}
                      className="flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-red-200 text-red-500 font-semibold"
                    >
                      <Trash2 size={18} />
                      Remove
                    </button>
                  </div>
                ))}

                <button
                  onClick={handleCheckout}
                  className="w-full py-4 rounded-full text-white font-semibold bg-linear-to-r from-[#4F39F6] to-[#9514FA]"
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default MainSection;
