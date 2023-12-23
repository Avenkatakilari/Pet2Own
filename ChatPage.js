import React from "react";
import { StyleSheet,View,Text, } from "react-native";


const ChatPage = () => {
    return(
        <View style={Styles.Container}>
            <Text>Chat Page</Text>
        </View>   

  )
}

const Styles=StyleSheet.create({

    Container:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
    },
    
})

export default ChatPage;