import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'

function DetailsScreen () {
    return (
        <View style={styles.screen}>
            <View>
                <Image source={require('../assests/images/dress.jpg')}  style={styles.imageStyle} />
            </View>
            <View style={styles.detailsSection}>
                <View style={styles.titlePrice}>
                    <Text style={styles.title}>Dress New</Text>
                    <Text style={styles.price}>$98</Text>
                </View>
                <View style={styles.descContainer}>
                    <Text style={styles.descText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and scrambled it to make a type
                           specimen book. It has survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged. It was popularised in
                             the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software like Aldus PageMaker
                               including versions of Lorem Ipsum.</Text>
                </View>
            </View>
            
        </View>

    )
}

export default DetailsScreen;

const styles = StyleSheet.create({
    imageStyle: {
        width: '100%',
        height: 350,
        resizeMode: 'contain'
    },
    screen: {
        backgroundColor: 'white',
        flex: 1
    },
    titlePrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center'
    },
    detailsSection: {
        backgroundColor: 'black',
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        flex: 1,
        elevation: 4
    },
    title: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold'
    },
    price: {
        color: 'white',
        fontSize: 18,
        
    },
    descText: {
        fontSize: 12,
        color: 'white',
    },
    descContainer: {
        padding: 10
    }
})