import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./Router";
import { QueryClient, QueryClientProvider, useQueryClient } from "react-query";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();
root.render(
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  </QueryClientProvider>
);
