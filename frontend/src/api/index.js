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
