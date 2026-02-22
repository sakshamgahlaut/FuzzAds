import React from "react";

const API = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 p-8">

      <div className="max-w-5xl mx-auto bg-white/40 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/30">

        <h2 className="text-3xl font-bold mb-8">API</h2>

        {/* BASIC INFO TABLE */}
        <div className="mb-8">
          <table className="w-full border border-white/30">
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-semibold">HTTP Method</td>
                <td className="p-3">POST</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-semibold">API URL</td>
                <td className="p-3">
                  https://yourpanel.com/api/v2
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-semibold">API Key</td>
                <td className="p-3">
                  Get API key from Account page
                </td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Return Format</td>
                <td className="p-3">JSON</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* SERVICE LIST */}
        <SectionTitle title="Service List" />

        <ApiTable
          data={[
            { param: "key", desc: "Your API Key" },
            { param: "action", desc: "services" },
          ]}
        />

        <CodeBlock>
{`[
  {
    "service": 1,
    "name": "Instagram Followers",
    "type": "Default",
    "category": "Instagram",
    "rate": "0.90",
    "min": 50,
    "max": 10000
  }
]`}
        </CodeBlock>

        {/* NEW ORDER */}
        <SectionTitle title="New Order" />

        <ApiTable
          data={[
            { param: "key", desc: "Your API Key" },
            { param: "action", desc: "add" },
            { param: "service", desc: "Service ID" },
            { param: "link", desc: "Service link" },
            { param: "quantity", desc: "Quantity" },
            { param: "runs", desc: "Runs (optional)" },
            { param: "interval", desc: "Interval (optional)" },
          ]}
        />

        <CodeBlock>
{`{
  "order": 23501
}`}
        </CodeBlock>

        {/* ORDER STATUS */}
        <SectionTitle title="Order Status" />

        <ApiTable
          data={[
            { param: "key", desc: "Your API Key" },
            { param: "action", desc: "status" },
            { param: "order", desc: "Order ID" },
          ]}
        />

        <CodeBlock>
{`{
  "charge": "0.27819",
  "start_count": "3572",
  "status": "Partial",
  "remains": "157",
  "currency": "USD"
}`}
        </CodeBlock>

        {/* USER BALANCE */}
        <SectionTitle title="User Balance" />

        <ApiTable
          data={[
            { param: "key", desc: "Your API Key" },
            { param: "action", desc: "balance" },
          ]}
        />

        <CodeBlock>
{`{
  "balance": "100.84292",
  "currency": "USD"
}`}
        </CodeBlock>

      </div>
    </div>
  );
};

/* ---------- Reusable Components ---------- */

const SectionTitle = ({ title }) => (
  <h3 className="text-xl font-bold mt-10 mb-4 bg-red-500 text-white p-3 rounded-lg">
    {title}
  </h3>
);

const ApiTable = ({ data }) => (
  <table className="w-full mb-6 border border-white/30">
    <thead className="bg-red-500 text-white">
      <tr>
        <th className="p-3 text-left">Parameter</th>
        <th className="p-3 text-left">Explanation</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr key={index} className="border-b">
          <td className="p-3 font-medium">{item.param}</td>
          <td className="p-3">{item.desc}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const CodeBlock = ({ children }) => (
  <div className="bg-gray-900 text-green-400 p-6 rounded-lg mb-8 overflow-x-auto">
    <pre>{children}</pre>
  </div>
);

export default API;