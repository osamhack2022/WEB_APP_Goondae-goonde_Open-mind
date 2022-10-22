import 'package:flutter/material.dart';
import 'package:curved_navigation_bar/curved_navigation_bar.dart';
import 'page/GDGDfavorite_page.dart';
import 'page/map/GDGDmap_page.dart';
import 'page/GDGDwebview_page.dart';

void main() => runApp(MaterialApp(home: BottomNavBar()));

class BottomNavBar extends StatefulWidget {
  @override
  _BottomNavBarState createState() => _BottomNavBarState();
}

class _BottomNavBarState extends State<BottomNavBar> {
  int index = 1;
  GlobalKey<CurvedNavigationBarState> _bottomNavigationKey = GlobalKey();

  final screens = [
    GDGDWebView(),
    GDGDMap(),
    GDGDFavorite(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      extendBody: true,
      bottomNavigationBar: CurvedNavigationBar(
        key: _bottomNavigationKey,
        height: 50,
        index: index,
        items: <Widget>[
          Icon(Icons.language, size: 30),
          Icon(Icons.room, size: 30),
          Icon(Icons.favorite, size: 30),
        ],
        color: Colors.white,
        buttonBackgroundColor: Colors.white,
        backgroundColor: Colors.transparent,
        animationCurve: Curves.easeInOut,
        animationDuration: Duration(milliseconds: 300),
        onTap: (index) => setState(() => this.index = index),
      ),
      body: screens[index],
    );
  }
}
