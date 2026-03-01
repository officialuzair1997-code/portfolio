import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { store, persistor } from "./redux/store";
import AppRoutes from "./AppRoutes";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import Loader from "./common/loader/loader";

import { ThemeProvider } from "@material-tailwind/react";
import ErrorBoundary from "./ErrorBoundary";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <ThemeProvider>
      <ErrorBoundary>
        <Provider store={store}>
          <PersistGate loading={<Loader />} persistor={persistor}>
            <BrowserRouter>
              <React.Suspense fallback={<Loader />}>
                <AppRoutes />
              </React.Suspense>
            </BrowserRouter>
          </PersistGate>
        </Provider>
      </ErrorBoundary>
    </ThemeProvider>
  </StrictMode>
);
