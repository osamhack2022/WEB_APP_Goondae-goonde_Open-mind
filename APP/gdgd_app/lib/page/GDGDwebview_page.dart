import 'dart:async'; 
import 'dart:io'; 
import 'package:flutter/material.dart'; 
import 'package:webview_flutter/webview_flutter.dart'; 

class GDGDWebView extends StatefulWidget { 
  @override 
  WebViewExampleState createState() => WebViewExampleState(); 
} 
  
class WebViewExampleState extends State<GDGDWebView> {
  WebViewController? _webViewController; 
  final Completer<WebViewController> _completerController = Completer<WebViewController>(); 
  @override 
  void initState() { super.initState(); 
  // Enable hybrid composition. 
  if (Platform.isAndroid) WebView.platform = SurfaceAndroidWebView(); 
} 

@override 
Widget build(BuildContext context) {
  return WillPopScope( onWillPop: () => _goBack(context), 
  child: Scaffold( 
    body: WebView( 
      onWebViewCreated: (WebViewController webViewController) { 
        _completerController.future 
        .then((value) => _webViewController = value); 
        _completerController.complete(webViewController); 
        }, 
        initialUrl: 'http://ec2-52-79-185-182.ap-northeast-2.compute.amazonaws.com:3000/',
        javascriptMode: JavascriptMode.unrestricted, 
      ), 
    ), 
  ); 
} 
  
  Future<bool> _goBack(BuildContext context) async { 
    if (_webViewController == null) { 
      return true; 
      } 
      if (await _webViewController!.canGoBack()) { 
        _webViewController!.goBack(); 
        return Future.value(false); 
        } else { 
          return Future.value(true); 
        } 
      } 
    }


