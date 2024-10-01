import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@fontsource/rubik";
import "@fontsource/rubik/400.css";
import "@fontsource/rubik/400-italic.css";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
const reactQuery = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={reactQuery}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
