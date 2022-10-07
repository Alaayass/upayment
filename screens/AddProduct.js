import React, { useState } from "react";
import { View, Text, StyleSheet, Keyboard, TouchableWithoutFeedback, ScrollView } from 'react-native'
import Input from "../components/Input";
import CategoriesButton from '../components/CategoriesButton'
import { Button } from "@rneui/themed";
import { storeProduct } from "../util/http";



function AddProduct ({navigation}) {
 
  const [inputValues, setValues] = useState({
    productName: '',
    price: '',
    desc: '',
    imageLink: '',
    category: ''
  })

  function valueChangeHandler(inputIdentifier, enteredValue) {
          setValues((currentValues) => {
            return {
              ...currentValues,
              [inputIdentifier]: enteredValue
            }
          })
  }
 
  function submitHandler() {
    const product = {
      productName: inputValues.productName,
      price: inputValues.price,
      desc: inputValues.desc,
      imageLink: inputValues.imageLink,
      category: 'All'

    }
     storeProduct(product);
     navigation.goBack()

  }

  const [visible, setVisible] = useState(false);
  const [priceVisible, setPriceVisible] = useState(false);
  const [descVisible, setDescVisible] = useState(false);
  const [imageVisible, setLinkVisible] = useState(false);
   
  
  
  let productTitle;
  if(visible)
     productTitle=<Text style={styles.label}>Product Title</Text> 
     let priceLabel;
  if(priceVisible)
     priceLabel=<Text style={styles.label}>Price</Text> 
     let descLabel;
     if(descVisible)
        descLabel=<Text style={styles.label}>Description</Text>
        let imageLabel;
     if(imageVisible)
        imageLabel=<Text style={styles.label}>Image Link</Text>
  
    return (
      <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}} >
          <ScrollView>
            {productTitle}
            <Input inputConfig={{placeholder: 'Product Title', onFocus: () => {
          setVisible(true);
        }, onChangeText:  valueChangeHandler.bind(this, 'productName'), value: inputValues['productName'] } }  />
            {priceLabel}
            <Input inputConfig={{placeholder: 'Price', onFocus: () => {
          setPriceVisible(true);
        }, onChangeText: valueChangeHandler.bind(this, 'price'), value: inputValues['price']  } }  />
         {descLabel}
            <Input inputConfig={{placeholder: 'Description', onFocus: () => {
          setDescVisible(true);
        }, multiline: true, numberOfLines: 5, textAlignVertical: 'top', onChangeText: valueChangeHandler.bind(this, 'desc'),
     value: inputValues['desc'] } }  />
          {imageLabel}
            <Input inputConfig={{placeholder: 'Image Link', onFocus: () => {
          setLinkVisible(true);
        }, onChangeText: valueChangeHandler.bind(this, 'imageLink'), value: inputValues['imageLink'] } }  />
            <Text>Selected Category : </Text>
            <ScrollView >
              <CategoriesButton category={'Women-Clothing'}/>
              <CategoriesButton category={'Electronics'}/>
            </ScrollView>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Button
              title="Add Product"
              buttonStyle= {styles.buttonStyle}
              containerStyle= {styles.containerStyle}
              titleStyle= {styles.titleStyle}
              onPress= {submitHandler}
            />
            </View>
          </ScrollView>
          </TouchableWithoutFeedback>
    );
}

export default AddProduct;

const styles = StyleSheet.create({
  label: {
    marginHorizontal: 10,
    marginTop: 5
  },
  buttonStyle: { backgroundColor: 'rgba(39, 39, 39, 1)' },
  containerStyle: {
    
    marginHorizontal: 50,
    marginVertical: 10,
    borderRadius: 12
  },
  titleStyle: { color: 'white' }
});

