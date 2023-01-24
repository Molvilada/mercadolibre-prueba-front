import axios from "axios";
import { bestCategory } from "./funcUtilities";

export const getItems = async (searchParams) => {
  const { data, status } = await axios.get(
    "https://api.mercadolibre.com/sites/MLA/search",
    {
      params: { q: searchParams },
    }
  );
  if (status >= 400) {
    throw new Error("Error pidiendo items");
  }
  let categories =
    data.filters.length > 0
      ? data.filters[0].values
      : data.available_filters.find((x) => x.id === "category").values;
  let items = data.results.slice(0, 4).map((item) => {
    return {
      id: item.id,
      title: item.title,
      price: {
        currency: item.installments.currency_id,
        amount: item.price,
        decimals: 0, //TODO: Preguntar cuál valor es decimals
      },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
      address: item.address.state_name,
    };
  });
  const response = {
    author: {
      name: "Laura Daniela",
      lastname: "Molina Villar",
    },
    categories,
    items,
    bestCategory:
      data.filters.length > 0
        ? data.filters[0].values[0].path_from_root
        : bestCategory(categories),
  };
  return response;
};

export const getItemInfo = async (id) => {
  const [
    { data: item, status: itemStatus },
    { data: description, status: descriptionStatus },
  ] = await Promise.all([
    axios.get(`https://api.mercadolibre.com/items/${id}`),
    axios.get(`https://api.mercadolibre.com/items/${id}/description`),
  ]);

  if (itemStatus >= 400 || descriptionStatus >= 400) {
    throw new Error("Error información del item");
  }

  const response = {
    author: {
      name: "Laura Daniela",
      lastname: "Molina Villar",
    },
    item: {
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: item.price,
        decimals: 0, // TODO: preguntar decimals aqui también
      },
      picture: item.secure_thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
      sold_quantity: item.sold_quantity,
      description: description.plain_text,
      category_id: item.category_id,
    },
  };
  console.log(response);

  return response;
};
