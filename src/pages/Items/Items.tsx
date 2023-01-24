import React, { useMemo } from "react";
import Grid from "@mui/material/Grid";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useSelector } from "react-redux";
import Loading from "../../components/Loading/Loading";
import { selectBestCategory, selectItems } from "../../store/selectors";

const Items: React.FC<{}> = () => {
  const items = useSelector(selectItems);
  const bestCategory = useSelector(selectBestCategory);

  const itemsList = useMemo(
    () =>
      items.map((item: any, index: number) => (
        <ProductCard
          key={item.id}
          id={item.id}
          image={item.picture}
          price={item.price.amount}
          title={item.title}
          address={item.address}
          last={index === items.length - 1 ? true : false}
        />
      )),
    [items]
  );

  return (
    <>
      {items.length > 0 ? (
        <>
          <Breadcrumb categories={bestCategory} />
          <Grid className="Items basicContainer" container>
            {itemsList}
          </Grid>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Items;
