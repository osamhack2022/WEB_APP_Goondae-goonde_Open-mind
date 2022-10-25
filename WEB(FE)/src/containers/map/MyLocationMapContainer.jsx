import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { CustomOverlayMap, Map, MapMarker } from 'react-kakao-maps-sdk';
import { useDispatch, useSelector } from 'react-redux';
import useGeolocation from '../../lib/hooks/useGeolocation';
import { search } from '../../modules/markers';
import { useNavigate } from 'react-router-dom';
import useDebouncedEffect from '../../lib/hooks/useDebouncedEffect';

const { kakao } = window;

const MyLocatinMapContainer = () => {
  const myLocation = useGeolocation();
  const navigate = useNavigate();
  const mapRef = useRef();
  const [info, setInfo] = useState();
  const geocoder = new kakao.maps.services.Geocoder();
  const dispatch = useDispatch();
  const { markers } = useSelector(({ markers }) => ({
    markers: markers.markers,
  }));
  console.log('markers', markers);
  const handleCenterChanged = (map) =>
    setInfo({
      center: {
        lat: map.getCenter().getLat(),
        lng: map.getCenter().getLng(),
      },
      level: map.getLevel(),
    });

  const searchAddrFromCoords = (coords, callback) => {
    geocoder.coord2RegionCode(coords.lng, coords.lat, callback);
  };

  const displayCenterInfo = (result, status) => {
    if (status === kakao.maps.services.Status.OK) {
      const re = result[0];
      console.log(re);
      const region1 = re.region_1depth_name
        .split('')
        .reverse()
        .slice(1)
        .reverse()
        .join('');
      const region2 = `${re.region_2depth_name}`;
      dispatch(search({ region1, region2 }));
    }
  };

  useEffect(() => {
    if (!myLocation.loaded) return;
    const map = mapRef.current;
    setInfo({
      center: { lat: map.getCenter().getLat(), lng: map.getCenter().getLng() },
      level: map.getLevel(),
    });
  }, [myLocation, mapRef.current]);

  useDebouncedEffect(
    () => {
      info && searchAddrFromCoords(info.center, displayCenterInfo);
    },
    2000,
    [info]
  );

  return (
    <Map
      center={myLocation.coordinates}
      isPanto={true}
      style={{ width: '100%', height: '100%' }}
      ref={mapRef}
      level={3}
      onCenterChanged={handleCenterChanged}
    >
      <CustomOverlayMap position={myLocation.coordinates}>
        <div className='text-blue-500 mt-3 label font-bold'>
          <span className='left'></span>
          <span className='center'>내위치</span>
          <span className='right'></span>
        </div>
      </CustomOverlayMap>
      <MapMarker position={myLocation.coordinates} />
      {markers &&
        markers.map((marker) => {
          const position = { lat: marker.y, lng: marker.x };
          console.log(position);
          return (
            <div key={marker.id}>
              <CustomOverlayMap
                key={marker.id}
                position={position}
                clickable={true}
              >
                <div className='text-black  mt-3 label font-bold'>
                  <span className='left'></span>
                  <span className='center'>{marker.name}</span>
                  <span className='right'></span>
                </div>
              </CustomOverlayMap>
              <MapMarker
                position={position}
                clickable={true}
                onClick={() => navigate(`/index/${marker.id}`)}
              />
            </div>
          );
        })}
    </Map>
  );
};
export default React.memo(MyLocatinMapContainer);
