import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Logo from '../../../assets/images/Logo.png';

const SignInScreen = () => {
    return (
        <View>
            <Image source ={Logo} style={styles.Logo} resizeMode = "contain" />
        
            <Text>Sign In Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    Logo: {
        width: '70%',
        hight: 100,
    }
});
export default SignInScreen;