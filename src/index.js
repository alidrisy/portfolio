import React from 'react';
import ReactDOM from 'react-dom/client';
import DocumentMeta from 'react-document-meta';
import './index.css';
import App from './App';

const meta = {
  title: 'Abdulrahman Alidrisy - Full-Stack Developer',
  description: 'Abdulrahman Alidrisy is a full-stack developer specializing in building robust web applications and services. He has expertise in React, Node.js, JavaScript, and TypeScript. Abdulrahman also works with Mongoose for database management, utilizes Socket.IO for real-time communication, and implements custom error handling classes for improved error management. Portfolio and personal blog of Abdulrahman Alidrisy.',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'Abdulrahman Alidrisy, full-stack developer, portfolio, blog, React, Node.js, JavaScript, TypeScript',
      author: 'Abdulrahman Alidrisy'
    },
  },
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DocumentMeta {...meta}>
      <App />
    </DocumentMeta>
  </React.StrictMode>
);
