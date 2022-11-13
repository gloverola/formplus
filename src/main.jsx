import React from "react";
import ReactDOM from "react-dom/client";
import { QueryCache, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "styled-components";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { SkeletonTheme } from "react-loading-skeleton";
import App from "./App";
import "./assets/fonts/CircularStd-Book.ttf";
import "./styles/fonts.css";
import store from "./redux/store";
import theme from "./styles/theme";
import BasedStyles from "./styles/GlobalStyle";

let persistor = persistStore(store);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: true,
      retry: false,
    },
  },
  queryCache: new QueryCache({
    onError: (error) => toast.error(`Something went wrong: ${error.message}`),
  }),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Toaster
          containerStyle={{
            display: "flex",
            margin: 0,
            padding: 0,
            borderRadius: "10px",
            zIndex: 35000,
          }}
          toastOptions={{
            className: "toast",
            duration: 6000,
            style: {
              padding: "10px",
              color: "#000",
              fontSize: "14px",
              fontWeight: "600",
              margin: 0,
              borderRadius: "4px",
              zIndex: 35000,
              width: "100%",
              height: "50px",
            },
            success: {
              style: {
                background: "#E6F7E6",
                color: "#00AC00",
                border: "1px solid #00AC00",
              },
            },
            error: {
              style: {
                background: "#FFE6E6",
                color: "#FF0000",
                border: "1px solid #FF0000",
              },
            },
          }}
          position="top-right"
        />
        <ThemeProvider theme={theme}>
          <BasedStyles />
          <QueryClientProvider client={queryClient}>
            <SkeletonTheme baseColor="#ddd" highlightColor="#eee">
              <App />
            </SkeletonTheme>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
