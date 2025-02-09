import { StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { theme } from '../constants/theme'
import Home from '../icons/Home'
import Icon from '../icons'
import { StatusBar } from 'expo-status-bar'
import BackButton from '../components/BackButton'
import { useRouter } from 'expo-router'
import { wp, hp } from '../helpers/common'
import { TextInput } from 'react-native-web'
import Input from '../components/Input'

const login = () => {
    const router = useRouter();
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const [loading, setLoading] = useState(false);

  return (
    <ScreenWrapper>
        <StatusBar style='dark' />
        <View style={styles.container}>
            <BackButton router={router}/>

            {/* welcome text */}
            <View>
                <Text style={styles.welcomeText}>Hello,</Text>
                <Text style={styles.welcomeText}>Welcome Back</Text>
            </View>

            {/* form */}
            <View style={styles.form}>
                <Text style={{fontSize: hp(1.5), color: theme.colors.text}}>
                    Please login to continue
                </Text>
                <Input
                    icon={<Icon name="mail" size={26} strokeWidth={1.6} />}
                    placeholder='Enter your email'
                    onChangeText={value=>emailRef.current = value}
                />

                <Input
                    icon={<Icon name="lock" size={26} strokeWidth={1.6} />}
                    placeholder='Enter your password'
                    secureTextEntry
                    onChangeText={value=>passwordRef.current = value}
                />
            </View>
        </View>
    </ScreenWrapper>
  )
}

export default login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 45,
        paddingHorizontal: wp(5)
    },
    welcomeText: {
        fontSize: hp(4),
        fontWeight: theme.fonts.bold,
        color: theme.colors.text,
    },
    form: {
        gap: 25,
    },
    forgotPassword: {
        textAlign: 'right',
        fontWeight: theme.fonts.semibold,
        color: theme.colors.text
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5
    },
    footerText: {
        textAlign:'center',
        color: theme.colors.text,
        fontSize: hp(1.6)
    }
})