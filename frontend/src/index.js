import React from "react";
import ReactDOM from "react-dom/client";
<<<<<<< HEAD
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
=======
>>>>>>> fba28f1927745d4e7ea5a9f5be5d999464fa178d
import { HelmetProvider } from "react-helmet-async";
import "@/index.css";
import App from "@/App";

<<<<<<< HEAD
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60_000,
      refetchOnWindowFocus: false,
    },
  },
});

=======
>>>>>>> fba28f1927745d4e7ea5a9f5be5d999464fa178d
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
<<<<<<< HEAD
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
=======
      <App />
>>>>>>> fba28f1927745d4e7ea5a9f5be5d999464fa178d
    </HelmetProvider>
  </React.StrictMode>,
);
