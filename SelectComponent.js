import React, {useState, memo} from "react";

import { View } from "react-native";

import {
    FormControl,
    Text,
    Pressable,
    Icon
}from "native-base";

import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import PickerModal from "react-native-picker-modal-view";

const SelectComponent = (props) => {

    const [text, setText] = useState(props.text);
    const label = props.label;

    const minlength = props.minlength ? props.minlength : 0;
    const disable = props.disable ? props.disable : false;
    const styleinput = props.style ? props.style.input : {}
    const data = props.data ? props.data : [];

    const update = (elm) => {
        setText(elm.Name)
        if(props.onupdate){
            props.onupdate(elm.Value)
        }
    }
    
    const onClosed = text => {
        console.log("close key pressed");
    }

    console.log("Rendering SelectComponent: "+label)
    return(
        <View>
            <FormControl.Label style={{opacity: disable ? 0.5 : 1}}>
                <Text color={text.length >= minlength || disable ? "#000000" : "#FF0000"}>{label}</Text>
            </FormControl.Label>

            <PickerModal
                renderSelectView={(disabled, selected, showModal) =>
                <Pressable onPress={showModal}>
                    <View style={{height: 48, borderWidth: 1, borderColor: "#d4d4d4", borderRadius: 4, justifyContent: "center", paddingHorizontal: 12, paddingVertical: 8}}>
                        <Text style={[styleinput.input, {}]}>{text}</Text>
                        <Icon style={{position: "absolute", right: 10}} as={Ionicons} name="chevron-down" size="lg" />
                    </View>
                </Pressable>
                }
                autoCorrect={false}
                multiSelect={false}
                onSelected={update}
                onClosed={onClosed}
                items={data}
                sortingLanguage={"tr"}
                showToTopButton={true}
                selected={text}
                showAlphabeticalIndex={false}
                autoGenerateAlphabeticalIndex={true}
                selectPlaceholderText={"Seleziona..."}
                onEndReached={() => console.log("list ended...")}
                searchPlaceholderText={"Cerca..."}
                requireSelection={true}
                autoSort={false}
            />
        </View>
    )   
}


export default memo(SelectComponent);