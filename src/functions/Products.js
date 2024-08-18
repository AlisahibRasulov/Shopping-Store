import axios from "axios";
import { BASE_URL } from "../base/base_url";

export const getProductData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/products`);
      return Promise.resolve(response.data );
    } catch (error) {
      return Promise.resolve( null );
    }
  };
  