import { Map, MapMarker } from 'react-kakao-maps-sdk';
import './MapPage.css';
import { useEffect, useState } from 'react';

export const MapPage = () => {
  const [location, setLocation] = useState({ lat: 33.450705, lng: 126.570667 });
  const [markers, setMarkers] = useState([]);

  /**
   * 현재 위치를 가져와서 지도 중심과 마커를 설정하는 useEffect
   */
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setMarkers([
          {
            position: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
            isOpen: true,
          },
        ]);
      });
    }
  }, []);

  //마커 추가 함수
  const addMarker = (_target, mouseEvent) => {
    setMarkers((prev) => [
      ...prev,
      {
        position: {
          lat: mouseEvent.latLng.getLat(),
          lng: mouseEvent.latLng.getLng(),
        },
        isOpen: true,
      },
    ]);
  };

  //마커 오버레이 토글 함수
  const toggleMarkerInfo = (index) => {
    setMarkers((prev) =>
      prev.map((m, i) => (i === index ? { ...m, isOpen: !m.isOpen } : m)),
    );
  };

  return (
    <Map className="map" center={location} onClick={addMarker}>
      {markers.map((marker, index) => (
        <MapMarker
          key={`${index}-${marker.position.lat}-${marker.position.lng}`}
          position={marker.position}
          removable={true}
          onClick={() => {
            toggleMarkerInfo(index);
          }}
        >
          {marker.isOpen && (
            <div
              style={{
                width: '140px',
                height: '100%',
                display: 'flex',
                flex: '1 1 auto',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '5px',
              }}
            >
              <div>{index}번 마커입니다.</div>
              <div
                onClick={() => {
                  toggleMarkerInfo(index);
                }}
              >
                X
              </div>
            </div>
          )}
        </MapMarker>
      ))}
    </Map>
  );
};
