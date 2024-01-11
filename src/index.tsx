import Router from "Router";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const $root = document.getElementById("root");

const queryClient = new QueryClient();

if ($root?.hasChildNodes()) {
  ReactDOM.hydrateRoot(
    $root,
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </QueryClientProvider>
  );
} else {
  root.render(
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </QueryClientProvider>
  );
}
