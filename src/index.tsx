import { createRoot } from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { queryStaleTime } from "config";

import App from "./App";

import "./i18n.ts";


const container = document.getElementById("root")!;
const root = createRoot(container);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: queryStaleTime,
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
