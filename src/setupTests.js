import "@testing-library/jest-dom";
import * as redux from "react-redux";
import { state } from "./mocks/state";

export const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
  useLocation: () => jest.fn(),
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => jest.fn(),
}));

global.beforeEach(() => {
  const spy = jest.spyOn(redux, "useSelector");
  spy
    .mockReturnValueOnce([...state.items])
    .mockReturnValueOnce([...state.bestCategory]);
});
