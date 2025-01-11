import React from "react";
import ReactDOM from "react-dom/client";
import DocumentMeta from "react-document-meta";
import "./index.css";
import App from "./App";

const meta = {
  title: "Abdulrahman Alidrisy - Full-Stack Developer Portfolio and Blog",
  description:
    "Welcome to the official portfolio and blog of Abdulrahman Alidrisy, a full-stack developer specializing in React, Node.js, JavaScript, and TypeScript. Explore his expertise in Mongoose for database management, Socket.IO for real-time communication, and custom error handling implementations. Discover his projects, insights, and contact information.",
  meta: {
    charset: "utf-8",
    name: {
      keywords:
        "Abdulrahman Alidrisy, Abdulrahman Al Idrisi, full-stack developer, Abdulrahman Alidrisy blog, Abdulrahman Alidrisy portfolio, React, Node.js, JavaScript, TypeScript, Mongoose, real-time communication",
      author: "Abdulrahman Alidrisy",
    },
    property: {
      "og:type": "article",
      "og:title":
        "Abdulrahman Alidrisy - Full-Stack Developer Portfolio and Blog",
      "og:description":
        "Official portfolio and blog of Abdulrahman Alidrisy, featuring web development projects and insights.",
      "og:image": "https://alidrisy.software/avatar.png",
      "og:url": "https://alidrisy.software",
      "twitter:card": "summary_large_image",
      "twitter:title":
        "Abdulrahman Alidrisy - Full-Stack Developer Portfolio and Blog",
      "twitter:description":
        "Explore Abdulrahman Alidrisy's projects, insights, and expertise in full-stack development using React, Node.js, and more.",
      "twitter:image": "https://alidrisy.software/avatar.png",
      "twitter:site": "@AbdulrahmanAdeb",
      "twitter:creator": "@AbdulrahmanAdeb",
    },
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DocumentMeta {...meta}>
      <App />
    </DocumentMeta>
  </React.StrictMode>
);
