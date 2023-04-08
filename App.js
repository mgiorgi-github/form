import React, { useRef, useState, useEffect, useCallback } from "react";

import * as SplashScreen from 'expo-splash-screen';

import { Asset } from "expo-asset";
import * as Font from "expo-font";

import { StyleSheet, AppState } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import { NativeBaseProvider, Text, Button } from "native-base";
import CustomerEdit from "./CustomerEditScreen";


// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App(props) {

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await loadResourcesAsync()
      } catch (e) {
        handleLoadingError()
      } finally {
        // Tell the application to render
        await SplashScreen.hideAsync();
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);


  if (!appIsReady) {
    return null
  }

  SplashScreen.hideAsync();

  return (
    <NativeBaseProvider>
      <CustomerEdit />
    </NativeBaseProvider>
  );
}




async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      //Precaricaemnto immagini
      require("./assets/images/logo.jpg"),
      require("./assets/images/retro.jpg"),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      ...MaterialIcons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      //'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      //Roboto: require("native-base/Fonts/Roboto.ttf"),
      //Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      "Montserrat-Thin": require("./assets/Fonts/Montserrat-Thin.ttf"),
      "Montserrat-Light": require("./assets/Fonts/Montserrat-Light.ttf"),
      "Montserrat-Regular": require("./assets/Fonts/Montserrat-Regular.ttf"),
      "Montserrat-SemiBold": require("./assets/Fonts/Montserrat-SemiBold.ttf"),
      "Montserrat-Bold": require("./assets/Fonts/Montserrat-Bold.ttf"),
      "Montserrat-ExtraBold": require("./assets/Fonts/Montserrat-ExtraBold.ttf"),
      "Montserrat-Black": require("./assets/Fonts/Montserrat-Black.ttf"),
      "Montserrat-Italic": require("./assets/Fonts/Montserrat-Italic.ttf"),
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
