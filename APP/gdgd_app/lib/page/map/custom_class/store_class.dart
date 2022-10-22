import 'location_class.dart';

abstract class StoreType {
  final String uid = "";
  final String storeName = "";
  final String address = "";
  final String markerImage = "";
  final LocationClass location = LocationClass(longitude: 0.0, latitude: 0.0);
  final String detailInfo = "";
  final String phoneNumber = "";
  final String snsLink = "";
}

class Restaurant implements StoreType {
  @override
  final String uid;

  @override
  final String address;

  @override
  final String detailInfo;

  @override
  final String phoneNumber;

  @override
  final String snsLink;

  @override
  final String markerImage = "assets/marker/GDGDmarker.png";

  @override
  final String storeName;

  @override
  final LocationClass location;

  Restaurant({
    required this.uid,
    required this.storeName,
    required this.location,
    required this.address,
    required this.detailInfo,
    required this.snsLink,
     required this.phoneNumber
  });
}

class Cafe implements StoreType {
  @override
  final String uid;

  @override
  final String address;

  @override
  final String detailInfo;

  @override
  final String phoneNumber;

  @override
  final String snsLink;

  @override
  final String markerImage = "assets/markers/GDGDmarker.png";

  @override
  final String storeName;

  @override
  final LocationClass location;

  Cafe({
    required this.uid,
    required this.storeName,
    required this.location,
    required this.address,
    required this.detailInfo,
    required this.snsLink,
    required this.phoneNumber
  });
}

