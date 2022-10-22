import 'package:flutter/cupertino.dart';
import 'package:naver_map_plugin/naver_map_plugin.dart' show Marker, OverlayImage;

import 'store_class.dart';

class CustomMarker extends Marker {
  final StoreType store;

  /// the old way
  // CustomMarker({
  //   required String markerId,
  //   required this.store,
  //   required LocationClass position,
  //   required String text,
  // }) : super(markerId: markerId, position: position, width: 30, height: 55, captionText: text, );

  /// for SDK 2.17 and up - the new way
  CustomMarker({required this.store, required super.position, super.width = 30, super.height = 45})
    : super(markerId: store.uid, captionText: store.storeName);

  factory CustomMarker.fromMyStores(StoreType store) => CustomMarker(store: store, position: store.location);

  Future<void> createImage(BuildContext context) async {
    this.icon = await OverlayImage.fromAssetImage(assetName: this.store.markerImage, context: context);
  }

  void setOnMarkerTab(void Function(Marker marker, Map<String, int> iconSize) callBack){
    this.onMarkerTab = callBack;
  }
}