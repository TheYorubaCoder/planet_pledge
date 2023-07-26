import React, {useState} from 'react';
import {View, TextInput, Button,TouchableOpacity, StyleSheet,Text,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const LoginPage= () => {
    const [firstName,setFirstName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigation = useNavigation();


    const handleLogin = () => {
        console.log('Login:',firstName,password);
        navigation.navigate('ProfilePage');
};

const handleSignup = () =>{
    console.log('Signup:',firstName,email, password);
    navigation.navigate('ProfilePage');
};

return (
    <View style={styles.container}>
        <Image
            source={require('../../../assets//logo.png')}
            style={[styles.image,{marginTop:50}]}
            />
        <Text style={styles.loginSignupText}>Sign Up/Sign In</Text>
        <TextInput
            style={styles.input}
            placeholder="First Name"
            value={firstName}
            onChangeText={setFirstName}
        />
        <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
        />
        <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
        />
        <TouchableOpacity style={styles.buttonCont} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login/Signup</Text>
      </TouchableOpacity>
    </View>
   );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#FEF6E6',
    },
    loginSignupText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 60,
        
      },
    input: {
        height: 60,
        borderColor:'gray',
        borderWidth:1,
        borderRadius: 12,
        marginBottom:12,
        paddingHorizontal:10,
        textAlign:'center',
        fontSize: 18,

    },
    buttonCont: {
        borderWidth: 3,
        borderColor: '#0D7B48',
        borderRadius: 18,
        padding: 10,
        backgroundColor: '#0D7B48',
        paddingVertical: 20,
        marginTop: 30, // Add margin top for spacing
        alignItems: 'center', // Align the button content in the center horizontally
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    image: {
        width:143,
        height:150,
        marginLeft: 130,
        marginBottom: 50,
    }
});

export default LoginPage;