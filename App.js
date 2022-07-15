



import React from 'react';
import { Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

const YourApp = () => { return (
                             <WebView

                               source={{
                                 uri: 'http://ccv1dev101.dataflightit.com/rw/home/'
                               }}
                               style={{ marginTop: 20 }}
                             />
                           );
}
export default YourApp;
