import React from "react";
import { GridTile } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import StarBorder from "material-ui/svg-icons/toggle/star-border";
import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "../actions/giphyActions";

const Giph = ({ type, attr, action, addFavorite, removeFavorite }) => {
  const { url } = attr.images.original;
  let value;
  let myDispatchAction;

  if (type === "perpendicular") {
    value = "Add Favorite --->";
    myDispatchAction = addFavorite;
  } else {
    value = "Remove Favorite --->";
    myDispatchAction = removeFavorite;
  }

  const performDealFavorite = () => myDispatchAction(attr);

  return (
    <GridTile
      key={url}
      title={value}
      actionIcon={
        <IconButton onClick={performDealFavorite}>
          <StarBorder color="white" />
        </IconButton>
      }
    >
      <img src={url} alt="" />
    </GridTile>
  );
};

export default connect(() => ({}), { addFavorite, removeFavorite })(Giph);
