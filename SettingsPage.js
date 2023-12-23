import React from "react"
import { StyleSheet,View, Text, Button } from "react-native";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SettingsPage = ({navigation}) => {
    return(
        
        <SafeAreaView>
             
             <View style={Styles.Header}>
                <MaterialCommunityIcons name="cog" size={25}>
                    <Text>Settings</Text>
                </MaterialCommunityIcons>    
            </View>  
        

            <View style={Styles.Container}>
            <TouchableOpacity style={Styles.options} onPress={() =>  navigation.navigate('Profile')}> 
                    <MaterialCommunityIcons name="account-circle" size={30} >
                        <Text>Profile</Text>
                    
                    </MaterialCommunityIcons>
                    <View>
                        <Text style={Styles.sub_headings}>Account, Password, email, Personal Details.</Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity style={Styles.options} onPress={() => navigation.navigate('Notifications')}>
                    <MaterialCommunityIcons name="bell-ring" size={30}>
                        <Text>Notification</Text>
                    </MaterialCommunityIcons>
                    <View>
                        <Text style={Styles.sub_headings}>Ring, Silent, Sensitive-Notification.</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.options} onPress={() => navigation.navigate('Help')}>
                    <MaterialCommunityIcons name="lifebuoy" size={30}>
                        <Text>Help</Text>
                    </MaterialCommunityIcons>
                    <View>
                        <Text style={Styles.sub_headings}>ChatBot, Communications</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.options} onPress={() => navigation.navigate('About')}>
                    <MaterialCommunityIcons name="information" size={30}>
                        <Text>About</Text>
                    </MaterialCommunityIcons>
                    <View>
                        <Text style={Styles.sub_headings}>Agreement, Terms and Conditions.</Text>
                    </View>
                </TouchableOpacity>
            </View>


            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={{color:"red", fontSize:25, paddingLeft:50}}>Logout</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>

  )
}

const Styles=StyleSheet.create({

    Container:{
        paddingTop:10,
        paddingLeft:20,
        paddingRight:20,
        fontWeight:"bold",

    },
    sub_headings:{
        fontSize:15,
        paddingBottom:20,
        paddingLeft:30,
        marginBottom:5,

    },
    Header:{
        paddingLeft:10,
        borderBottomColor:"black",
        borderBottomWidth:1,
        marginBottom:10,
    },
    options:{
        backgroundColor:'#fff',
        borderRadius:10,
        paddingTop:10,
        paddingLeft:10,
        marginBottom:10,
    },
    
})


export default SettingsPage;