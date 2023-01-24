import { Categories } from "../types/types";

export const bestCategory = (categories: Categories): Categories => {
  return [
    categories.reduce((prev, curr) => {
      if (prev.results! > curr.results!) {
        return prev;
      } else {
        return curr;
      }
    }),
  ];
};

export const priceFormat = (price: number): JSX.Element => {
  const priceFormat = new Intl.NumberFormat("de-DE").format(price);
  const intAndDecimals = priceFormat.split(",");
  return (
    <>
      $ {intAndDecimals[0]}
      <span className="decimals">
        {intAndDecimals.length > 1 ? intAndDecimals[1] : "00"}
      </span>
    </>
  );
};
