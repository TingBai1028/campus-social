import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { supabase } from '../../lib/supabase';

const Home = () => {
    const {setAuth} = useAuth();

    const onLogout = async () => {
        setAuth(null);
        const {error} = await supabase.auth.signOut();
        if (error) {
            Alert.alert('Sign out', "Error Signing out!")
        }
    }
  return (
    <View>
      <Text>Home</Text>
      <Button title="logout" onPress={onLogout} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})