import React, { useEffect, useState } from "react";
import { getItemInfo } from "../../utilities/services";
import { priceFormat } from "../../utilities/funcUtilities";
import { useSelector } from "react-redux";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useLocation } from "react-router-dom";
import "./ProductDetail.scss";
import Loading from "../../components/Loading/Loading";
import { InitialState, Categories, Item } from "../../types/types";

const ProductDetail: React.FC<{}> = () => {
  const bestCategory = useSelector((state: InitialState) => state.bestCategory);
  const categories = useSelector((state: InitialState) => state.categories);
  const [categoriesItem, setCategoriesItem] = useState<Categories>([]);
  const [itemInfo, setItemInfo] = useState<Item>();
  const id = useLocation().pathname.split("/").pop();

  useEffect(() => {
    getItemInfo(id!).then((res) => {
      setItemInfo(res.item);
      if (
        bestCategory.length > 0 &&
        !bestCategory.some((cat) => cat.id === res.item.category_id)
      ) {
        const categoryItem = categories.filter(
          (cat) => cat.id === res.item.category_id
        );
        setCategoriesItem(
          categoryItem.length > 0 ? categoryItem : bestCategory
        );
      } else {
        setCategoriesItem(bestCategory);
      }
    });
  }, [bestCategory, categories, id]);

  return (
    <>
      {itemInfo ? (
        <>
          <Breadcrumb categories={categoriesItem} />
          <Grid className="ProductDetail basicContainer" container>
            <Grid item xs={8}>
              <div className="productImg">
                <img src={itemInfo.picture} alt="" />
              </div>
            </Grid>
            <Grid item xs={4} style={{ paddingLeft: "3rem" }}>
              <p className="selled">
                {itemInfo.condition === "new" ? "Nuevo" : "Usado"} -{" "}
                {itemInfo.sold_quantity} vendidos
              </p>
              <h2 className="title">{itemInfo.title}</h2>
              <h1 className="price">{priceFormat(itemInfo.price?.amount)}</h1>
              <Button variant="contained" size="large" fullWidth>
                Comprar
              </Button>
            </Grid>
            <Grid item xs={8} className="description">
              <h2>Descripción del producto</h2>
              <p>{itemInfo.description}</p>
            </Grid>
          </Grid>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default ProductDetail;
