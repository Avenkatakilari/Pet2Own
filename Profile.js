import React from "react";
import { StyleSheet,View,Text, } from "react-native";
import UploadImage from "../../components/Image_Uploader";
import { SafeAreaView } from "react-native-safe-area-context";


const Profile = () => {
    return(
        <SafeAreaView>
            <View style={Styles.Image_Uploader}>
                <UploadImage/>
            </View>

        </SafeAreaView>   

  )
}

const Styles=StyleSheet.create({

    Container:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
    },
    Image_Uploader:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    
})

export default Profile;