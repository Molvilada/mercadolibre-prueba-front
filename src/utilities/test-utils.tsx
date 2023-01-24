import React from "react";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import store from "../store/configureStore";

const Providers = ({ children }: any) => (
  <Provider store={store}>{children}</Provider>
);

export * from "@testing-library/react";

Providers.propTypes = { children: PropTypes.any };

export { Providers };
