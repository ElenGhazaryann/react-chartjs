import React, { useState } from "react";
import WorldMap from "https://cdn.skypack.dev/react-world-map@2.3.0";
import "./MapComp.css";
function MapComp() {
  const [selected, onSelect] = useState("na");

  return (
    <div className="map-wrapper">
      <div>
        <p>Geographic Data</p>
        <select>
          <option>Last month</option>
        </select>
      </div>
      <WorldMap selected={selected} onSelect={onSelect} />
      <ol>
        <li>United States 200</li>
        <li>China 65</li>
        <li>United Kingdom 22</li>
      </ol>
    </div>
  );
}

export default MapComp;
