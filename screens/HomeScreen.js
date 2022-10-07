
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, FlatList } from 'react-native'
import CategoriesButton from '../components/CategoriesButton';
import ProductCard from '../components/ProductCard';
import { FAB } from "@rneui/themed";
import { fetchProducts } from "../util/http";



function HomeScreen ({navigation}) {

 const [fetchedProducts, setFetchedProducts]=useState([]);
console.log(fetchedProducts)
  function renderProductsHandler(itemData) {
    return <ProductCard name={itemData.item.productName} 
    price={itemData.item.price}  imageUrl={itemData.item.imageLink} onPress={()=> navigation.navigate('DetailsScreen')}/>

  }
  useEffect(() => {
    async function getCategories() {
       const products = await fetchProducts();
      setFetchedProducts(products) }
       getCategories();
      }, [])

  return (
    <View>
        
     <FlatList
     data={fetchedProducts}
     keyExtractor={(item) => {item.id}  }
     renderItem={renderProductsHandler}
     numColumns={2}
     />

      
      
      <View style={styles.fabContainer}>
      <FAB
        icon={{ name: 'add', color: 'black' }}
        color="white"
        onPress={() => navigation.navigate('AddProduct') }
      />
      </View>
      
    </View>
  )
}
export default HomeScreen;

const styles = StyleSheet.create({
    fabContainer: {
        margin: 10,
        alignItems: 'flex-end'
    }
})


