import React, {useState, useEffect} from "react";
import {
  StyleSheet,
  View,
  Keyboard,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Switch,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";

import {
  Button,
  TextInput,
  Box,
  Text
} from "react-native-paper";

import styles from "./config/styles";

import PickerModal from "react-native-picker-modal-view";

import { Ionicons } from '@expo/vector-icons';

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const arrayProvince = [
  { "Name": "Agrigento", "Value": "AG"},
  { "Name": "Alessandria", "Value": "AL"},
  { "Name": "Ancona", "Value": "AN"},
  { "Name": "Aosta", "Value": "AO"},
  { "Name": "Arezzo", "Value": "AR"},
  { "Name": "Ascoli Piceno", "Value": "AP"},
  { "Name": "Asti", "Value": "AT"},
  { "Name": "Avellino", "Value": "AV"},
  { "Name": "Bari", "Value": "BA"},
  { "Name": "Barletta-Andria-Trani", "Value": "BT"},
  { "Name": "Belluno", "Value": "BL"},
  { "Name": "Benevento", "Value": "BN"},
  { "Name": "Bergamo", "Value": "BG"},
  { "Name": "Biella", "Value": "BI"},
  { "Name": "Bologna", "Value": "BO"},
  { "Name": "Bolzano", "Value": "BZ"},
  { "Name": "Brescia", "Value": "BS"},
  { "Name": "Brindisi", "Value": "BR"},
  { "Name": "Cagliari", "Value": "CA"},
  { "Name": "Caltanissetta", "Value": "CL"},
  { "Name": "Campobasso", "Value": "CB"},
  { "Name": "Carbonia-Iglesias", "Value": "CI"},
  { "Name": "Caserta", "Value": "CE"},
  { "Name": "Catania", "Value": "CT"},
  { "Name": "Catanzaro", "Value": "CZ"},
  { "Name": "Chieti", "Value": "CH"},
  { "Name": "Como", "Value": "CO"},
  { "Name": "Cosenza", "Value": "CS"},
  { "Name": "Cremona", "Value": "CR"},
  { "Name": "Crotone", "Value": "KR"},
  { "Name": "Cuneo", "Value": "CN"},
  { "Name": "Enna", "Value": "EN"},
  { "Name": "Fermo", "Value": "FM"},
  { "Name": "Ferrara", "Value": "FE"},
  { "Name": "Firenze", "Value": "FI"},
  { "Name": "Foggia", "Value": "FG"},
  { "Name": "Forlì-Cesena", "Value": "FC"},
  { "Name": "Frosinone", "Value": "FR"},
  { "Name": "Genova", "Value": "GE"},
  { "Name": "Gorizia", "Value": "GO"},
  { "Name": "Grosseto", "Value": "GR"},
  { "Name": "Imperia", "Value": "IM"},
  { "Name": "Isernia", "Value": "IS"},
  { "Name": "La Spezia", "Value": "SP"},
  { "Name": "L'Aquila", "Value": "AQ"},
  { "Name": "Latina", "Value": "LT"},
  { "Name": "Lecce", "Value": "LE"},
  { "Name": "Lecco", "Value": "LC"},
  { "Name": "Livorno", "Value": "LI"},
  { "Name": "Lodi", "Value": "LO"},
  { "Name": "Lucca", "Value": "LU"},
  { "Name": "Macerata", "Value": "MC"},
  { "Name": "Mantova", "Value": "MN"},
  { "Name": "Massa-Carrara", "Value": "MS"},
  { "Name": "Matera", "Value": "MT"},
  { "Name": "Messina", "Value": "ME"},
  { "Name": "Milano", "Value": "MI"},
  { "Name": "Modena", "Value": "MO"},
  { "Name": "Monza e della Brianza", "Value": "MB"},
  { "Name": "Napoli", "Value": "NA"},
  { "Name": "Novara", "Value": "NO"},
  { "Name": "Nuoro", "Value": "NU"},
  { "Name": "Olbia-Tempio", "Value": "OT"},
  { "Name": "Oristano", "Value": "OR"},
  { "Name": "Padova", "Value": "PD"},
  { "Name": "Palermo", "Value": "PA"},
  { "Name": "Parma", "Value": "PR"},
  { "Name": "Pavia", "Value": "PV"},
  { "Name": "Perugia", "Value": "PG"},
  { "Name": "Pesaro e Urbino", "Value": "PU"},
  { "Name": "Pescara", "Value": "PE"},
  { "Name": "Piacenza", "Value": "PC"},
  { "Name": "Pisa", "Value": "PI"},
  { "Name": "Pistoia", "Value": "PT"},
  { "Name": "Pordenone", "Value": "PN"},
  { "Name": "Potenza", "Value": "PZ"},
  { "Name": "Prato", "Value": "PO"},
  { "Name": "Ragusa", "Value": "RG"},
  { "Name": "Ravenna", "Value": "RA"},
  { "Name": "Reggio Calabria", "Value": "RC"},
  { "Name": "Reggio Emilia", "Value": "RE"},
  { "Name": "Rieti", "Value": "RI"},
  { "Name": "Rimini", "Value": "RN"},
  { "Name": "Roma", "Value": "RM"},
  { "Name": "Rovigo", "Value": "RO"},
  { "Name": "Salerno", "Value": "SA"},
  { "Name": "Medio Campidano", "Value": "VS"},
  { "Name": "Sassari", "Value": "SS"},
  { "Name": "Savona", "Value": "SV"},
  { "Name": "Siena", "Value": "SI"},
  { "Name": "Siracusa", "Value": "SR"},
  { "Name": "Sondrio", "Value": "SO"},
  { "Name": "Taranto", "Value": "TA"},
  { "Name": "Teramo", "Value": "TE"},
  { "Name": "Terni", "Value": "TR"},
  { "Name": "Torino", "Value": "TO"},
  { "Name": "Ogliastra", "Value": "OG"},
  { "Name": "Trapani", "Value": "TP"},
  { "Name": "Trento", "Value": "TN"},
  { "Name": "Treviso", "Value": "TV"},
  { "Name": "Trieste", "Value": "TS"},
  { "Name": "Udine", "Value": "UD"},
  { "Name": "Varese", "Value": "VA"},
  { "Name": "Venezia", "Value": "VE"},
  { "Name": "Verbano-Cusio-Ossola", "Value": "VB"},
  { "Name": "Vercelli", "Value": "VC"},
  { "Name": "Verona", "Value": "VR"},
  { "Name": "Vibo Valentia", "Value": "VV"},
  { "Name": "Vicenza", "Value": "VI"},
  { "Name": "Viterbo", "Value": "VT"}
];

const arrayNazioni =  [
  { "Name": "Italia", "Value": "IT"}
]

export default function CustomerEdit(props) {


  const [edit, setEdit] = useState(false);
  const [ditta_individuale, setDitta_individuale] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [arrayPagamento, setArrayPagamento] = useState([]);
  const [cliente, setCliente] = useState({        
		id_cliente: 0,
    ragsoc: "",
    ragsoc2: "",
    piva: "",
    cf: "",
    indir: "",
    cap: "",
    citta: "",
    label_prov: "",
    prov: "",
    label_iso_nazione: "",
    iso_nazione: "",
    tel: "",
    cell: "",
    email: "",
    pec: "",
    cod_sdi: "",
    iban: "",
    note: "",
    id_pagamento: '',
    inviato: 0
	}
);


  const _onPressSubmitButton = () => {
    alert('OK')
  }

  const toggleSwitch = (e) => {
    setDitta_individuale(e)
    if(!e){
      setCliente({...cliente, cf:""})
    }

  }
  const onSelectedProvincia = (e) => {
    setCliente({...cliente, prov:e.Value, label_prov:e.Name})

  }
  const onSelectedNazione = (e) => {
    setCliente({...cliente, iso_nazione:e.Value, label_iso_nazione: e.Name})
  }
  const onClosed = text => {
    console.log("close key pressed");
  }

  const { prov, iso_nazione } = cliente;



    return (
      <DismissKeyboard>
        <View style={{flex: 1}}>

          <KeyboardAvoidingView
            style={{ flex: 1, justifyContent: "center" }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <ScrollView style={styles.scrollView} bounces={true}>
              <View style={{ marginTop: 30, marginBottom: 30 }}>
                <View style={{flexDirection: "row", marginBottom: 15}}>
                  <View style={{flex: 1, marginRight: 5}}>
                    <TextInput
                      label="Ragsoc **"
                      style={[stylesComponent.input]}
                      returnKeyType="next"
                      autoCapitalize="none"
                      autoCorrect={false}
                      value={cliente.ragsoc}
                      error={cliente.ragsoc != "" || cliente.ragsoc2 != "" ? false : true}
                      onChangeText={text =>  setCliente({...cliente, ragsoc:text})}
                    />
                  </View>
                  <View style={{flex: 1, marginLeft: 5}}>
                    <TextInput
                      label="Ragsoc2 **"
                      style={[stylesComponent.input]}
                      returnKeyType="next"
                      autoCapitalize="none"
                      autoCorrect={false}
                      value={cliente.ragsoc2}
                      error={cliente.ragsoc != "" || cliente.ragsoc2 != "" ? false : true}
                      onChangeText={text =>  setCliente({...cliente, ragsoc2:text})}
                    />
                  </View>
                </View>

                <View style={{flexDirection: "row", marginBottom: 15}}>
                  <View style={{flex: 1, flexDirection: "row", marginRight: 5}}>
                    <View style={{flex: 1, marginRight: 5}}>
                      <TextInput
                        label="Partita IVA *"
                        style={[stylesComponent.input]}
                        maxLength={11}
                        keyboardType="numeric"
                        returnKeyType="next"
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={cliente.piva}
                        error={cliente.piva.length == 11 ? false : true}
                        onChangeText={text =>  setCliente({...cliente, piva:text})}
                      />
                    </View>
                    <View style={{flex: 1, marginLeft: 5}}>
                      <TextInput
                        mode="flat"
                        label="Codice SDI *"
                        style={[stylesComponent.input]}
                        maxLength={7}
                        returnKeyType="next"
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={cliente.cod_sdi}
                        error={cliente.cod_sdi.length == 7 ? false : true}
                        onChangeText={text =>  setCliente({...cliente, cod_sdi:text})}
                      />
                    </View>
                  </View>

                  <View style={{flex: 1, marginLeft: 5}}>
                    <TextInput
                        label="IBAN *"
                        style={[stylesComponent.input]}
                        maxLength={27}
                        returnKeyType="next"
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={cliente.iban}
                        error={cliente.iban.length == 27 ? false : true}
                        onChangeText={text =>  setCliente({...cliente, iban:text})}
                      />
                  </View>
                </View>            

                <View style={{flexDirection: "row", marginBottom: 15}}>
                  <View style={{flex: 1, marginRight: 5, justifyContent: "center"}}>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                      <Switch
                        onValueChange={toggleSwitch}
                        value={ditta_individuale}
                      />      
                      <View style={{marginLeft: 10}}>
                      <Text style={[stylesComponent.input]}>Ditta individuale</Text>
                      </View>
                    </View>
                  </View>
                  <View style={{flex: 1, marginLeft: 5}}>
                    <TextInput
                      label="Codice fiscale *"
                      style={[stylesComponent.input]}
                      maxLength={16}
                      returnKeyType="next"
                      autoCapitalize="none"
                      autoCorrect={false}
                      value={cliente.cf}
                      disabled={!ditta_individuale}
                      error={cliente.cf.length == 16 || !ditta_individuale ? false : true}
                      onChangeText={text => {
                        if(ditta_individuale){
                          setCliente({...cliente, cf:text})}
                        }
                      } 
                    />
                  </View>
                </View>

                <View style={{flexDirection: "row", marginBottom: 15}}>
                  <View style={{flex: 1, marginRight: 5}}>
                    <TextInput
                      mode="flat"
                      label="Indirizzo *"
                      style={[stylesComponent.input]}
                      returnKeyType="next"
                      autoCapitalize="none"
                      autoCorrect={false}
                      value={cliente.indir}
                      error={cliente.indir != "" ? false : true}
                      onChangeText={text =>  setCliente({...cliente, indir:text})}
                    />
                  </View>

                  <View style={{flex: 1, flexDirection: "row", marginLeft: 5}}>
                    <View style={{flex: 1, marginRight: 5}}>
                      <TextInput
                        label="Città *"
                        style={[stylesComponent.input]}
                        returnKeyType="next"
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={cliente.citta}
                        error={cliente.citta != "" ? false : true}
                        onChangeText={text =>  setCliente({...cliente, citta:text})}
                      />
                    </View>
                    <View style={{flex: 1, marginLeft: 5}}>
                      <TextInput
                        label="CAP *"
                        style={[stylesComponent.input]}
                        keyboardType="numeric"
                        returnKeyType="next"
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={cliente.cap}
                        error={cliente.cap != "" ? false : true}
                        onChangeText={text =>  setCliente({...cliente, cap:text})}
                      />
                    </View>

                  </View>


                </View>       

                <View style={{flexDirection: "row", marginBottom: 15}}>
                  <View style={{flex: 1, marginRight: 5}}>

                    <PickerModal
                      renderSelectView={(disabled, selected, showModal) =>
                        <TouchableOpacity onPress={showModal}>
                          <View style={{height: 50, borderBottomWidth: cliente.prov ? 1 : 2, borderColor: cliente.prov ? "#1c1b1f" : "#b71c21", borderRadius: 2, justifyContent: "center", paddingHorizontal: 12, paddingVertical: 8, backgroundColor: '#e7e0eb'}}>
                            <Text style={[stylesComponent.input]}>{cliente.label_prov != "" ? cliente.label_prov : "Seleziona provincia..."}</Text>
                            <Ionicons style={{position: "absolute", right: 10}} name="chevron-down" />
                          </View>
                        </TouchableOpacity>
                      }
                      autoCorrect={false}
                      multiSelect={false}
                      onSelected={onSelectedProvincia}
                      onClosed={onClosed}
                      items={arrayProvince}
                      sortingLanguage={"tr"}
                      showToTopButton={true}
                      selected={cliente.prov}
                      showAlphabeticalIndex={false}
                      //autoGenerateAlphabeticalIndex={true}
                      searchPlaceholderText={"Cerca..."}
                      requireSelection={true}
                      autoSort={false}
                    />
                  </View>
                  <View style={{flex: 1, marginLeft: 5}}>
                    <PickerModal
                      renderSelectView={(disabled, selected, showModal) =>
                        <TouchableOpacity onPress={showModal}>
                          <View style={{height: 50, borderBottomWidth: cliente.iso_nazione ? 1 : 2, borderColor: cliente.iso_nazione ? "#1c1b1f" : "#b71c21", borderRadius: 2, justifyContent: "center", paddingHorizontal: 12, paddingVertical: 8, backgroundColor: '#e7e0eb'}}>
                            <Text style={[stylesComponent.input]}>{cliente.label_iso_nazione != "" ? cliente.label_iso_nazione : "Seleziona nazione..."}</Text>
                            <Ionicons style={{position: "absolute", right: 10}} name="chevron-down" />
                          </View>
                        </TouchableOpacity>
                      }
                      autoCorrect={false}
                      multiSelect={false}
                      onSelected={onSelectedNazione}
                      onClosed={onClosed}
                      items={arrayNazioni}
                      sortingLanguage={"tr"}
                      showToTopButton={true}
                      selected={cliente.iso_nazione}
                      showAlphabeticalIndex={false}
                      //autoGenerateAlphabeticalIndex={true}
                      searchPlaceholderText={"Cerca..."}
                      requireSelection={true}
                      autoSort={false}
                    />

                  </View>
                </View>
     
                <View style={{flexDirection: "row", marginBottom: 15}}>
                  <View style={{flex: 1, marginRight: 5}}>
                    <TextInput
                      label="Telefono **"
                      style={[stylesComponent.input]}
                      keyboardType="numeric"
                      returnKeyType="next"
                      autoCapitalize="none"
                      autoCorrect={false}
                      value={cliente.tel}
                      error={cliente.tel != "" || cliente.cell != "" ? false : true}
                      onChangeText={text =>  setCliente({...cliente, tel:text})}
                    />
                  </View>
                  <View style={{flex: 1, marginLeft: 5}}>
                      <TextInput
                        label="Cellulare **"
                        style={[stylesComponent.input]}
                        keyboardType="numeric"
                        returnKeyType="next"
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={cliente.cell}
                        error={cliente.tel != "" || cliente.cell != "" ? false : true}
                        onChangeText={text =>  setCliente({...cliente, cell:text})}
                      />
                  </View>
                </View>

                <View style={{flexDirection: "row", marginBottom: 15}}>
                  <View style={{flex: 1, marginRight: 5}}>
                      <TextInput
                        label="Email"
                        style={[stylesComponent.input]}
                        keyboardType="email-address"
                        returnKeyType="next"
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={cliente.email}
                        onChangeText={text =>  setCliente({...cliente, email:text})}
                      />
                  </View>
                  <View style={{flex: 1, marginLeft: 5}}>
                      <TextInput
                        label="Pec"
                        style={[stylesComponent.input]}
                        keyboardType="email-address"
                        returnKeyType="next"
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={cliente.pec}
                        onChangeText={text =>  setCliente({...cliente, pec:text})}
                      />
                  </View>
                </View>
                <View>
                    <TextInput 
                      multiline={true}
                      onChangeText={text =>  setCliente({...cliente, note:text})}
                      style={[stylesComponent.input]}
                      placeholder="Note" 
                      value={cliente.note}
                    />
              </View>
              

              <View style={{ marginVertical: 10 }}>
                <Text style={[styles.textSmall, { color: "#666666" }]}>
                  * campi obbligatori
                </Text>
                <Text style={[styles.textSmall, { color: "#666666" }]}>
                  ** compilare almeno uno dei due campi
                </Text>
              </View>
              <View style={{ marginVertical: 20 }}>
                <Button
                icon="content-save-outline"
                mode="contained"
                  onPress={() => _onPressSubmitButton()}>
                    SALVA CLIENTE
                  </Button>
               
              </View>
            </View>

            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </DismissKeyboard>
    );
}
const stylesComponent = StyleSheet.create({
  input: {
    fontSize: 14,
    color: "#1c1b1f",
  }
});

