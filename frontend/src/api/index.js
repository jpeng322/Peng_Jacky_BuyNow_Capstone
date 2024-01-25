import axios from "axios";

export const getCartItems = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/cart/cartitems/65b185a1aa4c82ec63242af6`
    );

    if (response) {
      console.log(response);
      return response.data;
    }
  } catch (error) {
    return error;
  }
};

export const getProducts = async () => {
  const options = {
    method: "GET",
    url: "https://real-time-product-search.p.rapidapi.com/search",
    params: {
      q: "Nike shoes",
      country: "us",
      language: "en",
    },
    headers: {
      "X-RapidAPI-Key": "6a627a9ed8msh2bb20f864871adcp1e222ajsnff6215037e1c",
      "X-RapidAPI-Host": "real-time-product-search.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    // console.log(response.data);
    const data = response.data.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};
