import React from "react";
import Giph from "./Giph";
import { connect } from "react-redux";
import { GridList } from "material-ui/GridList";

const pStyles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: "auto"
  }
};

const hStyles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  gridList: {
    display: "flex",
    flexWrap: "nowrap",
    overflowX: "auto"
  },
  titleStyle: {
    color: "rgb(0, 188, 212)"
  }
};

const GiphCollection = ({ giphies, favorites, action }) => {
  const renderGiphs = (giph, id) => <Giph key={id} attr={giph} type={action} />;

  const renderHorrizontalDisplay = () => (
    <div style={hStyles.root}>
      <GridList style={hStyles.gridList} cols={0.5}>
        {favorites.map(renderGiphs)}
      </GridList>
    </div>
  );

  const renderPerpendicularDisplay = () => (
    <div style={pStyles.root}>
      <GridList cellHeight={180} style={pStyles.gridList}>
        {giphies.map(renderGiphs)}
      </GridList>
    </div>
  );

  return (
    <div>
      {action === "perpendicular"
        ? renderPerpendicularDisplay()
        : renderHorrizontalDisplay()}
    </div>
  );
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(GiphCollection);
