import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/giphyReducer";

export default () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};
