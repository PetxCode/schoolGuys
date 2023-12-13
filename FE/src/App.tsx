import { RouterProvider } from "react-router-dom";
import { Router } from "./Router/Router";
import { Provider } from "react-redux";
import { store } from "./global/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { getURL } from "./API/authApi";

const client = new QueryClient();
function App() {
  let persistor = persistStore(store);

  useEffect(() => {
    getURL();
  }, []);
  return (
    <>
      <QueryClientProvider client={client}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <RouterProvider router={Router} />
          </PersistGate>
        </Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;
