import logo from "./logo.svg";

import { useCallback, useState } from "react";
import { Geolocation } from "@capacitor/geolocation";

function App() {
  const [loc, setLoc] = useState(null);

  const getCurrentPosition = useCallback(async () => {
    const coordinates = await Geolocation.getCurrentPosition();
    setLoc(coordinates);
  }, []);

  return (
    <div>
      <h1 class="text-3xl font-bold underline"> Hello reservir! </h1>;
      <div>
        <h1>Geolocation</h1>
        <p>Your location is:</p>
        <p>Latitude: {loc?.coords.latitude}</p>
        <p>Longitude: {loc?.coords.longitude}</p>

        <button onClick={getCurrentPosition}>Get Current Location</button>
      </div>
    </div>
  );
}

export default App;
