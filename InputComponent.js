import React, {useState, useEffect, memo} from "react";

import { View } from "react-native";

import {
    FormControl,
    Input,
    Text,
    TextArea,
    Icon,
    Pressable
}from "native-base";

import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const InputComponent = (props) => {



    const [text, setText] = useState(props.text);
    const label = props.label;

    const minlength = props.minlength ? props.minlength : 0;
    const keyboard = props.keyboard ? props.keyboard : "default";
    const disable = props.disable ? props.disable : false;
    const styleinput = props.style ? props.style.input : {}
    const reset = (
        <Pressable onPress={() => setText("")}>
            <Icon as={<MaterialIcons name="close" />} size={5} mr="2"/>
        </Pressable>
    );

    const update = (elm) => {
        if(props.onupdate){
            props.onupdate(elm.nativeEvent.text)
        }
        
    }

    console.log("Rendering InputComponent: "+label)
    return(
        <View>
            <FormControl.Label style={{opacity: disable ? 0.5 : 1}}>
                <Text color={text.length >= minlength || disable ? "#000000" : "#FF0000"}>{label}</Text>
            </FormControl.Label>
            {props.multiline ? 
                <TextArea 
                    style={styleinput}
                    size="2xl"
                    bg="#fff"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={text}
                    onChangeText={text => setText(text)}
                    onBlur={update}
                    isDisabled={disable}
                    isReadOnly={disable}
                />
            : 
                <Input
                    style={styleinput}
                    size="2xl"
                    bg="#fff"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={text}
                    keyboardType={keyboard}
                    onChangeText={text => setText(text)}
                    onBlur={update}
                    isDisabled={disable}
                    isReadOnly={disable}
                    //InputRightElement={reset}
                />
            }

        </View>
    )   
}

export default memo(InputComponent);