import React, { useState, memo, useEffect } from "react";
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  Pressable,
  Button,
  Modal
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

const TableComponent = ({columns, data, onUpdate}) => {
  console.log("-> 1. Rendering TableComponent");
  return ( 
    <View style={{backgroundColor: "#ADC8FF"}}>
      <TableHeadComponent columns={columns}/>
      <TableBodyComponent data={data} columns={columns} onUpdate={onUpdate} />
      <Button title="TableComponent" onPress={onUpdate} />
    </View>
  )
}

const TableBodyComponent = ({data, columns, onUpdate}) => {
  console.log("-- 2. Rendering TableBodyComponent");

  const [destinations, setDestinations] = useState([]);
  const [isDestinationsVisible, setIsDestinationsVisible] = useState(false);

  const renderItem = ({item}) => <TableRowComponent item={item} columns={columns} onUpdate={onUpdate}/>
  const keyExtractor = (item, index) => index
  return (
    <>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
      <Modal visible={isDestinationsVisible} transparent={true}>
        <View style={[stylesComponent.centeredView, {minWidth: "80%"}]}>
          <View style={stylesComponent.modalView}>
            <Text style>DESTINAZIONI</Text>
            {destinations.map((dest, key) => (
              <Text style={[{marginTop: 5}]} key={key}>{dest.nome}</Text>
            ))}
            <Pressable style={stylesComponent.modalClose} onPress={() => setIsDestinationsVisible(false)}>
              <MaterialIcons name="close" size={20} />
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  )
}

const TableHeadComponent = ({columns}) => {
  console.log("-- 3. Rendering TableHeadComponent");
  return (
    <View
      style={{
        backgroundColor: "#ecf0f1",
        flexDirection: "row",
        padding: 0,
      }}
    >
    {columns.map((item, key) => {
      let s = parseInt(item.size);
      return (
        <View
          key={key+1}
          style={[
            s > 0 && { flex: s },
            item.type == "image" && { width: 160 },
          ]}
        >
          <Text style={stylesComponent.textHeaderStyle}>{item.title}</Text>
        </View>
      );
    })}
  </View>
  );
}

const TableRowComponent = ({item, columns, onUpdate}) => {
  console.log("-- 4. Rendering TableRowComponent");
  //console.log("item: ", item);
  //const [tot_paia, settot_paia] = useState(0);

  useEffect(()=> {
    //settot_paia(props.item.tot_paia)
  }, [])

  const clickDestinations = (data) => {
    console.log("clickDestinations: ", data)
  }

  
  return (
    <View>
      <TableCellComponent item={item} columns={columns} onUpdate={onUpdate}/>
    </View>
  )

}

const TableCellComponent = ({item, columns, onUpdate}) => {

  console.log("-- 5. Rendering TableCellComponent");

  //console.log("item: ", item)
  //console.log("columns: ", columns)

  return (
    <View
      style={{
        backgroundColor: "#ffffff",
        flexDirection: "row",
        padding: 0,
      }}
    >
    {columns.map((element, key) => {
      const s = parseInt(element.size);
      let data;
      switch(element.field){
        case 'dest':
          const arrayDestinazioni = item[element.field];
          if(arrayDestinazioni.length > 0){
            data = <Pressable onPress={() => { alert(item[element.field].length)}}>
            <MaterialIcons name="info-outline" size={20} />
           </Pressable>
          }
          break;
        case 'check':
          data = <View style={item["inviato"] == 1 ? { opacity: 1 } : { opacity: 0 }}>
                  <MaterialIcons name="check" size={20} />
                 </View>
          break;
        default:
          const value = item[element.field]
          data = <Text style={stylesComponent.textHeaderStyle}>{value}</Text>
          break;
      }

      return (
        <View
          key={key+1}
          style={[
            stylesComponent.cellStyle,
            {justifyContent: 'center'},
            s > 0 && { flex: s },
            element.type == "image" && { width: 160 },
          ]}>{data}<Button title="Cell" onPress={onUpdate} />
        </View>
      );
    })}

  </View>
  );
}

export default memo(TableComponent);

const stylesComponent = StyleSheet.create({
  tableStyle: {
    flexDirection: "row",
    padding: 5,
    flex: 1,
    backgroundColor: "#ADC8FF"
  },
  tableRow: {
    flexDirection: "row",
    marginTop: 0,
  },
  tableCell: {
    flexDirection: "row",
    flex: 1,
  },
  textHeaderStyle: {
    textTransform: "uppercase",
    textAlign: "left",
    fontSize: 12,
    padding: 15,
  },
  itemStyle: {
    flex: 1,
  },
  rowStyle: {},
  cellStyle: {
    paddingVertical: 10,
    backgroundColor: "#D6E4FF"
  },
  rowsTitle: {
    backgroundColor: "#cccccc",
    textAlign: "left",
    padding: 15,
    fontWeight: "bold",
    marginLeft: 2,
    marginVertical: 2,
  },
  textInput: {
     fontSize: 12,
    textAlign: "center",
    paddingLeft: 2,
    paddingRight: 2,
    paddingVertical: 8,
    flex: 1,
    backgroundColor: "#E8E8E8",
    borderWidth: 1,
    borderColor: "#ffffff",
  },
  buttonStyle: {
    margin: 5,
  },
  textStyle: {
    fontSize: 13,
    padding: 15,
    textAlign: "left",
  },
  textBoldStyle: {
    fontSize: 13,
    padding: 15,
    textAlign: "left",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalClose: {
    position: "absolute",
    right: 10,
    top: 10,
  }
});
