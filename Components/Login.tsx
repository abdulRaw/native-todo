import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import { useNavigation } from '@react-navigation/native';

const Auth = () => {
    const [authenticated, setAuthenticated] = useState(false);
    const nav = useNavigation();

    const handleAuthentication = async () => {
        try {
            const { success } = await LocalAuthentication.authenticateAsync({
                promptMessage: 'Authenticate to access the Auth', // Prompt shown to the user
                fallbackLabel: 'Use passcode', // Label for the fallback button
            });

            if (success) {
                setAuthenticated(true);
            } else {
                setAuthenticated(false);
            }
        } catch (error) {
            console.error('Authentication failed:', error);
        }
    };

    useEffect(() => {
        if (authenticated) {
            nav.navigate('Todo List');
        }
    }, [authenticated]);

    return (
        <View>
            <Button title="Log In" onPress={handleAuthentication} />
        </View>
    );
};

export default Auth;
