import { useState } from "react";

const Support = () => {
  const [subject, setSubject] = useState("Order");
  const [orderId, setOrderId] = useState("");
  const [requestType, setRequestType] = useState("Refill");
  const [message, setMessage] = useState("");
  const [search, setSearch] = useState("");

  const [tickets, setTickets] = useState([
    {
      id: 101,
      subject: "Order Refill",
      status: "Open",
      lastUpdate: "21 Feb 2026",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTicket = {
      id: Date.now(),
      subject: subject,
      status: "Open",
      lastUpdate: new Date().toLocaleDateString(),
    };

    setTickets([newTicket, ...tickets]);
    setOrderId("");
    setMessage("");
  };

  const filteredTickets = tickets.filter((ticket) =>
    ticket.subject.toLowerCase().includes(search.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case "Open":
        return "bg-yellow-100 text-yellow-700";
      case "Closed":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 via-pink-300 to-red-300 p-8">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* LEFT SIDE - TICKET FORM */}
        <div className="bg-white/40 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/30">

          <h2 className="text-xl font-bold mb-6">Create Support Ticket</h2>

          <form onSubmit={handleSubmit}>

            {/* Subject */}
            <div className="mb-4">
              <label className="block font-semibold mb-2">Subject</label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full p-3 rounded-lg bg-white/70 border border-white/40"
              >
                <option>Order</option>
                <option>Payment</option>
                <option>Service</option>
              </select>
            </div>

            {/* Order ID */}
            <div className="mb-4">
              <label className="block font-semibold mb-2">Order ID</label>
              <input
                type="text"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                className="w-full p-3 rounded-lg bg-white/70 border border-white/40"
                placeholder="For multiple orders separate by comma"
              />
            </div>

            {/* Request */}
            <div className="mb-4">
              <label className="block font-semibold mb-2">Request</label>
              <select
                value={requestType}
                onChange={(e) => setRequestType(e.target.value)}
                className="w-full p-3 rounded-lg bg-white/70 border border-white/40"
              >
                <option>Refill</option>
                <option>Cancel</option>
                <option>Speed Issue</option>
              </select>
            </div>

            {/* Message */}
            <div className="mb-4">
              <label className="block font-semibold mb-2">Message</label>
              <textarea
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 rounded-lg bg-white/70 border border-white/40"
              ></textarea>
            </div>

            {/* File Upload */}
            <div className="mb-6">
              <input type="file" className="w-full" />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold shadow-lg transition"
            >
              Submit Ticket
            </button>

          </form>
        </div>

        {/* RIGHT SIDE - TICKET TABLE */}
        <div className="bg-white/40 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-white/30">

          {/* Search */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search tickets..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full p-3 rounded-lg bg-white/70 border border-white/40"
            />
          </div>

          {/* Table */}
          <table className="w-full text-sm">
            <thead className="bg-red-500 text-white text-left">
              <tr>
                <th className="p-3">ID</th>
                <th className="p-3">Subject</th>
                <th className="p-3">Status</th>
                <th className="p-3">Last Update</th>
              </tr>
            </thead>

           
          </table>

        </div>

      </div>
    </div>
  );
};

export default Support;
