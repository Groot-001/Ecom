"use client";

import { store } from "@/store/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      {children}
      <ToastContainer />
    </Provider>
  );
}
