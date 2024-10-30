// trendingReducer.js
const initialState = { trending: [], error: null };

export const trendingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TRENDING_SUCCESS':
      return { ...state, trending: action.payload };
    case 'FETCH_TRENDING_FAILURE':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
