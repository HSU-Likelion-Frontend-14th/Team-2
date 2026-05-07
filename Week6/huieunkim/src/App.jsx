import "./App.css";
import { useState, useEffect } from "react";
import { Map, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";
import MakerIcon from "./assets/markerIcon.svg";

export default function App() {
  const [center, setCenter] = useState({
    lat: 37.5828483,
    lng: 127.0105811,
  });

  const [markers, setMarkers] = useState([]);
  const [activeMarkerId, setActiveMarkerId] = useState(null);

  const [markerSequence, setMarkerSequence] = useState(1);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCenter({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (err) => console.error("위치 정보를 가져올 수 없습니다.", err),
      );
    }
  }, []);

  const handleMapClick = (_target, mouseEvent) => {
    const newMarker = {
      id: crypto.randomUUID(),
      position: {
        lat: mouseEvent.latLng.getLat(),
        lng: mouseEvent.latLng.getLng(),
      },
      content: `${markerSequence}번째 마커입니다`,
    };

    setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
    setMarkerSequence((prev) => prev + 1);
  };

  const handleDeleteMarker = (e, targetId) => {
    e.stopPropagation();
    setMarkers((prevMarkers) =>
      prevMarkers.filter((marker) => marker.id !== targetId),
    );
    setActiveMarkerId(null);
  };

  return (
    <div className="container">
      <Map
        center={center}
        className="map-area"
        level={3}
        onClick={handleMapClick}
      >
        {markers.map((marker) => (
          <div key={marker.id}>
            <MapMarker
              position={marker.position}
              onClick={() => setActiveMarkerId(marker.id)}
              image={{
                src: MakerIcon,
                size: { width: 35, height: 35 },
              }}
            />

            {activeMarkerId === marker.id && (
              <CustomOverlayMap
                position={marker.position}
                yAnchor={1.6}
                clickable={true}
              >
                <div className="overlay-wrapper">
                  <span>{marker.content}</span>

                  <button
                    className="delete-btn"
                    onClick={(e) => handleDeleteMarker(e, marker.id)}
                  >
                    삭제
                  </button>

                  <button
                    className="close-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveMarkerId(null);
                    }}
                  >
                    X
                  </button>
                </div>
              </CustomOverlayMap>
            )}
          </div>
        ))}
      </Map>
    </div>
  );
}
