// trendingServices.js
import axios from "axios";

export const fetchTrending = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:5000/trending");
    dispatch({ type: "FETCH_TRENDING_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "FETCH_TRENDING_FAILURE", payload: error });
  }
};
