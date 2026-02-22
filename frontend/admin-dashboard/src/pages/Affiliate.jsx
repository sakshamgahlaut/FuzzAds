import { useState } from "react";

const Affiliate = () => {
  const [referralLink] = useState(
    "https://yourpanel.com/?ref=USER123"
  );
  const [amount, setAmount] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    alert("Referral link copied!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 via-pink-300 to-red-300 p-8">

      {/* HEADER */}
      <div className="bg-white/40 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/30 mb-8">

        <h2 className="text-2xl font-bold mb-6">Affiliate Dashboard</h2>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <StatCard title="Total Referred" value="0" />
          <StatCard title="Active Referrals" value="0" />
          <StatCard title="Total Earned" value="0.0000" />
          <StatCard title="Available Balance" value="0.0000" />
        </div>

        {/* Referral Link */}
        <div>
          <h3 className="font-semibold mb-2">Your Referral Link</h3>

          <div className="flex gap-4 flex-col md:flex-row">
            <input
              type="text"
              value={referralLink}
              readOnly
              className="flex-1 p-3 rounded-lg bg-white/70 border border-white/40"
            />
            <button
              onClick={handleCopy}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg shadow"
            >
              Copy
            </button>
          </div>

          <p className="text-sm mt-3 text-gray-700">
            Earn 15% commission on every deposit made by your referrals
          </p>
        </div>
      </div>

      {/* LOWER SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Withdraw Earnings */}
        <div className="bg-white/40 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/30">
          <h3 className="text-xl font-bold mb-6">Withdraw Earnings</h3>

          <div className="mb-4">
            <label className="block font-semibold mb-2">
              Withdrawal Method
            </label>
            <select className="w-full p-3 rounded-lg bg-white/70 border border-white/40">
              <option>Select Method</option>
              <option>UPI</option>
              <option>Bank Transfer</option>
              <option>Paytm</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-2">
              Amount (INR)
            </label>
            <input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-3 rounded-lg bg-white/70 border border-white/40"
            />
            <p className="text-sm mt-2">Available: 0.0000</p>
          </div>

          <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold shadow">
            Request Withdrawal
          </button>
        </div>

        {/* Your Referrals */}
        <div className="bg-white/40 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/30">
          <h3 className="text-xl font-bold mb-6">Your Referrals</h3>
          <p className="text-gray-600">
            You haven't referred anyone yet
          </p>
        </div>

        {/* Commission History */}
        <div className="bg-white/40 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/30">
          <h3 className="text-xl font-bold mb-6">Commission History</h3>
          <p className="text-gray-600">
            No commission history found
          </p>
        </div>

        {/* Recent Withdrawals */}
        <div className="bg-white/40 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/30">
          <h3 className="text-xl font-bold mb-6">Recent Withdrawals</h3>
          <p className="text-gray-600">
            No withdrawal history found
          </p>
        </div>

      </div>
    </div>
  );
};

const StatCard = ({ title, value }) => {
  return (
    <div className="bg-white/60 rounded-xl p-6 shadow text-center">
      <h3 className="text-2xl font-bold">{value}</h3>
      <p className="text-sm mt-2 text-gray-700">{title}</p>
    </div>
  );
};

export default Affiliate;
