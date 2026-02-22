import React from "react";

const API = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 p-8">
      <div className="max-w-5xl mx-auto bg-white/40 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/30">

        <h2 className="text-3xl font-bold mb-8">FuzzAds API Documentation</h2>

        {/* BASIC INFO */}
        <div className="mb-8">
          <table className="w-full border border-white/30">
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-semibold">Base URL</td>
                <td className="p-3">
                  https://fuzzads.onrender.com
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-semibold">Content Type</td>
                <td className="p-3">application/json</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Return Format</td>
                <td className="p-3">JSON</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* REGISTER */}
        <SectionTitle title="User Registration" />

        <ApiTable
          data={[
            { param: "Method", desc: "POST" },
            { param: "Endpoint", desc: "/api/auth/register" },
            { param: "name", desc: "User full name" },
            { param: "email", desc: "User email" },
            { param: "password", desc: "User password" },
          ]}
        />

        <CodeBlock>
{`POST https://fuzzads.onrender.com/api/auth/register

{
  "name": "John Doe",
  "email": "john@gmail.com",
  "password": "123456"
}`}
        </CodeBlock>

        {/* LOGIN */}
        <SectionTitle title="User Login" />

        <ApiTable
          data={[
            { param: "Method", desc: "POST" },
            { param: "Endpoint", desc: "/api/auth/login" },
            { param: "email", desc: "User email" },
            { param: "password", desc: "User password" },
          ]}
        />

        <CodeBlock>
{`POST https://fuzzads.onrender.com/api/auth/login

{
  "email": "john@gmail.com",
  "password": "123456"
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