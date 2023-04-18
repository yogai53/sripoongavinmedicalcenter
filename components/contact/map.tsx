import React from "react";
import loader from "@/lib/googleMapsLoader";

declare global {
  interface Window {
    google: any;
  }
}

const Map = ({ address }: { address: string }) => {
  const [map, setMap] = React.useState(null);
  React.useEffect(() => {
    loader.load().then(() => {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address }, (results: any, status: any) => {
        if (status === "OK") {
          const mapOptions = {
            center: results[0].geometry.location,
            zoom: 16,
          };
          const newMap = new window.google.maps.Map(
            document.getElementById("map"),
            mapOptions
          );
          const marker = new window.google.maps.Marker({
            position: results[0].geometry.location,
            map: newMap,
          });
          setMap(newMap);
        }
      });
    });
  }, [address]);

  return (
    <div id="map" style={{ height: "400px" }}>
      asdasd
    </div>
  );
};
export default Map;
