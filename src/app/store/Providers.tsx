'use client'

import { store } from "@/app/store";
import { Provider } from "react-redux";

interface Props {
  children: React.ReactNode;
}
export const Providers = ({ children }: Props) => {
  return (
    <div>
      <Provider store={store}>{children}</Provider>,
    </div>
  );
};
