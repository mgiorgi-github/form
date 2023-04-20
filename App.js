import React, { useState, useEffect } from "react";

import {View, Text, Button} from "react-native";

import * as SplashScreen from 'expo-splash-screen';

import * as Font from "expo-font";

import { StyleSheet } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

//import { NativeBaseProvider } from "native-base";

import TableComponent from "./TableComponent";

SplashScreen.preventAutoHideAsync();

const tableColumns = [
  {
    title: "Ragione sociale",
    field: "ragsoc",
    size: 4,
  },
  {
    title: "Indirizzo",
    field: "indir",
    size: 4,
  },
  {
    title: "Città",
    field: "citta",
    size: 3,
  },
  {
    title: "",
    field: "dest",
    size: 2,
  },
  {
    title: "",
    field: "button",
    size: 4,
  },
];

const tableData = [
  {"attivo": 1, "ragsoc": "Client AAA","indir": "Address AAA","citta": "City AAA","dest": [{"id": 1, "nome": "Via aaa..."},{"id": 1, "nome": "Via bbb..."}]},
  {"attivo": 1, "ragsoc": "Client BBB","indir": "Address BBB","citta": "City BBB","dest": [{"id": 1, "nome": "Via aaa..."}]},
  {"attivo": 1, "ragsoc": "Client CCC","indir": "Address CCC","citta": "City CCC","dest": []}
];

export default function App(props) {

  const [counter, setCounter] = useState(0);

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

  const onUpdateCallback = () => {
    setCounter(counter+1)
  }


  return(
    <View style={{padding: 50, backgroundColor: "#84A9FF"}}>
      <TableComponent columns={tableColumns} data={tableData} onUpdate={onUpdateCallback}  />
      <View>
        <Text>counter: {counter}</Text>
        <Button title="App.js" onPress={onUpdateCallback} />
      </View>
    </View>
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
