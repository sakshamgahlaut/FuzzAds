import { useState } from "react";
import servicesData from "../data/servicesData";
import TopSummary from "../components/TopSummary";


const NewOrder = () => {
  const [selectedCategory, setSelectedCategory] = useState(servicesData[0]);
  const [selectedService, setSelectedService] = useState(
    servicesData[0].services[0]
  );
  const [quantity, setQuantity] = useState("");

  const charge = quantity
    ? (quantity * selectedService.price).toFixed(2)
    : "0.00";

  return (

     

    <div className="ml-0 min-h-screen bg-gradient-to-br from-purple-300 via-pink-300 to-red-300 p-8">

        <TopSummary />
      
      <div className="max-w-4xl mx-auto bg-white/40 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/30">
        
        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="🔍 Search"
            className="w-full p-4 rounded-xl bg-white/60 border border-white/40 outline-none"
          />
        </div>

        {/* Category */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Category</label>
          <select
            className="w-full p-4 rounded-xl bg-white/60 border border-white/40"
            onChange={(e) => {
              const category = servicesData.find(
                (cat) => cat.category === e.target.value
              );
              setSelectedCategory(category);
              setSelectedService(category.services[0]);
            }}
          >
            {servicesData.map((cat) => (
              <option key={cat.category}>{cat.category}</option>
            ))}
          </select>
        </div>

        {/* Services */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Services</label>
          <select
            className="w-full p-4 rounded-xl bg-white/60 border border-white/40"
            onChange={(e) => {
              const service = selectedCategory.services.find(
                (srv) => srv.name === e.target.value
              );
              setSelectedService(service);
            }}
          >
            {selectedCategory.services.map((srv) => (
              <option key={srv.name}>{srv.name}</option>
            ))}
          </select>
        </div>

        {/* Description Box */}
        <div className="mb-6 bg-white/60 rounded-xl p-6 border border-white/40">
          <h3 className="font-semibold mb-4">Description</h3>
          <p>Start : {selectedService.description.start}</p>
          <p>Speed : {selectedService.description.speed}</p>
          <p>Drop : {selectedService.description.drop}</p>
          <p>
            Refill :{" "}
            <span className="font-bold">
              {selectedService.description.refill}
            </span>
          </p>
        </div>

        {/* Link */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Link</label>
          <input
            type="text"
            className="w-full p-4 rounded-xl bg-white/60 border border-white/40"
          />
        </div>

        {/* Quantity */}
        <div className="mb-2">
          <label className="block font-semibold mb-2">Quantity</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full p-4 rounded-xl bg-white/60 border border-white/40"
          />
          <p className="text-sm mt-1">Min: 10 - Max: 100000</p>
        </div>

        {/* Charge */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Charge</label>
          <input
            type="text"
            value={`₹ ${charge}`}
            disabled
            className="w-full p-4 rounded-xl bg-gray-100 border"
          />
        </div>

        {/* Button */}
        <button className="w-full bg-red-500 hover:bg-red-600 text-white py-4 rounded-xl font-semibold text-lg shadow-lg transition">
          New Order
        </button>
      </div>
    </div>
  );
};

export default NewOrder;
