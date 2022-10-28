import 'location_class.dart';

abstract class StoreType {
  final String uid = "";
  final String name = "";
  final String address = "";
  final String markerImage = "";
  final LocationClass location = LocationClass(longitude: 0.0, latitude: 0.0);
  final String benefit = "";
  final String number = "";
}

class GDstore implements StoreType {
  @override
  final String uid;

  @override
  final String address;

  @override
  final String benefit;

  @override
  final String number;

  @override
  final String markerImage = "assets/marker/GDGDmarker.png";

  @override
  final String name;

  @override
  final LocationClass location;

  GDstore({
    required this.uid,
    required this.name,
    required this.location,
    required this.address,
    required this.benefit,
    required this.number,
  });
}