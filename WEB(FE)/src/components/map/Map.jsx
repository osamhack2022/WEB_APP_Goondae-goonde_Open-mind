import { useEffect, useState } from 'react';
import { MapInfoWindow } from 'react-kakao-maps-sdk';

const { kakao } = window;

const Map = ({ input }) => {
  const [map, setMap] = useState(null);

  //처음 지도 그리기
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const kakaoMap = new kakao.maps.Map(container, options);
    const ps = new kakao.maps.services.Places();
    ps.keywordSearch('입력 값', placesSearchCB);

    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        let bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        map.setBounds(bounds);
      }
    }

    function displayMarker(place) {
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });
    }
    setMap(kakaoMap);
  }, []);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'inline-block',
        marginLeft: '5px',
        marginRight: '5px',
      }}
    >
      <div id='map' style={{ width: '99%', height: '100%' }}></div>
    </div>
  );
};
export default Map;
