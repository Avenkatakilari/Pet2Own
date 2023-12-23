import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const About = () => {
    return(
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text style={Styles.Paragraph}>Welcome to pet2Own, where we're revolutionizing the way pet lovers experience the joy of companionship. Our mission is to make it easy for people to enjoy the love and company of pets without the long-term commitment. Whether you're a pet enthusiast, a busy professional, or a traveler missing your furry friends, we're here to make pet rental a delightful experience.</Text>

                    <Text style={Styles.Heading}>Who We Are</Text>
                    <Text style={Styles.Paragraph}>We're a passionate team of pet lovers and technologists who believe that everyone should have the opportunity to experience the happiness that comes with having a pet. Our journey began with a vision to bridge the gap between pet owners and those who crave the warmth and affection of a pet but may not be ready for a lifelong commitment.</Text>

                    <Text style={Styles.Heading}>What We Do</Text>
                    <Text style={Styles.Paragraph}>At pet2Own, we connect pet owners with individuals seeking short-term pet companionship. Here's how we can assist you:</Text>
                    <Text style={Styles.Paragraph}>1. Pet Rentals: Browse our selection of adorable, well-cared-for pets available for short-term rentals. Whether you want to spend an afternoon with a playful puppy or have a loyal companion for a weekend getaway, we've got you covered.</Text>
                    <Text style={Styles.Paragraph}>2. Verified Pet Owners: Rest assured that our pet owners are responsible and caring individuals who prioritize the well-being of their pets. We carefully vet all pet listings to ensure your safety and the welfare of the animals.</Text>
                    <Text style={Styles.Paragraph}>3. Booking Made Easy: Our user-friendly app allows you to easily browse, book, and pay for pet rentals in just a few clicks. It's never been more convenient to enjoy pet companionship.</Text>
                    <Text style={Styles.Paragraph}>4. Pet Care Resources: Access valuable information on pet care, from feeding and grooming to training and safety tips. We're committed to promoting responsible pet interactions.</Text>
                    <Text style={Styles.Paragraph}>5. Community of Pet Lovers: Connect with fellow pet enthusiasts, share your experiences, and build lasting connections with like-minded individuals who share your love for animals.</Text>
                    
                    <Text style={Styles.Heading}>Our Commitment</Text>
                    <Text style={Styles.Paragraph}>At pet2Own, we are committed to:</Text>
                    <Text style={Styles.Paragraph}>*Promoting responsible and ethical pet rental practices.</Text>
                    <Text style={Styles.Paragraph}>*Ensuring the well-being of pets during their rental experiences.</Text>
                    <Text style={Styles.Paragraph}>*Fostering a sense of community among pet lovers.</Text>
                    <Text style={Styles.Paragraph}>*Making pet rental a hassle-free and enjoyable experience for everyone involved.</Text>
                    <Text style={Styles.Paragraph}>*We take pride in providing a safe and reliable platform where pet owners and pet lovers can come together to create wonderful memories.</Text>
                    
                    <Text style={Styles.Heading}>Join Us on this Journey</Text>
                    <Text style={Styles.Paragraph}>We invite you to join our growing community of pet enthusiasts and experience the joy of pet companionship in a flexible and convenient way. Whether you're a seasoned pet owner or someone looking to explore the world of pets, pet2Own is your gateway to delightful pet rental experiences.</Text>
                    <Text style={Styles.Paragraph}>Thank you for choosing pet2Own as your trusted companion in the world of temporary pet companionship. Together, we'll make every day an opportunity to enjoy the love and company of our furry, feathered, and scaly friends.</Text>
                
                </View>
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
    Paragraph:{
        fontSize :15,
        paddingLeft:15,
        paddingRight:15,
        marginBottom:10,
    },
    Heading:{
        fontSize :19,
        fontWeight:"bold",
        paddingLeft:15,
        marginTop:10,
        
    }
    
})

export default About;