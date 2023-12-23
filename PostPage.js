import React from "react";
import { StyleSheet,Text,View,Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import RadioForm from "react-native-simple-radio-button";
import UploadImage from "../../components/Image_Uploader";
const PostPage = () => {
    
    const [chosenOption, setChosenOption] = useState(); 
    const options = [
        { label: 'Dog', value: 'dog' },
        { label: 'Cat', value: 'cat' },

    ];

    
    return(
        <SafeAreaView >
            <View style={Styles.Image_Uploader}>
                <UploadImage/>
            </View>
            
            
            <View style={{marginLeft:50, paddingHorizontal:100,}}>
                <RadioForm
                    radio_props={options}
                    initial={0} 
                    onPress={(value) => {
                        setChosenOption(value);
                        }} 
                />
            </View>
       
            <View style={{ marginLeft:35}}>
                <TextInput style={Styles.Input} placeholder="Name Of The Pet"></TextInput>
                <TextInput style={Styles.Input} placeholder="Breed"></TextInput>
                <TextInput style={Styles.Input} placeholder="Age"></TextInput>
            </View>

            <View>
                <Text style={{fontSize:20, marginLeft:46}}>From:</Text>
            </View>
            
            
            <View>
                <Text style={{fontSize:20, marginLeft:46}}>Then:</Text>
            </View>

            <View style={Styles.Submit_Button}>
                <Button title="Post" />
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
    Input:{
        marginLeft:12,
        height:40,
        width: 320,
        margin:10,
        borderWidth:.5,
        padding:10,
        fontSize:15,
    },
    Submit_Button:{
        padding:50,
        
    }, 
    Image_Uploader:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    
})

export default PostPage;