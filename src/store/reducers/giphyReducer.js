const initialState = {
  user: { name: "Esmery", workPlace: "Flatiron School" },
  giphies: [],
  favorites: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "ADD_GIPHIES":
      return { ...state, giphies: action.payload };
    case "ADD_FAVORITE":
      let addingFavorites = [...state.favorites, action.payload];
      debugger;
      return { ...state, favorites: addingFavorites };
    case "REMOVE_FAVORITE":
      const removingFavorites = state.favorites.filter(
        giph => giph.id !== action.payload.id
      );
      return { ...state, favorites: removingFavorites };
    default:
      return state;
  }
}
