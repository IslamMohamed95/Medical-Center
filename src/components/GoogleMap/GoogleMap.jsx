// src/components/GoogleMap.jsx
import { GoogleMap, useLoadScript, OverlayView } from "@react-google-maps/api";
import { useMemo, useRef, useCallback } from "react";
import logo from "../../assets/Logo/logo.webp";
import "./GoogleMap.css";

const containerStyle = {
  borderRadius: "1rem",
  overflow: "hidden",
  position: "relative",
};

function GoogleMapComponent({
  center = { lat: 29.07725, lng: 31.09619 },
  zoom = 16,
  logoUrl = logo,
}) {
  const mapRef = useRef(null);
  const libraries = useMemo(() => ["places"], []);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey:
      process.env.REACT_APP_GOOGLE_MAPS_API_KEY ||
      "AIzaSyDfQzdyz8vASyrTbUTrLU-R5IsYZuourI4",
    libraries,
  });

  const mapCenter = useMemo(() => center, [center]);

  const handleMapClick = useCallback(() => {
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapCenter.lat},${mapCenter.lng}`;
    window.open(mapsUrl, "_blank", "noopener,noreferrer");
  }, [mapCenter]);

  const mapOptions = useMemo(
    () => ({
      disableDefaultUI: false,
      zoomControl: true,
      zoomControlOptions: {
        position: window.google?.maps?.ControlPosition?.RIGHT_BOTTOM,
      },
      styles: [
        {
          featureType: "poi",
          stylers: [{ visibility: "off" }],
        },
      ],
    }),
    []
  );

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <div style={containerStyle} className="map-container">
      <GoogleMap
        ref={mapRef}
        mapContainerStyle={{ width: "100%", height: "100%" }}
        center={mapCenter}
        zoom={zoom}
        onClick={handleMapClick}
        options={mapOptions}
      >
        <OverlayView
          position={mapCenter}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        >
          <div className="rotating-marker" style={{ pointerEvents: "none" }}>
            <img src={logoUrl} alt="Marker" className="rotating-logo" />
          </div>
        </OverlayView>
      </GoogleMap>
    </div>
  );
}

export default GoogleMapComponent;
