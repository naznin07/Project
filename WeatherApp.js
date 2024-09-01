import React from "react";

import Temperature from "./Temperature";

export default class WeatherApp extends React.Component {
  render = () => {
    return (
      <div>
        <Temperature />
      </div>
    );
  };
}
