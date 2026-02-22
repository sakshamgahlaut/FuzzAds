import { useState } from "react";
import { useNavigate } from "react-router-dom";

const servicesData = [
  {
    id: 9457,
    name: "Facebook Post Likes [ Max 1M ] | HQ Real Accounts | No Refill | Instant Start | Day 100K",
    price: "₹39.00 per 1K",
    minmax: "10 / 1000000",
    status: "Not enough data",
  },
  {
    id: 9458,
    name: "Facebook Post Likes [ Max 500K ] | HQ Real Accounts | 30 Days Refill | Instant Start",
    price: "₹41.19 per 1K",
    minmax: "10 / 1000000",
    status: "Not enough data",
  },
  {
    id: 9460,
    name: "Facebook Post Likes [ Max 500K ] | HQ & Real Profiles | No Refill",
    price: "₹50.04 per 1K",
    minmax: "50 / 200000",
    status: "Not enough data",
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Services</h2>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Service</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left">Min / Max</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {servicesData.map((service, index) => (
              <tr key={index} className="border-t hover:bg-gray-50">
                <td className="p-3">{service.id}</td>
                <td className="p-3 font-medium">{service.name}</td>
                <td className="p-3">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                    {service.price}
                  </span>
                </td>
                <td className="p-3">
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs">
                    {service.minmax}
                  </span>
                </td>
                <td className="p-3 text-gray-500">{service.status}</td>
                <td className="p-3">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="bg-red-500 text-white px-3 py-1 rounded text-xs hover:bg-red-600"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 🔥 Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white w-[500px] rounded-2xl shadow-2xl overflow-hidden relative">

            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-3 right-4 text-red-500 text-xl font-bold"
            >
              ✕
            </button>

            <div className="p-6 border-b">
              <h2 className="text-lg font-bold">
                {selectedService.name}
              </h2>
            </div>

            <div className="p-6 space-y-3 text-gray-700">
              <p><strong>Price:</strong> {selectedService.price}</p>
              <p><strong>Min / Max:</strong> {selectedService.minmax}</p>
              <p><strong>Status:</strong> {selectedService.status}</p>
              <p><strong>Start:</strong> Instant</p>
              <p><strong>Speed:</strong> 100K/Day</p>
              <p><strong>Drop:</strong> No</p>
              <p><strong>Refill:</strong> 30 Days</p>
            </div>

            <div className="flex justify-between p-6 border-t">
              <button
                onClick={() => {
                  navigate("/", { state: selectedService });
                  setSelectedService(null);
                }}
                className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
              >
                Create Order
              </button>

              <button
                onClick={() => setSelectedService(null)}
                className="bg-gray-300 px-6 py-2 rounded-lg hover:bg-gray-400"
              >
                Okay
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
