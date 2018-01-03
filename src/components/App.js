import React from "react";
import Form from "./Form";
import GiphCollection from "./GiphCollection";
import AppBar from "material-ui/AppBar";
import Divider from "material-ui/Divider";

import SvgIcon from "material-ui/SvgIcon";
import "./App.css";

const iconStyles = {
  marginRight: 24,
  marginTop: 10
};

const HomeIcon = props => (
  <SvgIcon {...props}>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </SvgIcon>
);

const App = () => {
  return (
    <div className="gradient">
      <AppBar
        iconElementLeft={<HomeIcon style={iconStyles} color={"#E0F7FA"} />}
        title="My Giphy Search"
      />
      <Form />
      <div className="gifCollection">
        <GiphCollection action="perpendicular" />
      </div>
      <Divider />
      <div className="gifCollection">
        <div>
          <h1 className="font">Favorites:</h1>
        </div>
        <GiphCollection action="horizontal" />
      </div>
    </div>
  );
};

export default App;
