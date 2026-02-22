import { useState } from "react";

const ordersData = [
  {
    id: 1001,
    date: "21/02/2026",
    link: "https://facebook.com/post/123",
    charge: "₹ 39.00",
    startCount: 1200,
    quantity: 1000,
    service: "Facebook Post Likes",
    status: "Pending",
    remains: 1000,
  },
  {
    id: 1002,
    date: "21/02/2026",
    link: "https://facebook.com/post/456",
    charge: "₹ 41.19",
    startCount: 500,
    quantity: 500,
    service: "Facebook Post Likes",
    status: "Completed",
    remains: 0,
  },
];

const Orders = () => {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filteredOrders = ordersData.filter((order) => {
    const matchesStatus =
      filter === "All" || order.status === filter;

    const matchesSearch =
      order.service.toLowerCase().includes(search.toLowerCase()) ||
      order.link.toLowerCase().includes(search.toLowerCase());

    return matchesStatus && matchesSearch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Completed":
        return "bg-green-100 text-green-700";
      case "In Progress":
        return "bg-blue-100 text-blue-700";
      case "Canceled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 via-pink-300 to-red-300 p-8">

      {/* Filters */}
      <div className="flex gap-3 mb-6 flex-wrap">
        {["All", "Pending", "In Progress", "Completed", "Canceled"].map(
          (status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-full text-sm font-semibold shadow ${
                filter === status
                  ? "bg-white text-black"
                  : "bg-white/50 text-gray-700"
              }`}
            >
              {status}
            </button>
          )
        )}
      </div>

      {/* Search */}
      <div className="mb-6 bg-white/40 backdrop-blur-lg rounded-xl p-4 shadow">
        <input
          type="text"
          placeholder="Search orders..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 rounded-lg bg-white/70 border border-white/40 outline-none"
        />
      </div>

      {/* Table */}
      <div className="bg-white/40 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/30">
        <table className="w-full text-sm">
          <thead className="bg-red-500 text-white text-left">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Date</th>
              <th className="p-3">Link</th>
              <th className="p-3">Charge</th>
              <th className="p-3">Start count</th>
              <th className="p-3">Quantity</th>
              <th className="p-3">Service Name</th>
              <th className="p-3">Status</th>
              <th className="p-3">Remains</th>
            </tr>
          </thead>

          
        </table>
      </div>
    </div>
  );
};

export default Orders;
