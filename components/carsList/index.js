import React from "react";
import { View, FlatList, Dimensions } from "react-native";
import styles from "./style";
import cars from './cars'
import CarItem from "../carItem";
const CarList = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={cars}
                renderItem={({ item }) => <CarItem key={item.id} car={item} />}
                snapToAlignment={"start"}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
                showsVerticalScrollIndicator={false}
            />


        </View >
    )
}

export default CarList;