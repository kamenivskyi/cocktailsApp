import { createRoot } from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import App from "./App";

import "./i18n.ts";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const container = document.getElementById("root")!;
const root = createRoot(container);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

root.render(
  <Router>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </Router>
);
