import React from "react";
import { View, Text, Pressable, StyleSheet } from 'react-native'

function CategoriesButton({category}) {
    return (
    
    <Pressable style={({pressed}) => [pressed ? styles.catPressed : styles.catContainer] }>
        {({ pressed }) => (
                    <Text
                        style={[
                            {
                                color: pressed
                                    ? 'white'
                                    : 'Black',
                            },
                            styles.catText,
                        ]}>
                        {category}
                    </Text>
                )}
    </Pressable>
    
  )
}

export default CategoriesButton;

const styles = StyleSheet.create({
    catContainer: {
        borderRadius: 8,
        borderColor: 'black',
        backgroundColor: 'White',
        borderWidth: 2,
        marginVertical: 10,
        marginHorizontal: 8
    },
    catPressed: {
        borderRadius: 8,
        borderColor: 'black',
        backgroundColor: 'black',
        borderWidth: 2,
        marginVertical: 10,
        marginHorizontal: 8,
        opacity: 0.75
    },
    catText: {
        fontSize: 12,
        padding: 5,
        textAlign: 'center'
    },
   
})