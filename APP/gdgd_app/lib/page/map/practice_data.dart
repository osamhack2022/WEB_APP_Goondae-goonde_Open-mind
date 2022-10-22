import 'custom_class/location_class.dart';
import 'custom_class/marker_class.dart';
import 'custom_class/store_class.dart';

class PracticeData {
  static final List<StoreType> myStores = [
    Cafe(
      snsLink: "http://www.instagram.com/little_victory_sweets",
      phoneNumber: "0507-1408-1429",
      address: "서울 마포구 연희로1길 41",
      detailInfo: "파티쉐와 요리사부부가 운영하는 연남동에 위치한 작은 디저트카페입니다.",
      uid: "1",
      storeName: "리틀빅토리",
      location: LocationClass(latitude: 37.560746, longitude: 126.925701),
    ),
    Cafe(
      detailInfo: "파리가 사랑하는 여우,프랑스에서 가장 핫한 디저트 브랜드 얀 쿠브레입니다.",
      address: "서울 마포구 양화로21길 23",
      phoneNumber: "02-322-4469",
      snsLink: "https://www.instagram.com/yanncouvreur_kr/",
      uid: "2",
      storeName: "얀 쿠브레",
      location: LocationClass(latitude: 37.559271, longitude: 126.924679),
    ),
    Restaurant(
      uid: "3",
      address: "서울 마포구 동교로38길 33-21 2층",
      detailInfo: "설명 미쁘동은 단맛과 찰기가 우수한 고시히카리 품종으로 밥을 짓고 매일 아침 성게알을 비롯한 신선한 해산물을 받아 손질합니다. 또한 양질의 가다랑어포 등을 넣어 끓인 전통 방식 간장을 곁들여 식탁 위 그릇에 건강함을 담았습니다.",
      phoneNumber: "0507-1350-1881",
      snsLink: "http://pf.kakao.com/_SxfBCT",
      storeName: "미쁘동",
      location: LocationClass(latitude: 37.562138, longitude: 126.926221),
    ),
    Restaurant(
      address: "서울 마포구 동교로38길 35",
      phoneNumber: "02-335-7472",
      snsLink: "http://www.instagram.com/souvenir0_0/",
      uid: "4",
      detailInfo: "연남동에 위치한 유러피안 비스트로 수부니흐입니다. 수부니흐는 souvenir의 프랑스 발음으로 추억, 기억이라는 뜻을 가진 이름입니다. 그만큼 방문하시는 모든분들이 좋은 추억과 기억을 가지고 가실수있도록 최선을 다하겠습니다.",
      storeName: "수브니흐",
      location: LocationClass(latitude: 37.561189, longitude: 126.925884),
    ),
  ];

  static List<CustomMarker> myMarkers(){
    List<CustomMarker> _list = [];
    PracticeData.myStores.forEach((StoreType st) => _list.add(CustomMarker.fromMyStores(st)));
    return _list;
  }
}