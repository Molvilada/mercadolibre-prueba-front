import React from "react";
import { Provider } from "react-redux";
import store from "./configureStore";

type Props = {
  children: JSX.Element;
};

const CustomProvider: React.FC<Props> = ({ children }: Props) => (
  <Provider store={store}>{children}</Provider>
);

export default CustomProvider;
