import { Row } from "native-base";
import React from "react";
import{
    View,
    Text,
    Button,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    ImageBackground,
    Image,
    ImageBackgroundComponent,

} from "react-native";   

const HomePage = () => {
    return(
        <SafeAreaView>
            <View>
                <Text style={{fontSize:25, marginTop:10, textAlign:"center", fontWeight:"bold" }}>pet2Own</Text>
            </View>
            
            <ScrollView>

                <TouchableOpacity>
                    <Text style={Styles.Details}>
                        Name: leo
                        {'\n'}Age: 6 months
                        {'\n'}Address: 1000 twin rd, nj.
                    </Text>  
                    <Image style={Styles.Image} source={require('C:/Users/aravind/pet2Own/assets/images/cat.jpg')}></Image>
                    
                       
                </TouchableOpacity>                
            
                <TouchableOpacity>
                    <Text style={Styles.Details}>
                        Name: Snow
                        {'\n'}Age: 4 years
                        {'\n'}Address: 64 spring st, ct. 
                    </Text>  
                    <Image style={Styles.Image} source={require('C:/Users/aravind/pet2Own/assets/images/husky.jpg')}></Image>
                    
                </TouchableOpacity>     
                
                <TouchableOpacity>
                <Text style={Styles.Details}>
                        Name: puppy
                        {'\n'}age: 3 months
                        {'\n'}Address: 1000 AARON rd, nj.  
                    </Text>   
                    <Image style={Styles.Image} source={require('C:/Users/aravind/pet2Own/assets/images/dog1.jpg')}></Image>
                    
                </TouchableOpacity>     
                
                <TouchableOpacity>
                <Text style={Styles.Details}>
                        Name: roxy
                        {'\n'}age: 1 year
                        {'\n'}Address: taft ave, fairfield.
                    </Text>   
                    <Image style={Styles.Image} source={require('C:/Users/aravind/pet2Own/assets/images/dog2.jpg')}></Image>
                    
                </TouchableOpacity>   

                <TouchableOpacity>
                <Text style={Styles.Details}>
                        Name: siri
                        {'\n'}age: 8 months
                        {'\n'}Address: 48 chatfield dr, ct.
                    </Text>  
                    <Image style={Styles.Image} source={require('C:/Users/aravind/pet2Own/assets/images/cat1.jpg')}></Image>
                    
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
        marginTop:-50,
        marginRight:10,
        marginLeft:10,
        width:200,
        height:145,
    },
    Details:{
        marginTop:10,
        paddingLeft:225,
    },
    })

export default HomePage;