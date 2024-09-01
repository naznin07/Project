import React from "react";

import "./Temperature.css";

export default class Temperature extends React.Component {
  render = () => {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-11">
            <div className="card p-4">
              <div className="search-container mb-3">
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Enter city name"
                    className="form-control"
                  />
                  <button className="btn btn-primary">Search</button>
                </div>
              </div>
              <div className="temperature text-left">
                <h1>New York</h1>
                <div className="list-styled-none">
                  Thursday 10:00, Sunny<div> Humidity: 90%, Wind: 13 km/h</div>
                </div>
                <div className="weather d-flex align-items-center justify-content-left">
                  <div>
                    {" "}
                    <img
                      src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/130/207/original/clear.png?1719194897"
                      alt="Sunny"
                      className="me-2"
                    />
                    <div>
                      <strong className="display-5text-left">19</strong>
                      <span className="units ms-2text-left">
                        <a href="/">°C</a> | <a href="/">°F</a>
                      </span>
                      <div className="week-forecast mt-4">
                        <div className="row text-center">
                          <div className="col">
                            <div className="p-3">Mon</div>
                            <div className="figure">
                              <img
                                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/130/211/original/mist.png?1719194929"
                                alt="Mist"
                                className="image"
                              />
                              <div>20° 10°</div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="p-3">Tue</div>
                            <div className="figure">
                              <img
                                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/130/208/original/clouds.png?1719194909"
                                alt="Cloud"
                                className="image"
                              />
                              <div>18° 10°</div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="p-3">Wed</div>
                            <div className="figure">
                              <img
                                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/130/207/original/clear.png?1719194897"
                                alt="Sunny"
                                className="image"
                              />
                              <div>18° 10°</div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="p-3">Thu</div>
                            <div className="figure">
                              <img
                                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/130/209/original/drizzle.png?1719194917"
                                alt="Rainy"
                                className="image"
                              />
                              <div>19° 12°</div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="p-3">Fri</div>
                            <div className="figure">
                              <img
                                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/130/211/original/mist.png?1719194929"
                                alt="Mist"
                                className="image"
                              />
                              <div>21° 14°</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}
