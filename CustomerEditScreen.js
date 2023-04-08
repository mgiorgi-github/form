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
  TouchableWithoutFeedback,
} from "react-native";

import {
  FormControl,
  Input,
  Button,
  Text,
  TextArea,
  Box,
  Stack,
  Icon,
} from "native-base";

import styles from "./config/styles";

import PickerModal from "react-native-picker-modal-view";

import { Ionicons } from "@expo/vector-icons";

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
  }
  const onSelectedProvincia = text => {
    setCliente({...cliente, prov:e.Value, label_prov:e.Name})

  }
  const onSelectedNazione = text => {
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
              <FormControl style={{ marginBottom: 30 }}>
                <Stack direction="row" mb="1.5" mt="1.5" space={2}>
                  <Box w="49%">
                    <FormControl.Label>
                      <Text color={cliente.ragsoc != "" || cliente.ragsoc2 != "" ? "#000000" : "#FF0000"}
                        >Ragsoc **</Text>
                    </FormControl.Label>
                    <Input
                        style={[styles.textRegular, {height: 44}]}
                        size="2xl"
                        bg="#fff"
                        returnKeyType="next"
                        autoCapitalize="none"
                        autoCorrect={false}
                        default={cliente.ragsoc}
                        onChangeText={text =>  setCliente({...cliente, ragsoc:text})}
                      />
                  </Box>
                  <Box w="49%">
                    <FormControl.Label>
                      <Text color={cliente.ragsoc != "" || cliente.ragsoc2 != "" ? "#000000" : "#FF0000"}
                        >Ragsoc **</Text>
                    </FormControl.Label>
                    <Input
                        style={[styles.textRegular, {height: 44}]}
                        size="2xl"
                        bg="#fff"
                        returnKeyType="next"
                        autoCapitalize="none"
                        w="100%"
                        autoCorrect={false}
                        default={cliente.ragsoc2}
                        onChangeText={text =>  setCliente({...cliente, ragsoc2:text})}
                      />
                  </Box>
                </Stack>

                <Stack direction="row" mb="1.5" mt="1.5" space={2}>
                  <Box w="24%">
                    <FormControl.Label>
                      <Text color={cliente.piva.length == 11 ? "#000000" : "#FF0000"}
                        >Partita IVA *</Text>
                    </FormControl.Label>
                    <Input
                        style={[styles.textRegular, {height: 44}]}
                        size="2xl"
                        bg="#fff"
                        maxLength={11}
                        keyboardType="numeric"
                        returnKeyType="next"
                        autoCapitalize="none"
                        autoCorrect={false}
                        default={cliente.piva}
                        onChangeText={text =>  setCliente({...cliente, piva:text})}
                      />
                  </Box>

                  <Box w="24%">
                    <FormControl.Label>
                      <Text color={cliente.cod_sdi.length == 7 ? "#000000" : "#FF0000"}
                        >Codice SDI *</Text>
                    </FormControl.Label>
                    <Input
                        style={[styles.textRegular, {height: 44}]}
                        maxLength={7}
                        size="2xl"
                        bg="#fff"
                        returnKeyType="next"
                        autoCapitalize="none"
                        autoCorrect={false}
                        default={cliente.cod_sdi}
                        onChangeText={text =>  setCliente({...cliente, cod_sdi:text})}
                      />
                  </Box>

                  <Box w="49%">
                    <FormControl.Label>
                      <Text color={cliente.iban.length == 27 ? "#000000" : "#FF0000"}
                        >IBAN *</Text>
                    </FormControl.Label>
                    <Input
                        style={[styles.textRegular, {height: 44}]}
                        maxLength={27}
                        size="2xl"
                        bg="#fff"
                        returnKeyType="next"
                        autoCapitalize="none"
                        w="100%"
                        autoCorrect={false}
                        default={cliente.iban}
                        onChangeText={text =>  setCliente({...cliente, iban:text})}
                      />
                  </Box>
                </Stack>
              

                <Stack direction="row" mb="1.5" mt="1.5" space={2}>
                  <Box w="49%" justifyContent="flex-end" mb="2">
                    <Stack direction="row">
                      <Box>
                        <Switch
                              onValueChange={toggleSwitch}
                              value={ditta_individuale}
                            />      
                      </Box>
                      <Box justifyContent="center" ml="2.5">
                        <Text fontSize="sm">Ditta individuale</Text>
                      </Box>
                    </Stack>
                  </Box>
                  <Box w="49%">
                    <FormControl.Label>
                      <Text color={cliente.cf.length == 16 || !ditta_individuale ? "#000000" : "#FF0000"}
                        >Codice fiscale *</Text>
                    </FormControl.Label>
                    <Input
                      style={[styles.textRegular, {height: 44}]}
                      size="2xl"
                      bg="#fff"
                      maxLength={16}
                      returnKeyType="next"
                      autoCapitalize="none"
                      autoCorrect={false}
                      default={cliente.cf}
                      isDisabled={!ditta_individuale}
                      onChangeText={text => {
                        if(ditta_individuale){
                          setCliente({...cliente, cf:text})}
                        }
                      } 
                    />
                  </Box>
                  <Box w="49%">

                  </Box>

                </Stack>

                <Stack direction="row" mb="3.5" mt="1.5" space={2}>  
                  <Box w="49%">
                    <FormControl.Label>
                      <Text color={cliente.indir != "" ? "#000000" : "#FF0000"}
                        >Indirizzo *</Text>
                    </FormControl.Label>
                    <Input
                      style={[styles.textRegular, {height: 44}]}
                      size="2xl"
                      bg="#fff"
                      returnKeyType="next"
                      autoCapitalize="none"
                      w="100%"
                      autoCorrect={false}
                      default={cliente.indir}
                      onChangeText={text =>  setCliente({...cliente, indir:text})}
                    />
                  </Box>

                  <Box w="24%">
                    <FormControl.Label>
                      <Text color={cliente.citta != "" ? "#000000" : "#FF0000"}
                        >Città *</Text>
                    </FormControl.Label>
                    <Input
                      style={[styles.textRegular, {height: 44}]}
                        size="2xl"
                        bg="#fff"
                        returnKeyType="next"
                        autoCapitalize="none"
                        autoCorrect={false}
                        default={cliente.citta}
                        onChangeText={text =>  setCliente({...cliente, citta:text})}
                      />
                  </Box>

                  <Box w="24%">
                    <FormControl.Label>
                      <Text color={cliente.cap != "" ? "#000000" : "#FF0000"}
                        >CAP *</Text>
                    </FormControl.Label>
                    <Input
                      style={[styles.textRegular, {height: 44}]}
                      size="2xl"
                      bg="#fff"
                      keyboardType="numeric"
                      returnKeyType="next"
                      autoCapitalize="none"
                      autoCorrect={false}
                      default={cliente.cap}
                      onChangeText={text =>  setCliente({...cliente, cap:text})}
                    />
                  </Box>


                </Stack>       

                <Stack direction="row" mb="1.5" mt="2.5" space={2}>
                  <Box w="49%">
                    <FormControl.Label>
                      <Text color={cliente.prov != "" ? "#000000" : "#FF0000"}
                        >Provincia *</Text>
                    </FormControl.Label>

                    <PickerModal
                      renderSelectView={(disabled, selected, showModal) =>
                        <TouchableOpacity onPress={showModal}>
                          <View style={{height: 48, borderWidth: 1, borderColor: "#d4d4d4", borderRadius: 4, justifyContent: "center", paddingHorizontal: 12, paddingVertical: 8}}>
                            <Text style={[styles.textRegular, {}]}>{cliente.label_prov}</Text>
                            <Icon style={{position: "absolute", right: 10}} as={Ionicons} name="chevron-down" size="xl" />
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
                      autoGenerateAlphabeticalIndex={true}
                      selectPlaceholderText={"Seleziona..."}
                      onEndReached={() => console.log("list ended...")}
                      searchPlaceholderText={"Cerca..."}
                      requireSelection={true}
                      autoSort={false}
                    />
                  </Box>
                  <Box w="49%">
                    <FormControl.Label>
                      <Text color={cliente.iso_nazione != "" ? "#000000" : "#FF0000"}
                        >Nazione *</Text>
                    </FormControl.Label>

                    <PickerModal
                      renderSelectView={(disabled, selected, showModal) =>
                        <TouchableOpacity onPress={showModal}>
                          <View style={{height: 48, borderWidth: 1, borderColor: "#d4d4d4", borderRadius: 4, justifyContent: "center", paddingHorizontal: 12, paddingVertical: 8}}>
                            <Text style={[styles.textRegular, {}]}>{cliente.label_iso_nazione}</Text>
                            <Icon style={{position: "absolute", right: 10}} as={Ionicons} name="chevron-down" size="xl" />
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
                      selected={iso_nazione}
                      showAlphabeticalIndex={false}
                      autoGenerateAlphabeticalIndex={true}
                      selectPlaceholderText={"Seleziona..."}
                      onEndReached={() => console.log("list ended...")}
                      searchPlaceholderText={"Cerca..."}
                      requireSelection={true}
                      autoSort={false}
                    />

                  </Box>
                </Stack>

                <Stack direction="row" mb="1.5" mt="2.5" space={2}>
                  <Box w="49%">
                    <FormControl.Label>
                      <Text color={cliente.tel != "" || cliente.cell != "" ? "#000000" : "#FF0000"}
                        >Telefono **</Text>
                    </FormControl.Label>
                    <Input
                      style={[styles.textRegular, {height: 44}]}
                      size="2xl"
                      bg="#fff"
                      keyboardType="numeric"
                      returnKeyType="next"
                      autoCapitalize="none"
                      w="100%"
                      autoCorrect={false}
                      default={cliente.tel}
                      onChangeText={text =>  setCliente({...cliente, tel:text})}
                    />
                  </Box>
                  <Box w="49%">
                  <FormControl.Label>
                      <Text color={cliente.tel != "" || cliente.cell != "" ? "#000000" : "#FF0000"}
                        >Cellulare **</Text>
                    </FormControl.Label>
                      <Input
                        style={[styles.textRegular, {height: 44}]}
                        size="2xl"
                        bg="#fff"
                        keyboardType="numeric"
                        returnKeyType="next"
                        autoCapitalize="none"
                        w="100%"
                        autoCorrect={false}
                        default={cliente.cell}
                        onChangeText={text =>  setCliente({...cliente, cell:text})}
                      />
                  </Box>
                </Stack>

                <Stack direction="row" mb="1.5" mt="2.5" space={2}>
                  <Box w="49%">
                    <FormControl.Label>Email</FormControl.Label>
                      <Input
                        style={[styles.textRegular, {height: 44}]}
                        size="2xl"
                        bg="#fff"
                        keyboardType="email-address"
                        returnKeyType="next"
                        autoCapitalize="none"
                        w="100%"
                        autoCorrect={false}
                        default={cliente.email}
                        onChangeText={text =>  setCliente({...cliente, email:text})}
                      />
                  </Box>
                  <Box w="49%">
                    <FormControl.Label>Pec</FormControl.Label>
                      <Input
                        style={[styles.textRegular, {height: 44}]}
                        size="2xl"
                        bg="#fff"
                        keyboardType="email-address"
                        returnKeyType="next"
                        autoCapitalize="none"
                        w="100%"
                        autoCorrect={false}
                        default={cliente.pec}
                        onChangeText={text =>  setCliente({...cliente, pec:text})}
                      />
                  </Box>
                </Stack>

                <Stack direction="row" mb="1.5" mt="2.5" space={2}>
                  <Box w="98%">
                    <TextArea 
                      onChangeText={text =>  setCliente({...cliente, note:text})}
                      style={[styles.textRegular]}
                      placeholder="Note" 
                      size="2xl"
                      default={cliente.note}
                      mb="5" />
                  </Box>
                </Stack>
 
              </FormControl>
            
              <View style={{ marginBottom: 10 }}>
                <Text style={[styles.textSmall, { color: "#666666" }]}>
                  * campi obbligatori
                </Text>
                <Text style={[styles.textSmall, { color: "#666666" }]}>
                  ** compilare almeno uno dei due campi
                </Text>
              </View>
              <View style={{ marginBottom: 20 }}>
                <Button
                  size="lg"
                  leftIcon={<Icon as={Ionicons} name="save-outline" size="lg" />}
                  onPress={() => this._onPressSubmitButton()}
                >"SALVA CLIENTE"
                </Button>
              </View>


            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </DismissKeyboard>
    );
}
const stylesComponent = StyleSheet.create({
  cartNote: {
    fontSize: 13,
    borderWidth: 1,
    height: 70,
    borderColor: "#EEE9E6",
    padding: 10,
    textAlignVertical: "top",
  },
});
