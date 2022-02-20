import React, {useState} from 'react';
import {View, Text, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const SignUpScreen = () => {
    const [username, setUsername] = useState ('');
    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');
    const [passwordRepeat, setPasswordRepeat] = useState ('');

    const {height} = useWindowDimensions();

    const onSignUpPressed = () => {
        console.warn("SignUp Pressed");
    }

    const onForgotPasswordPressed = () => {
        console.warn("onForgotPasswordPressed");
    }

    

    const onSignInPressed = () => {
        console.warn("Sign In");
    }

    return (
        <ScrollView>
        <View style ={styles.root}>
            <Text style = {styles.title}>guavah</Text>

            {/* Here the user will input their Username*/ } 
            <CustomInput 
            placeholder="Username" 
            value={username} 
            setValue={setUsername}
            />
            {/* Here the user will input their email*/ } 
            <CustomInput 
            placeholder="Email" 
            value={email} 
            setValue={setEmail}
            />
            {/* Here the user will input their Password*/ } 
            <CustomInput 
            placeholder="Password" 
            value={password} 
            setValue={setPassword} 
            secureTextEntry
            />
             {/* Here the user will input their Password again to confirm it*/ } 
            <CustomInput 
            placeholder="Confirm Password" 
            value={passwordRepeat} 
            setValue={setPasswordRepeat} 
            secureTextEntry
            />

            <CustomButton 
            text = "Sign Up" 
            onPress={(onSignUpPressed)}/>

            <CustomButton 
            text = "Have an account? Sign In." 
            onPress={(onSignInPressed)}
            type = "TERTIARY"
            />
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding: 20
    },
    title: {
        fontSize: 50,
        color: '#E76D6C',
        margin: 10,
        fontFamily: 'Cera_Pro_Medium'
    }
});
export default SignUpScreen;