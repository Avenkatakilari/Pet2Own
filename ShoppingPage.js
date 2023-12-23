import React from 'react';
import { ImageBackground, Linking } from 'react-native';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const Chewy=()=>{
    Linking.openURL('https://www.chewy.com/b/premium-food-11728?utm_source=google&utm_medium=cpc&utm_campaign=20340602103&utm_content=150639003723&gclid=CjwKCAjwu4WoBhBkEiwAojNdXvTzZHFmEvw5kULt4L467AwrHms1xQgMXqSUkK-oFm7Y-juAGOUjdBoCvX0QAvD_BwE');
};
const Petco =()=>{
    Linking.openURL('https://www.petco.com/shop/en/petcostore');

};
const Amazon =()=>{
    Linking.openURL('https://www.amazon.com/s?k=best+pet+supply+websites&rh=n%3A2975312011&hvadid=598922197121&hvdev=c&hvlocphy=9003173&hvnetw=g&hvqmt=e&hvrand=11048015950922603959&hvtargid=kwd-18395038447&hydadcr=15947_13559298&tag=googhydr-20&ref=pd_sl_9bvf8xmvg2_e');
};


const ShoppingPage = () => {
    return(
        <SafeAreaView>
            
            <ScrollView>

                <TouchableOpacity  onPress={Chewy}>
                    <Text style={{fontSize:23, borderBottomWidth:1}}>   TOP WEBSITES FOR PET SHOPPING</Text>
                    <ImageBackground style={Styles.Image} source={require('C:/Users/aravind/pet2Own/assets/images/Chewy.jpg')}>
                        <Text style={{fontSize:30, fontStyle:"italic",fontWeight:"bold",paddingLeft:260,}}>
                        Chewy.com
                        </Text>
                    </ImageBackground>
                    <Text> * Wide variety of pet foods, treats, toys, and other supplies</Text>
                    <Text> * New customers receive up to 20% off or 30% off</Text>
                    <Text> * Customer service is available 24/7 by phone, chat, or email</Text>    
                    <Text> * Free 1-to-2-day shipping on orders over $49</Text>   
                    
                </TouchableOpacity>                
            
                <TouchableOpacity onPress={Petco}>
                    <ImageBackground style={Styles.Image} source={require('C:/Users/aravind/pet2Own/assets/images/Petco.jpg')}>
                        <Text style={{fontSize:30, fontStyle:"italic",fontWeight:"bold", paddingLeft:5}}>
                        Petco.com
                        </Text>
                    </ImageBackground>
                    <Text> * Removing pet food with artificial ingredients from its shelves.</Text>
                    <Text> * Buy online, store's, curbside, same-day delivery.</Text>
                    <Text> * Products for both cats and dogs, also birds and small animals.</Text>    
                    <Text> * Pet insurance, health products like flea and tick preventatives.</Text>   
                    <Text>*  Vet clinics (Vetco) which operate inside store locations.</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={Amazon}>
                    <ImageBackground style={Styles.Image} source={require('C:/Users/aravind/pet2Own/assets/images/Amazon.jpeg')}>
                        <Text style={{fontSize:29, fontStyle:"italic",fontWeight:"bold", paddingLeft:5, paddingTop:60}}>
                        Amazon.com
                        </Text>
                    </ImageBackground>
                    <Text> * Cost-effectiveness.</Text>
                    <Text> * Convenience.</Text>
                    <Text> * Wide Varieties.</Text>    
                    <Text> * You can save on gas and mileage.</Text>   
                </TouchableOpacity>
            </ScrollView>


        </SafeAreaView>
        
  )
}

const Styles=StyleSheet.create({

    Container:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
    },
    Image:{
        marginTop:30,
        width:500,
        height:145,
    }
    
})

export default ShoppingPage;