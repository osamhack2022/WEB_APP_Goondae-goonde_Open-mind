import 'package:flutter/material.dart';

class Favorite extends StatelessWidget {
  @override
  Widget build(BuildContext context) => Scaffold(
    backgroundColor: Colors.black,
    body: Center(
      child: Text(
        '좋아요 한 매장 표시',
        style: TextStyle(fontSize: 30, color: Colors.white),
      ),
    ),
  );
}