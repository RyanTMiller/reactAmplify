import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import Logo from '../../../assets/images/Logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const SignInScreen = () => {
    const [username, setUsername] = useState ('');
    const [password, setPassword] = useState ('');

    const {height} = useWindowDimensions();

    const onSignInPressed = () => {
        console.warn("Sign In");
    }

    const onForgotPasswordPressed = () => {
        console.warn("onForgotPasswordPressed");
    }

    const onSignInFacebook = () => {
        console.warn("Facebook");
    }
    const onSignInGoogle = () => {
        console.warn("Google");
    }
    const onSignInApple = () => {
        console.warn("Apple");
    }

    const onSignUp = () => {
        console.warn("No Account");
    }

    return (
        <ScrollView>
        <View style ={styles.root}>
            <Image source ={Logo} style={[styles.Logo, {height: height * .3}]} resizeMode = "contain" />
        
            <Text></Text>

            <CustomInput 
            placeholder="Username" 
            value={username} 
            setValue={setUsername}
            />
            <CustomInput 
            placeholder="Password" 
            value={password} 
            setValue={setPassword} 
            secureTextEntry
            />
            <CustomButton 
            text = "Sign In" 
            onPress={(onSignInPressed)}/>

            <CustomButton 
            text = "Forgot password?" 
            onPress={(onForgotPasswordPressed)} 
            type = "TERTIARY"/>

            <CustomButton 
            text = "Sign In with Facebook" 
            onPress={(onSignInFacebook)}/>

             <CustomButton 
            text = "Sign In with Google" 
            onPress={(onSignInGoogle)}/>

             <CustomButton 
            text = "Sign In with Apple" 
            onPress={(onSignInApple)}/>

            <CustomButton 
            text = "Don't have account? Create one" 
            onPress={(onSignUp)}
            type = "TERTIARY"
            />
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#F5F2F3'
    },
    Logo: {
        width: '70%',
        maxWidth: 500,
        maxheight: 300,
        
    }
});
export default SignInScreen;