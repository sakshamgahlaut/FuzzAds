import { useEffect, useState } from "react";

const TopSummary = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.username) {
      setUserName(user.username);
    }
  }, []);

  return (
    <div className="mb-8">
      
      {/* Festive Lights Line */}
      <div className="flex justify-center mb-6">
        <div className="w-full h-6 bg-gradient-to-r from-red-400 via-green-400 to-purple-400 rounded-full opacity-80"></div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-4 gap-6">
        
        {/* Profile */}
        <div className="bg-white/40 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/30">
          <h3 className="font-semibold text-lg">
            {userName || "User"} ✔️
          </h3>
          <p className="text-sm mt-2">
            Welcome To yadav digital marketing
          </p>
        </div>

        {/* Total Spend */}
        <div className="bg-white/40 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/30">
          <h3 className="text-xl font-bold">₹ 0</h3>
          <p className="text-sm mt-2">Total Spend</p>
        </div>

        {/* Total Orders */}
        <div className="bg-white/40 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/30">
          <h3 className="text-xl font-bold">122</h3>
          <p className="text-sm mt-2">Total Orders</p>
        </div>

        {/* Total Balance */}
        <div className="bg-white/40 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/30">
          <h3 className="text-xl font-bold">₹ 0</h3>
          <p className="text-sm mt-2">Total Balance</p>
        </div>

      </div>
    </div>
  );
};

export default TopSummary;
