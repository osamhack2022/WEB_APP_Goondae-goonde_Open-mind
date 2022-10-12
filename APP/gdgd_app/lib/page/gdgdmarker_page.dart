import 'package:flutter/material.dart';

class GDGDmarker extends StatelessWidget {
  @override
  Widget build(BuildContext context) => Scaffold(
    backgroundColor: Colors.black,
    body: Center(
      child: Text(
        '사용자 위치기반 지도 마커',
        style: TextStyle(fontSize: 30, color: Colors.white),
      ),
    ),
  );
}