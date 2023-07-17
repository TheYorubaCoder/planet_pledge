import React from 'react';
import {View, StyleSheet,Image, Button, TouchableOpacity,Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const HomePage = () => {
    const navigation = useNavigation();

    const buttonPress = () =>{
        navigation.navigate("Login");
    };
    return (
        <View style={styles.container}>
            <Image
            source={require('../../assets//logo.png')}
            style={[styles.image,{marginTop:100}]}
            />
            <View>
                <TouchableOpacity style= {[styles.buttonCont,{marginTop:190}]} onPress={buttonPress}>
                        <Text style={styles.buttonText}>Join Now</Text>       
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FEF6E6',
    },
    image:{
        width:284,
        height:242
    },
    buttonCont:{
        borderWidth:3,
        borderColor:'#0D7B48',
        borderRadius: 18,
        padding:10,
        backgroundColor:'#0D7B48',
        paddingVertical: 20,

    },
    buttonText:{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },

});

export default HomePage;
