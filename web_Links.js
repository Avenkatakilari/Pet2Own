import React from "react"
import { StyleSheet,View, Text, Button, Linking } from "react-native";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Link= () => {
    const Dog = () =>{
        Linking.openURL('https://www.chewy.com/b/premium-food-11728?utm_source=google&utm_medium=cpc&utm_campaign=20340602103&utm_content=150639003723&gclid=CjwKCAjwu4WoBhBkEiwAojNdXvTzZHFmEvw5kULt4L467AwrHms1xQgMXqSUkK-oFm7Y-juAGOUjdBoCvX0QAvD_BwE');
    };
    
    const Cat = () =>{
        Linking.openURL('https://www.petco.com/shop/en/petcostore');
    };
    

};

export default Link;