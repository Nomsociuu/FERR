import axios from 'axios';

export const fetchLatest = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:5000/latest');
    dispatch({ type: 'FETCH_LATEST_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_LATEST_FAILURE', payload: error.message });
  }
};
