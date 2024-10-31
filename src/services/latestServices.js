import axios from 'axios';

export const fetchLatest = () => async (dispatch) => {
  try {
    const response = await axios.get('https://my-json-server.typicode.com/nomsociuu/FERR/latest');
    dispatch({ type: 'FETCH_LATEST_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_LATEST_FAILURE', payload: error.message });
  }
};
