import Container from "@mui/material/Container";
import React from "react";

type Props = {
  children: JSX.Element;
};

const BasicLayout: React.FC<Props> = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default BasicLayout;
