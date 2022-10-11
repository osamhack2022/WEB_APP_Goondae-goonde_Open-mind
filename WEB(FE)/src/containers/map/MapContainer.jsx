import { useEffect } from 'react';
import { useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import useGeolocation from '../../lib/hooks/useGeolocation';
const { kakao } = window;
const MapContainer = ({ searchAddress, mine }) => {
  const myLocation = useGeolocation();
  const [state, setState] = useState({
    // 지도의 초기 위치
    center: { lat: 37.49676871972202, lng: 127.02474726969814 },
    // 지도 위치 변경시 panto를 이용할지(부드럽게 이동)
    isPanto: true,
  });

  const [positions, setPosition] = useState([]);
  useEffect(() => {
    myLocation.loaded &&
      setPosition([
        ...positions,
        { lat: myLocation.coordinates.lat, lng: myLocation.coordinates.lng },
      ]);
  }, [myLocation]);

  const geocoder = new kakao.maps.services.Geocoder();
  let callback = function (result, status) {
    if (status === kakao.maps.services.Status.OK) {
      const newSearch = result[0];
      setState({
        center: { lat: newSearch.y, lng: newSearch.x },
      });
      setPosition([...positions, { lat: newSearch.y, lng: newSearch.x }]);
    }
  };
  useEffect(() => geocoder.addressSearch(`${searchAddress}`, callback), []);

  return (
    <Map
      center={state.center}
      isPanto={state.isPanto}
      style={{ width: '100%', height: '100%' }}
      level={3}
    >
      {positions &&
        positions.map((position, index) => (
          <MapMarker key={index} position={position} />
        ))}
    </Map>
  );
};

export default MapContainer;
