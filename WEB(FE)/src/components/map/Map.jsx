import styled from 'daisyui/dist/styled';
import { useEffect, useState } from 'react';

const { kakao } = window;
const Map = () => {
  const [map, setMap] = useState(null);

  //처음 지도 그리기
  useEffect(() => {
    const container = document.getElementById('map');
    const options = { center: new kakao.maps.LatLng(33.450701, 126.570667) };
    const kakaoMap = new kakao.maps.Map(container, options);
    setMap(kakaoMap);
  }, []);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        paddingTop: '4rem',
        display: 'inline-block',
        marginLeft: '5px',
        marginRight: '5px',
      }}
    >
      <div id='map' style={{ width: '99%', height: '500px' }}></div>
    </div>
  );
};
export default Map;
