import React from "react";
import { View, Text, ImageBackground } from "react-native";
import Button from "../button";
import styles from "./style";

const CarItem = (props) => {
    const { name, title, image, titleCTA } = props.car
    return (
        <View style={styles.carContainer}>
            {/* <ImageBackground style={styles.image} source={require('../../assets/images/ModelS.jpeg')} /> */}
            <ImageBackground style={styles.image} source={image} />

            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>{title}
                    {' '}
                    <Text style={styles.titleCTA}>{titleCTA}</Text>
                </Text>
            </View>

            <View style={styles.btnContainer}>

                <Button type='primary' text='Custom Order' onPress='Order Placed'></Button>
                <Button type='secondary' text='Existing Inventory' onPress='Added in Inventory'></Button>
            </View>

        </View>

    )
}

export default CarItem;