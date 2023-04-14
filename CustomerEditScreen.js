import React, {useState, useEffect} from "react";
import {
  StyleSheet,
  View,
  Keyboard,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Switch,
  TouchableWithoutFeedback,

} from "react-native";

import {
  FormControl,
  Button,
  Text,
  Box,
  Stack,
  Icon,
} from "native-base";

import styles from "./config/styles";

import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import InputComponent from "./InputComponent";
import SelectComponent from "./SelectComponent";

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


  const [ragsoc, setragsoc] = useState("");
  const [ragsoc2, setragsoc2] = useState("");
  const [piva, setipva] = useState("");
  const [cod_sdi, setcod_sdi] = useState("");
  const [iban, setiban] = useState("");
  const [cf, setfc] = useState("");
  const [indir, setindir] = useState("");
  const [citta, setcitta] = useState("");
  const [cap, setcap] = useState("");
  const [prov, setprov] = useState("");
  const [iso_nazione, setiso_nazione] = useState("");
  const [tel, settel] = useState("");
  const [cell, setcell] = useState("");
  const [email, setemail] = useState("");
  const [pec, setpec] = useState("");
  const [note, setnote] = useState("");

  /*
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
*/

  const _onPressSubmitButton = () => {
    alert('OK')
  }
  const toggleSwitch = (e) => {
    setDitta_individuale(e)
  }




  
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
                    <InputComponent label="Ragsoc **" text={ragsoc} minlength={1} onupdate={text => setragsoc(text)} style={stylesComponent} />
                  </Box>
                  <Box w="49%">
                    <InputComponent label="Ragsoc2 **" text={ragsoc2} minlength={1} onupdate={text => setragsoc2(text)} style={stylesComponent}/>
                  </Box>
                </Stack>
            
                <Stack direction="row" mb="1.5" mt="1.5" space={2}>
                  <Box w="24%">
                    <InputComponent label="Partita IVA *" text={piva} minlength={11} keyboard="numeric" onupdate={text => setipva(text)} style={stylesComponent}/>
                  </Box>
                  <Box w="24%">
                    <InputComponent label="Codice SDI  *" text={cod_sdi} minlength={7} onupdate={text => setcod_sdi(text)} style={stylesComponent}/>
                  </Box>
                  <Box w="49%">
                    <InputComponent label="IBAN  *" text={iban} minlength={27} onupdate={text => setiban(text)} style={stylesComponent}/>
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
                    <InputComponent label="Codice fiscale *" text={cf} minlength={16} onupdate={text => setfc(text)} disable={!ditta_individuale} style={stylesComponent}/>
                  </Box>
                  <Box w="49%">
                  </Box>
                </Stack>
                <Stack direction="row" mb="3.5" mt="1.5" space={2}>  
                  <Box w="49%">
                    <InputComponent label="Indirizzo *" text={cf} minlength={1} onupdate={text => setindir(text)} style={stylesComponent}/>
                  </Box>
                  <Box w="24%">
                    <InputComponent label="Città *" text={citta} minlength={1} onupdate={text => setcitta(text)} style={stylesComponent}/>
                  </Box>
                  <Box w="24%">
                    <InputComponent label="CAP *" text={cap} minlength={1} onupdate={text => setcap(text)} style={stylesComponent}/>
                  </Box>
                </Stack>       
                <Stack direction="row" mb="1.5" mt="2.5" space={2}>
                  <Box w="49%">
                    <SelectComponent label="Provincia *" text={prov} minlength={1} data={arrayProvince} onupdate={text => setprov(text)} style={stylesComponent}/>  
                  </Box>
                  <Box w="49%">
                    <SelectComponent label="Nazione *" text={iso_nazione} minlength={1} data={arrayNazioni} onupdate={text => setiso_nazione(text)} style={stylesComponent}/>  
                  </Box>
                </Stack>
                {/*
                <Stack direction="row" mb="1.5" mt="2.5" space={2}>
                  <Box w="49%">
                    <FormControl.Label>
                      <Text color={prov != "" ? "#000000" : "#FF0000"}
                        >Provincia *</Text>
                    </FormControl.Label>

                    <PickerModal
                      renderSelectView={(disabled, selected, showModal) =>
                        <TouchableOpacity onPress={showModal}>
                          <View style={{height: 48, borderWidth: 1, borderColor: "#d4d4d4", borderRadius: 4, justifyContent: "center", paddingHorizontal: 12, paddingVertical: 8}}>
                            <Text style={[stylesComponent.input, {}]}>{label_prov}</Text>
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
                      selected={prov}
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
                      <Text color={iso_nazione != "" ? "#000000" : "#FF0000"}
                        >Nazione *</Text>
                    </FormControl.Label>

                    <PickerModal
                      renderSelectView={(disabled, selected, showModal) =>
                        <TouchableOpacity onPress={showModal}>
                          <View style={{height: 48, borderWidth: 1, borderColor: "#d4d4d4", borderRadius: 4, justifyContent: "center", paddingHorizontal: 12, paddingVertical: 8}}>
                            <Text style={[stylesComponent.input, {}]}>{label_iso_nazione}</Text>
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
                    */}

                <Stack direction="row" mb="1.5" mt="2.5" space={2}>
                  <Box w="49%">
                    <InputComponent label="Telefono *" text={tel} minlength={1} onupdate={text => settel(text)} keyboard="numeric" style={stylesComponent}/>
                  </Box>
                  <Box w="49%">
                    <InputComponent label="Cellulare *" text={cell} minlength={1} onupdate={text => setcell(text)} keyboard="numeric" style={stylesComponent}/>
                  </Box>
                </Stack>

                <Stack direction="row" mb="1.5" mt="2.5" space={2}>
                  <Box w="49%">
                    <InputComponent label="Email" text={email} onupdate={text => setemail(text)} keyboard="email-address" style={stylesComponent}/>
                  </Box>
                  <Box w="49%">
                    <InputComponent label="PEC" text={pec} onupdate={text => setpec(text)} keyboard="email-address" style={stylesComponent}/>
                  </Box>
                </Stack>

                <Stack direction="row" mb="1.5" mt="2.5" space={2}>
                  <Box w="98%">
                    <InputComponent label="Note" text={pec} onupdate={text => setnote(text)} multiline style={stylesComponent}/>
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
  input: {
    fontSize: 14,
    marginVertical: 6
  },
});

