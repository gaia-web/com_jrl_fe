import React from "react";
import "./App.css";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

function App() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "YOUR_API_KEY",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div className="App">
      {/* <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        Child components, such as markers, info windows, etc.
        <></>
      </GoogleMap> */}
      <div style={{ width: "100%", display: "flex" }}>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div data-ux="Element">Contact Us</div>
          <div data-ux="Element">JRL Shuttle Services </div>
          <div data-ux="Element">
            110-309 Fairmont Drive Saskatoon SK S7M 5G7{" "}
          </div>
          <div data-ux="Element">adm.jrlshuttleservices@gmail.com </div>
          <div data-ux="Element">306-975-2222 306-220-5444 </div>
        </div>
        <iframe
          // width="100%"å
          // height="600"
          scrolling="no"
          loading="lazy"
          frameBorder="0"
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
            maxHeight: 600,
            minHeight: 400
          }}
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=110-309%20Fairmont%20Drive%20Saskatoon%20SK%20S7M%205G7+(JRL%20Shuttle%20Services)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.maps.ie/population/">Find Population on Map</a>
        </iframe>
      </div>
    </div>
  ) : (
    <>loading</>
  );
}

export default App;
