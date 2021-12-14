import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./style";

const Button = (props) => {
    const { type, text, onPress } = props
    const backgroundColor = type == 'primary' ? '#171A20CC' : '#FFFFFFA6';
    const textColor = type == 'primary' ? '#FFFFFF' : '#171A20';
    return (
        <View style={styles.container}>
            <Pressable style={[styles.button, { backgroundColor: backgroundColor }]}
                onPress={() => { console.warn(`${onPress}`) }}>

                <Text style={[styles.btnText, { color: textColor }]}>{text}</Text>
            </Pressable>
        </View>
    )
}

export default Button;