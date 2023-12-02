import React, { useEffect, useState } from "react";
import "./tempApp.css";
const TempApp = () => {
  const [search, setSearch] = useState("Peshawar");
  const [city, setCity] = useState("Peshawar");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=af7144711437f75bdb95d410192fe6bf`;
      const respose = await fetch(url);
      const data = await respose.json();
      // console.log(data);
      setCity(data.main);
    };
    fetchApi();
  }, [search]);
  return (
    <div className="box">
      <div className="inputdata">
        <input
          type="search"
          placeholder="Search City"
          className="inputField"
          onChange={(val) => setSearch(val.target.value)}
        />
      </div>
      {!city ? (
        <p>City Not Found</p>
      ) : (
        <div className="info">
          <h1 className="icon">
            <i className="fa-solid fa-street-view "></i> {search}
          </h1>

          <h2 style={{ marginTop: "-15px" }}>{city.temp}°C</h2>
          <p style={{ marginTop: "-15px", color: "gray" }}>
            min: {city.temp_min} °C | max:{city.temp_max} °C
          </p>
        </div>
      )}
    </div>
  );
};

export default TempApp;
