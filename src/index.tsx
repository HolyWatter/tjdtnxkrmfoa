import Router from "Router";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const $root = document.getElementById("root");

const queryClient = new QueryClient();

if ($root?.hasChildNodes()) {
  ReactDOM.hydrateRoot(
    $root,
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <Router />
        </RecoilRoot>
      </QueryClientProvider>
    </HelmetProvider>
  );
} else {
  root.render(
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <Router />
        </RecoilRoot>
      </QueryClientProvider>
    </HelmetProvider>
  );
}
