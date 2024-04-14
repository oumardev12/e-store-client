import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Navbar } from "./components";
import { Home } from "./pages";
import { Suspense, lazy } from "react";

const Toasters = lazy(() => import("./components/toasters/Toasters"));

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
        <Suspense fallback={null}>
          <Toasters />
        </Suspense>
        <ReactQueryDevtools position="bottom-left" />
      </QueryClientProvider>
    </>
  );
};

export default App;
