import 'custom_class/location_class.dart';
import 'custom_class/marker_class.dart';
import 'custom_class/store_class.dart';

class GDdata {
  static final List<StoreType> myStores = [
    GDstore(
      uid: "1",
      name: "test",
      address: "test",
      number: "test",
      benefit: "test",
      location: LocationClass(latitude: 37.6626611, longitude: 126.8908765),
    ),
  ];

  static List<CustomMarker> myMarkers(){
    List<CustomMarker> _list = [];
    GDdata.myStores.forEach((StoreType st) => _list.add(CustomMarker.fromMyStores(st)));
    return _list;
  }
}