import React from "react";
import { View, Image, Text, Pressable, StyleSheet } from 'react-native'
import { Icon } from "@rneui/themed";

function ProductCard ({onPress, imageUrl, price, name}) {
    return (
        <View style={styles.cardContainer} >
            <Pressable style={({pressed}) => pressed && styles.pressed}  onPress={onPress}>
                <View>
                    <View style={styles.imageContainer}>
                    <Image source={{ 'uri': imageUrl }} style={styles.imageStyle}  />
                    </View>
                    <View style={styles.descContainer}> 
                        <Text style={styles.descText}>{name}</Text>
                        <View style={styles.editContainer}>
                        <Text style={styles.descText}>{price}</Text>
                        <Icon  name="pencil" type="ionicon" color={'yellow'}  />
                        </View>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

export default ProductCard;

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 20,
        elevation: 4,
        maxwidth: '40%',
        backgroundColor: 'white',
        marginHorizontal: 10,
        padding: 10,
        marginVertical: 10

    },
    descContainer: {
        backgroundColor: 'black',
        borderRadius: 8,
        marginTop: 20,
        marginBottom: 0,
        padding: 10
    },
    imageStyle: {
        width: 160,
        height: 150,
        resizeMode:'contain'
    },
    descText: {
        fontSize: 16,
        color: 'white'
    },
    editContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    pressed: {
        opacity: 0.75
    }

});