import { Map, MapMarker } from 'react-kakao-maps-sdk';
import useGeolocation from '../../lib/hooks/useGeolocation';

const MyLocatinMapContainer = () => {
  const myLocation = useGeolocation();

  return (
    <Map
      center={myLocation.coordinates}
      isPanto={true}
      style={{ width: '100%', height: '100%' }}
      level={3}
    >
      <MapMarker position={myLocation.coordinates} />
    </Map>
  );
};
export default MyLocatinMapContainer;
