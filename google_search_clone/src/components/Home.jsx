import React from 'react';

const apps = [
  { name: "YouTube", icon: "📺" },
  { name: "Gmail", icon: "✉️" },
  { name: "Maps", icon: "🗺️" },
  { name: "Drive", icon: "📁" },
];

const Home = () => {
  return (
    <div className="p-4 space-y-4">
      <div className="text-center">
        <input
          type="text"
          placeholder="Search Google"
          className="w-full p-2 border rounded-md"
        />
      </div>

      <div className="grid grid-cols-4 gap-4 text-center">
        {apps.map((app) => (
          <div key={app.name} className="text-sm">
            <div className="text-3xl">{app.icon}</div>
            {app.name}
          </div>
        ))}
      </div>

      {/* Example fidget */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-md font-semibold mb-2">Weather</h2>
        <p>🌤️ 28°C, Delhi</p>
      </div>

      {/* Real-time feed */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-md font-semibold mb-2">News Feed</h2>
        <ul>
          <li>• ChatGPT just got better 🧠</li>
          <li>• React 19 is in beta 🚀</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
