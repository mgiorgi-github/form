import React, { useRef, useState, useEffect, useCallback } from "react";

import * as SplashScreen from 'expo-splash-screen';

import { Asset } from "expo-asset";
import * as Font from "expo-font";

import { StyleSheet } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import { NativeBaseProvider } from "native-base";

import CustomerEdit from "./CustomerEditScreen";

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

  return(
    <NativeBaseProvider>
      <CustomerEdit />
    </NativeBaseProvider>
  )
}




async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      ...MaterialIcons.font,
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
  console.warn(error);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
