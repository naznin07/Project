import React, { useEffect } from "react";
import axios from "axios";

export default function Weather(props) {
  useEffect(() => {
    const apiKey = "a867e25f2d83db579421a57fd8e937ec"; // API key should be a string
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;

    function handleResponse(response) {
      alert(
        `The weather in ${response.data.city.name} is ${response.data.list[0].main.temp} °C`
      );
    }

    axios.get(apiUrl).then(handleResponse);
  }, [props.city]);

  return <h2>Hello from Weather</h2>;
}
</html>

