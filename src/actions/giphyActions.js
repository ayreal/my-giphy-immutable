import GiphyAdapter from "../adapters/giphyAdapter";

export function fetchGiphies(params) {
  return dispatch => {
    GiphyAdapter.search(params).then(giphyData => {
      dispatch({ type: "ADD_GIPHIES", payload: giphyData.data });
    });
  };
}

export function addFavorite(params) {
  return dispatch => {
    dispatch({ type: "ADD_FAVORITE", payload: params });
  };
}

export function removeFavorite(params) {
  return dispatch => {
    dispatch({ type: "REMOVE_FAVORITE", payload: params });
  };
}
