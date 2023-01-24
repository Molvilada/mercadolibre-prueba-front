import React from "react";
import Grid from "@mui/material/Grid";
import "./ProductCard.scss";
import { useNavigate } from "react-router-dom";
import { priceFormat } from "../../utilities/funcUtilities";
import shipping from "../../assets/images/ic_shipping.webp";

type Props = {
  id: string;
  image: string;
  price: number;
  title: string;
  address: string;
  last: boolean;
};

const ProductCard: React.FC<Props> = ({
  id,
  image,
  price,
  title,
  address,
  last,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/items/${id}`);
  };
  return (
    <Grid container className="ProductCard" onClick={handleClick}>
      <Grid item xs="auto">
        <div className="productImg">
          <img src={image} alt={`${title}--img`}></img>
        </div>
      </Grid>
      <Grid item xs style={{ paddingTop: "1rem", paddingLeft: "1rem" }}>
        <div className="priceShipping">
          <h2>{priceFormat(price)}</h2>
          <img src={shipping} alt="shipping" />
        </div>
        <h3>{title}</h3>
      </Grid>
      <Grid
        item
        xs={2}
        style={{ paddingTop: "2rem", paddingLeft: "1rem", fontSize: "0.85rem" }}
        className="address"
      >
        {address}
      </Grid>
      {!last && (
        <Grid item xs={12}>
          <hr />
        </Grid>
      )}
    </Grid>
  );
};

export default ProductCard;
