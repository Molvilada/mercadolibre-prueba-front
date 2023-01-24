import React from "react";

import { Categories } from "../../types/types";

import "./Breadcrumb.scss";

type Props = {
  categories: Categories;
};

const Breadcrumb: React.FC<Props> = ({ categories }: Props) => {
  const text = categories
    ? categories.map((category) => (
        <span key={category.id}>{category.name}</span>
      ))
    : "";

  return <div className="Breadcrumb">{text}</div>;
};

export default Breadcrumb;
